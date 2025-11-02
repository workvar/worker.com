import type { Metadata } from "next";
import { MuseoModerno, Montserrat } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/src/components/common";  

const museoModerno = MuseoModerno({
  subsets: ["latin"],
  variable: "--font-museo-moderno",
});
  
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "WorkVar - Your Productivity OS",
  description: "WorkVar - Your productivity OS with modern tools and solutions",
  metadataBase: new URL("https://workvar.com"),
  openGraph: {
    title: "WorkVar - Your Productivity OS",
    description: "WorkVar - Your productivity OS with modern tools and solutions",
    url: "https://workvar.com",
    siteName: "WorkVar",
    images: [
      { url: "/icon.png", width: 1200, height: 630, alt: "WorkVar" },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${museoModerno.variable} ${montserrat.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

