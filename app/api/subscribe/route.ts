import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic"; // optional for Next.js caching control

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Use SERVICE ROLE key for inserts (server-side only!)
);

async function verifyRecaptchaToken(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    console.warn("RECAPTCHA_SECRET_KEY not set, skipping verification");
    return true; // Allow in development if key is not set
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const { email, recaptchaToken } = await request.json();

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Verify reCAPTCHA token
    if (!recaptchaToken) {
      return new Response(
        JSON.stringify({
          error: "reCAPTCHA verification is required",
          code: "INVALID_RECAPTCHA",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const isValidRecaptcha = await verifyRecaptchaToken(recaptchaToken);
    if (!isValidRecaptcha) {
      return new Response(
        JSON.stringify({
          error: "reCAPTCHA verification failed. Please try again.",
          code: "INVALID_RECAPTCHA",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Check if email already exists
    const { data: existingData, error: checkError } = await supabase
      .from("newsletter")
      .select("email")
      .eq("email", email.toLowerCase().trim())
      .single();

    if (checkError && checkError.code !== "PGRST116") {
      // PGRST116 is "not found" error, which is expected for new emails
      throw checkError;
    }

    if (existingData) {
      return new Response(
        JSON.stringify({ 
          error: "This email is already subscribed to our newsletter",
          code: "DUPLICATE_EMAIL"
        }),
        {
          status: 409, // Conflict status
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Insert the subscriber
    const { data, error } = await supabase
      .from("newsletter")
      .insert([
        {
          email: email.toLowerCase().trim(),
          status: "subscribed",
        },
      ])
      .select();

    if (error) {
      // Check for duplicate key error (PostgreSQL unique constraint violation)
      if (error.code === "23505" || error.message?.includes("duplicate") || error.message?.includes("unique")) {
        return new Response(
          JSON.stringify({ 
            error: "This email is already subscribed to our newsletter",
            code: "DUPLICATE_EMAIL"
          }),
          {
            status: 409,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
      throw error;
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: error.message || "Unknown error" }),
      { 
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}