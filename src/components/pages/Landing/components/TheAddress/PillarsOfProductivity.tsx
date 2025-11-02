"use client";

import { PillarCard } from "@/src/components/pages/Landing/components/TheAddress";
import { pillars } from "../../data/TheAddress";

interface PillarsOfProductivityProps {
  ref: React.RefObject<HTMLDivElement>;
}

const PillarsOfProductivity = ({ ref }: PillarsOfProductivityProps) => {
  return (
    <div ref={ref} className="w-screen h-screen flex flex-col items-center justify-center px-6">
      {/* Title */}
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 text-center z-10">
        The pillars of productivity
      </h2>

      {/* Three pillar cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-7xl w-full z-10">
        {pillars.map((pillar, index) => (
          <PillarCard
            key={index}
            icon={pillar.icon}
            title={pillar.title}
            description={pillar.description}
          />
        ))}
      </div>
    </div>
  );
};

export default PillarsOfProductivity;