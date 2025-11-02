"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { general } from "@/src/assets/icons";
import { Input, Button } from "@/src/components/common"

export default function PreFooter() {
  const sectionRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState("");

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
  };

  return (
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
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 mt-4">
                <Input.InputBox type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required={true} />
                <Button.Button type="submit" label="Subscribe" />
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
  );
}

