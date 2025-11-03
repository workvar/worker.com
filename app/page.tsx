import Hero from "@/src/components/pages/Landing/sections/Hero";
import TheProblem from "@/src/components/pages/Landing/sections/TheProblem";
import TheEpidemic from "@/src/components/pages/Landing/sections/TheEpidemic";
import TheAddress from "@/src/components/pages/Landing/sections/TheAddress";
import PreFooter from "@/src/components/pages/Landing/sections/PreFooter";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "WorkVar - Your Productivity OS",
  description: "WorkVar - Your productivity OS with modern tools and solutions",
  metadataBase: new URL("https://workvar.com"),
  openGraph: {
    title: "WorkVar - Your Productivity OS",
    description: "WorkVar - Your productivity OS with modern tools and solutions",
    images: [
      {
        url: "/og-anime.gif",
        width: 1200,
        height: 630,
        alt: "WorkVar - Your Productivity OS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/og-anime.gif",
        width: 1200,
        height: 630,
        alt: "WorkVar - Your Productivity OS",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TheProblem />
      <TheEpidemic />
      <TheAddress />
      <PreFooter />
    </>
  );
}

