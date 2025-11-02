"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { company } from "@/src/assets";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Liquid Glass Container */}
      <div className="relative w-full">
        {/* Glass Background with Blur */}
        <div className="absolute inset-0 bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl backdrop-saturate-150">
          {/* Liquid Glass Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-transparent dark:from-gray-800/30 dark:via-gray-800/10 pointer-events-none" />
          
          {/* Animated Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-gray-400/10 pointer-events-none opacity-50 animate-shimmer" />
        </div>

        {/* Navigation Content */}
        <nav className="relative max-w-7xl mx-auto px-6 py-4 lg:py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center relative z-10">
              <Image
                src={company.WhiteTransparentLogo}
                alt="Work"
                width={80}
                height={20}
                className="h-5 w-auto drop-shadow-sm"
                priority
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6 lg:gap-12 relative z-10 text-white">
              <Link
                href="/vision"
                className="uppercase text-sm lg:text-base font-medium hover:opacity-80 transition-all duration-300 relative group"
              >
                <span className="relative z-10">VISION</span>
                <span className="absolute inset-0 bg-white/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
              </Link>
              <Link
                href="/products"
                className="uppercase text-sm lg:text-base font-medium hover:opacity-80 transition-all duration-300 relative group"
              >
                <span className="relative z-10">PRODUCTS</span>
                <span className="absolute inset-0 bg-white/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
              </Link>
              <Link
                href="/newsroom"
                className="uppercase text-sm lg:text-base font-medium hover:opacity-80 transition-all duration-300 relative group"
              >
                <span className="relative z-10">NEWSROOM</span>
                <span className="absolute inset-0 bg-white/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white focus:outline-none relative z-10 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-lg p-2 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 relative z-10">
              <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl rounded-2xl p-4 border border-white/30 dark:border-gray-700/30">
                <Link
                  href="/vision"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-black dark:text-white uppercase text-sm font-medium hover:opacity-80 transition-opacity py-2 px-4 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/10"
                >
                  VISION
                </Link>
                <Link
                  href="/products"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-black dark:text-white uppercase text-sm font-medium hover:opacity-80 transition-opacity py-2 px-4 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/10"
                >
                  PRODUCTS
                </Link>
                <Link
                  href="/newsroom"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-black dark:text-white uppercase text-sm font-medium hover:opacity-80 transition-opacity py-2 px-4 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700/10"
                >
                  NEWSROOM
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

