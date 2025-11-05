import Link from "next/link";
import { company } from "@/src/assets";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold text-gray-500 leading-none">
            404
          </h1>
        </div>

        {/* Message */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            This page isn&apos;t available
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            The link you followed may be broken, or the page may have been removed.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-lg"
          >
            Go to Homepage
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 mb-6">You might be looking for:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="text-blue-600 hover:underline text-sm"
            >
              About
            </Link>
            <Link
              href="/products"
              className="text-blue-600 hover:underline text-sm"
            >
              Products
            </Link>
            <Link
              href="/newsroom"
              className="text-blue-600 hover:underline text-sm"
            >
              Newsroom
            </Link>
            <Link
              href="/contact"
              className="text-blue-600 hover:underline text-sm"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

