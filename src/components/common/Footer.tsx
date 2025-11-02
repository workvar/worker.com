"use client";

import Image from "next/image";
import Link from "next/link";
import { company, icons } from "@/src/assets";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Branding Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-1">
              <Image
                src={company.WhiteTransparentLogo}
                alt="Work"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm mx-auto md:ml-3">
              Your productivity OS
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm md:text-base">
              Products
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products/sileotube"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  SileoTube
                </Link>
              </li>
              <li>
                <Link
                  href="/products/projex"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  ProjeX
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm md:text-base">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/newsroom"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/media-kit"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Media Kit
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm md:text-base">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/newsletter"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/help-center"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm md:text-base">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with Social Icons and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-xs">
            © {currentYear} WorkVar, All rights reserved
          </p>
          <div className="flex gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-70 transition-opacity"
              aria-label="X (Twitter)"
            >
              <icons.social.TwitterIcon />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-70 transition-opacity"
              aria-label="Instagram"
            >
              <icons.social.InstagramIcon />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-70 transition-opacity"
              aria-label="YouTube"
            >
              <icons.social.YouTubeIcon />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-70 transition-opacity"
              aria-label="Facebook"
            >
              <icons.social.FacebookIcon />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-70 transition-opacity"
              aria-label="LinkedIn"
            >
              <icons.social.LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

