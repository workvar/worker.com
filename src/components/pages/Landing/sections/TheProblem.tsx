"use client";

import { useRef } from "react";
import { pages } from "@/src/assets";
import { Cards } from "@/src/components/common";

export default function TheProblem() {
  const sectionRef = useRef<HTMLElement>(null);

  const problemCards = [
    {
      title: "Too many devices",
      subtitle: "More and more devices are joining the arsenal against you",
      image: pages.landing.devicesStack,
      imageAlt: "Stack of multiple digital devices",
      bgColor: "bg-[#E0F7E9]",
    },
    {
      title: "Information clutter",
      subtitle: "Too many docs, pages, tabs, and threads, all at once.",
      image: pages.landing.documentsStack,
      imageAlt: "Stacks of documents and papers",
      bgColor: "bg-[#F5F5DC]",
    },
    {
      title: "Multitasking",
      subtitle: "You believe that you are being efficient, but you are not",
      image: pages.landing.laptopMultitasking,
      imageAlt: "Laptop with multiple overlapping windows",
      bgColor: "bg-[#FFE4E6]",
    },
    {
      title: "Constant interruptions",
      subtitle: "Every app has to tell you about the latest sale on their platform",
      image: pages.landing.phoneInHand,
      imageAlt: "Phone in hand showing notifications",
      bgColor: "bg-[#E0F2FE]",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-6xl font-bold text-black mb-6 text-center fade-in">
          The problem
        </h2>
        <p className="text-lg text-gray-500 mb-12 text-center max-w-4xl mx-auto fade-in">
          The digital exposure we experience today is astronomical. We're constantly surrounded by screens, pings, and notifications that demand our attention. Every vibration or alert pulls us into a loop of quick checks and endless scrolling, leaving little room for stillness or focus.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {problemCards.map((card, index) => (
            <Cards.ImageDescription
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              image={card.image}
              imageAlt={card.imageAlt}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

