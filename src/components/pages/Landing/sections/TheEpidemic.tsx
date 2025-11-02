"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { pages } from "@/src/assets";
import { Cards } from "@/src/components/common";

export default function TheEpidemic() {
  const sectionRef = useRef<HTMLElement>(null);

  const video = pages.landing.manUsingPhoneVideo as string;

  useGSAP(
    () => {
      if (sectionRef.current) {
        const items = sectionRef.current.querySelectorAll(".fade-in");
        gsap.fromTo(
          items,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" }
        );
      }
    },
    { scope: sectionRef }
  );

  const stats = [
    {
      number: "59",
      unit: "%",
      description: "Professionals disturbed by phone every 30 mins<sup>1</sup>",
    },
    {
      number: "48",
      unit: "x",
      description: "Average times unlocked without intent in a day<sup>2</sup>",
    },
    {
      number: "23",
      unit: "m",
      description: "Time it taken on average person to regain focus<sup>3</sup>",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="fade-in w-full mb-5 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Its an epidemic
          </h2>
          <p className="text-lg text-gray-700">
            We live in an age of constant stimulation — and the numbers tell the story.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-start">
          {/* Left Column - Text and Stats */}
          <div className="h-full">
            <div className="grid grid-cols-1 gap-3 h-full">
              {stats.map((stat, index) => (
                <Cards.Stat
                  key={index}
                  number={stat.number}
                  unit={stat.unit}
                  description={stat.description}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="fade-in">
            <div className="relative w-full h-[600px] lg:h-[700px] rounded-lg overflow-hidden">
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

