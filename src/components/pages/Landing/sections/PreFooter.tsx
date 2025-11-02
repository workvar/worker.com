"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { general } from "@/src/assets/icons";
import { Input, Button, Modal } from "@/src/components/common"

export default function PreFooter() {
  const sectionRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [showRecaptcha, setShowRecaptcha] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  
  // Get reCAPTCHA site key from environment variables
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

  useGSAP(
    () => {
      if (sectionRef.current) {
        const items = sectionRef.current.querySelectorAll(".fade-in");
        gsap.fromTo(
          items,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
        );
      }
    },
    { scope: sectionRef }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show reCAPTCHA modal if token is not already verified
    if (!recaptchaToken) {
      setShowRecaptcha(true);
      return;
    }

    // Proceed with submission
    await submitNewsletter();
  };

  const handleRecaptchaVerify = (token: string | null) => {
    if (token) {
      setRecaptchaToken(token);
      // Close modal immediately - it will animate out
      setShowRecaptcha(false);
      // Automatically submit after modal animation completes
      setTimeout(() => {
        submitNewsletter();
      }, 250);
    }
  };

  const handleRecaptchaClose = () => {
    setShowRecaptcha(false);
    setRecaptchaToken(null);
  };

  const submitNewsletter = async () => {
    if (!recaptchaToken) {
      setShowRecaptcha(true);
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, recaptchaToken }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 409 || data.code === "DUPLICATE_EMAIL") {
          setMessage({
            type: "error",
            text: data.error || "This email is already subscribed to our newsletter",
          });
        } else if (response.status === 400 && data.code === "INVALID_RECAPTCHA") {
          setMessage({
            type: "error",
            text: data.error || "reCAPTCHA verification failed. Please try again.",
          });
          // Reset token to require new verification
          setRecaptchaToken(null);
          setShowRecaptcha(true);
        } else {
          setMessage({
            type: "error",
            text: data.error || "Something went wrong. Please try again later.",
          });
        }
        return;
      }

      setMessage({
        type: "success",
        text: "Successfully subscribed! Check your email for confirmation.",
      });
      setEmail("");
      // Reset reCAPTCHA token after successful submission
      setRecaptchaToken(null);
    } catch (error) {
      setMessage({
        type: "error",
        text: "Network error. Please check your connection and try again.",
      });
      // Reset token on error to require new verification
      setRecaptchaToken(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Left Column - Newsletter */}
          <div className="fade-in bg-green-100 rounded-lg p-8 lg:p-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Join the<br />movement
            </h2>
            <p className="text-xl text-gray-900 mb-8">
              Every minute of focus reclaimed is a quiet act of rebellion in a distracted world.
            </p>
            <div>
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
                SUBSCRIBE TO OUR NEWSLETTER
              </h3>
              <p className="text-xs text-gray-900">
                No spam. Just mindful productivity updates.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4">
                <div className="flex flex-col md:flex-row gap-2">
                  <Input.InputBox
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setMessage(null); // Clear message when user types
                    }}
                    placeholder="Enter your email"
                    required={true}
                    disabled={isLoading}
                  />
                  <Button.Button
                    type="submit"
                    label={isLoading ? "Subscribing..." : "Subscribe"}
                    disabled={isLoading}
                  />
                </div>
                <div
                  className={`text-xs absolute bottom-4 ${message && message.type === "success"
                      ? "text-green-800"
                      : "text-red-800"
                    }`}
                >
                  {message && message.text}
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Solutions */}
          <div className="fade-in bg-[#E0E8F0] rounded-lg p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                Check out<br />our solutions
              </h2>
              <p className="text-xl text-gray-900">
                We put deep thoughts into creating a productive, distraction-free environment for you to work.
              </p>
            </div>
            <Link href="/products">
              <Button.ButtonWithIcon label="Solutions" icon={<general.ArrowRight className="w-5 h-5 text-white" />} />
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* reCAPTCHA Modal */}
    {recaptchaSiteKey && (
      <Modal.RecaptchaModal
        isOpen={showRecaptcha}
        onVerify={handleRecaptchaVerify}
        onClose={handleRecaptchaClose}
        siteKey={recaptchaSiteKey}
      />
    )}
    </>
  );
}

