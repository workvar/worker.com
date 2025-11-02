"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function About() {
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (contentRef.current) {
        const items = contentRef.current.querySelectorAll(".fade-in");
        gsap.fromTo(
          items,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
        );
      }
    },
    { scope: contentRef }
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div ref={contentRef}>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8 fade-in">
            About Us
          </h1>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 fade-in">
              WorkVar is a modern web application built with Next.js, featuring
              beautiful animations powered by GSAP and a responsive design using
              TailwindCSS.
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md fade-in">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                To create beautiful, performant web experiences with modern
                technologies and best practices.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md fade-in">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Technologies
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Next.js 16 - React framework</li>
                <li>TypeScript - Type safety</li>
                <li>TailwindCSS - Utility-first CSS</li>
                <li>GSAP - Professional animations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

