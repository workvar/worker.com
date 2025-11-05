"use client";

import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-20">
        {/* Our Mission */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            OUR MISSION
          </h1>
          <p className="text-2xl md:text-3xl text-gray-900 leading-relaxed max-w-4xl">
            Build the future of focused work and the technology that makes deep productivity possible
          </p>
        </section>

        {/* Our Principles */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
            Our principles
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-4xl">
            WorkVar is building technology that helps you reclaim your focus and achieve meaningful work. Our principles embody what we stand for and guide our approach to how we build.
          </p>

          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Give people clarity
              </h3>
              <p className="text-lg text-gray-700">
                People deserve to work with intention and purpose. We create tools that help you cut through noise and see what truly matters, even when the world around you is designed to distract.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Build focus and control
              </h3>
              <p className="text-lg text-gray-700">
                Our products help you protect your attention. When distractions fade and your environment supports deep work, you can accomplish what truly matters.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Serve everyone
              </h3>
              <p className="text-lg text-gray-700">
                We work to make focus tools accessible to everyone. Our products are free and open source, because everyone deserves the right to work without constant distraction.
              </p>
            </div>

            <div className="border-l-4 border-orange-600 pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Keep people safe and protect privacy
              </h3>
              <p className="text-lg text-gray-700">
                We have a responsibility to protect your privacy and digital well-being. Our tools store data locally and never track your behavior. Your focus is your business, not ours.
              </p>
            </div>

            <div className="border-l-4 border-indigo-600 pl-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Promote sustainable productivity
              </h3>
              <p className="text-lg text-gray-700">
                True productivity isn&apos;t about doing more—it&apos;s about doing what matters most without burning out. We build tools that support balance and sustainable work practices.
              </p>
            </div>
          </div>
        </section>

        {/* Our History */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
            Our history
          </h2>
          <div className="max-w-4xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              WorkVar was born from a simple observation: the tools we use to work are increasingly designed to capture our attention rather than serve our goals. When we launched our first product, SileoTube, we set out to prove that technology could be different—that we could build tools that respect your attention instead of competing for it.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, WorkVar continues to evolve beyond reactive productivity tools toward a future where technology amplifies your focus rather than fragments it. We&apos;re building the next generation of productivity tools that put you in control of your attention and your time.
            </p>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Join us
          </h2>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl">
            At WorkVar, we want you to build a career where you&apos;re challenged, valued, and learning from the best. Join us to build the future of focused work and the technology that makes it possible.
          </p>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl">
            We&apos;re always looking for people who share our mission of creating technology that serves people rather than exploiting their attention.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Get in touch
            </Link>
          </div>
        </section>

        {/* Catch up on the latest news */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Catch up on the latest news
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            <Link href="/newsroom" className="text-blue-600 hover:underline">
              See more at Newsroom →
            </Link>
          </p>
        </section>

        {/* More about WorkVar */}
        <section>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
            MORE ABOUT WORKVAR
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/vision"
              className="group p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Our vision
              </h3>
              <p className="text-gray-600">
                Discover more about where we&apos;re heading
              </p>
            </Link>
            <Link
              href="/products"
              className="group p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Our products
              </h3>
              <p className="text-gray-600">
                Explore the tools we&apos;re building
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

