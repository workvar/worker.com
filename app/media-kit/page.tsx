"use client";

import Image from "next/image";
import Link from "next/link";
import { company } from "@/src/assets";

export default function MediaKit() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            WorkVar brand resources and guidelines
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            Welcome to the WorkVar brand resource centre. WorkVar builds productivity tools and solutions like SileoTube and more. When referencing individual products, please follow their specific guidelines. For references to WorkVar, please follow the guidance on this page.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Updated in {new Date().getFullYear()}
          </p>
        </div>

        <hr className="border-gray-300 mb-12" />

        {/* The WorkVar Logo */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
            The WorkVar logo
          </h2>
          <p className="text-lg text-gray-700 mb-6 max-w-4xl">
            High-level details on how to use the WorkVar logo in your marketing and media communications is included below. Please work closely with your WorkVar counterpart for detailed guidelines and approvals through the internal brand review process.
          </p>

          {/* Logo Download Section */}
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Image
                  src={company.BlackTransparentLogo}
                  alt="WorkVar Logo"
                  width={200}
                  height={67}
                  className="h-16 w-auto"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">WorkVar</h3>
                <p className="text-gray-600 mb-4">
                  I have read and accept the applicable guidelines and other terms for use.
                </p>
                <a
                  href={company.BlackTransparentLogo.src}
                  download="WorkVar-Logo-Black.png"
                  className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  Download
                </a>
              </div>
            </div>
          </div>

          {/* When to use the logo */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              When to use the WorkVar logo
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Partnerships or sponsorships with a formal agreement in place with WorkVar</li>
              <li>Newscasts and news programming</li>
              <li>Editorials</li>
              <li>Books, plays, talk shows, TV shows and film scripts</li>
              <li>Print packaging</li>
              <li>Marketing or advertising that appears on TV or online</li>
            </ul>
            <p className="text-gray-700 mt-4 italic">
              Note: The WorkVar logo should not be used to represent individual products unless explicitly approved.
            </p>
          </div>

          {/* Color Variations */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Colour
            </h3>
            <p className="text-gray-700 mb-6">
              The WorkVar logo exists in multiple colour variations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Primary Black */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="bg-white p-4 rounded mb-4">
                  <Image
                    src={company.BlackTransparentLogo}
                    alt="WorkVar Logo - Black"
                    width={180}
                    height={60}
                    className="h-12 w-auto"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Primary</h4>
                <p className="text-sm text-gray-600">
                  Use a primary variation whenever possible.
                </p>
              </div>

              {/* White/Mono */}
              <div className="bg-gray-900 rounded-lg p-6">
                <div className="bg-transparent p-4 rounded mb-4">
                  <Image
                    src={company.WhiteTransparentLogo}
                    alt="WorkVar Logo - White"
                    width={180}
                    height={60}
                    className="h-12 w-auto"
                  />
                </div>
                <h4 className="font-semibold text-white mb-2">Mono</h4>
                <p className="text-sm text-gray-400">
                  Only use the mono variations in low reproduction environments when a primary variation cannot perform.
                </p>
              </div>
            </div>
          </div>

          {/* Minimum size and clear space */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Minimum size and clear space
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Minimum size</h4>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="bg-white p-4 rounded inline-block">
                    <Image
                      src={company.BlackTransparentLogo}
                      alt="WorkVar Logo - Minimum Size"
                      width={120}
                      height={40}
                      className="h-8 w-auto"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  The minimum size of the WorkVar logo is defined by the height of the symbol and should never be used below 12 px/5 mm.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Clear space</h4>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="bg-white p-4 rounded inline-block relative">
                    <Image
                      src={company.BlackTransparentLogo}
                      alt="WorkVar Logo - Clear Space"
                      width={120}
                      height={40}
                      className="h-8 w-auto"
                    />
                    <div className="absolute inset-0 border-2 border-dashed border-blue-400 -m-4" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  The clear space of the WorkVar logo is defined by doubling the height of the symbol, which is applied equally around the edges of the logo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional brand assets */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Additional brand assets
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Please visit the <Link href="/newsroom" className="text-blue-600 hover:underline">Newsroom</Link> for company information and approved imagery of WorkVar offices, executives and more.
          </p>
        </section>

        {/* Work with your WorkVar counterpart */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Work with your WorkVar counterpart for approvals
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            All usage of the WorkVar logo requires approval. Please work closely with your WorkVar counterpart for detailed guidelines and submitting a brand review request on your behalf through the internal brand review process.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Please note that we can only process requests made in English.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Advertising appearing on our products will be reviewed by our ad policy team and does not require permission here.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Contact us
            </Link>
          </div>
        </section>

        {/* Legal */}
        <section>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Legal
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            WorkVar dedicates substantial resources to the development and protection of its intellectual property. In addition to seeking registration of its trademarks and logos around the world, WorkVar enforces its rights against people who misuse its trademarks.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            WorkVar&apos;s trademarks are owned by WorkVar and may only be used as provided in these guidelines or with WorkVar&apos;s permission. You may not use or register, or otherwise claim rights in any WorkVar trademark, including as or as part of any trademark, service mark, company name, trade name, username or domain registration. You should not use or claim rights in any trademark in a way that is confusingly similar to or dilutive of WorkVar&apos;s trademarks, including as, or as any part of, a trademark. Do not use WorkVar&apos;s trademarks for anything that would be inconsistent with WorkVar&apos;s Terms of Service or Community Standards.
          </p>
          <p className="text-lg text-gray-700">
            We may revoke permission to use WorkVar&apos;s trademarks at any time. WorkVar reserves the right to withhold approval of content that it considers inconsistent with the WorkVar brand.
          </p>
        </section>
      </div>
    </div>
  );
}