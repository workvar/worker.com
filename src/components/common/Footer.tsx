"use client";

import Image from "next/image";
import Link from "next/link";
import { company, icons } from "@/src/assets";

const footerLinks = [
  {
    title: "Products",
    links: [
      {
        title: "SileoTube",
        href: "/products/sileotube",
      },
      {
        title: "ProjeX",
        href: "/products/projex",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        title: "About",
        href: "/about",
      },
      {
        title: "News",
        href: "/newsroom",
      },
      {
        title: "Media Kit",
        href: "/media-kit",
      },
      {
        title: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        title: "Blog",
        href: "/blog",
      },
      {
        title: "Newsletter",
        href: "/newsletter",
      },
      {
        title: "Events",
        href: "/events",
      },
      {
        title: "Help Center",
        href: "/help-center",
      },
      {
        title: "Support",
        href: "/support",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        title: "Terms",
        href: "/terms",
      },
      {
        title: "Privacy",
        href: "/privacy",
      },
      {
        title: "Cookies",
        href: "/cookies",
      },
    ],
  },
];

const socialLinks = [
  {
    title: "X (Twitter)",
    ariaLabel: "X (Twitter)",
    href: "https://twitter.com",
    icon: icons.social.TwitterIcon,
  },
  {
    title: "Instagram",
    ariaLabel: "Instagram",
    href: "https://instagram.com",
    icon: icons.social.InstagramIcon,
  },
  {
    title: "YouTube",
    ariaLabel: "YouTube",
    href: "https://youtube.com",
    icon: icons.social.YouTubeIcon,
  },
  {
    title: "Facebook",
    ariaLabel: "Facebook",
    href: "https://facebook.com",
    icon: icons.social.FacebookIcon,
  },
  {
    title: "LinkedIn",
    ariaLabel: "LinkedIn",
    href: "https://www.linkedin.com/company/109643291",
    icon: icons.social.LinkedInIcon,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white text-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Branding Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-1">
              <Image
                src={company.BlackTransparentLogo}
                alt="Work"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm mx-auto md:ml-3">
              Your productivity OS
            </p>
            {/* Bottom Section with Social Icons and Copyright */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
              <div className="flex gap-6">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:opacity-70 transition-opacity"
                      aria-label={social.ariaLabel}
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer Links Columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-black mb-4 text-sm md:text-base">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-black transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-200">
          <p className="text-gray-400 text-xs text-right w-full">
            © {currentYear} WorkVar, All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

