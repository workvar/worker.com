"use client";

import { useRef } from "react";
import { useCardAnimation } from "./useCardAnimation";

interface StatCardProps {
  number: string;
  unit: string;
  description: string;
  superscript?: number;
}

const StatCard = ({
  number,
  unit,
  description,
}: StatCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useCardAnimation(cardRef);

  return (
    <div ref={cardRef} className="bg-gray-200 border border-gray-300 rounded-lg p-6 md:min-h-[200px] grid grid-cols-5 gap-2">
      <div className="flex flex-row items-center mb-3 col-span-2 justify-center">
        <span className="text-5xl md:text-7xl font-semibold text-gray-900">{number}</span>
        <span className="text-3xl md:text-4xl font-semibold text-gray-700 ml-1">{unit}</span>
      </div>
      <div className="text-gray-500 text-base md:text-xl col-span-3 flex items-center pr-1">
        <span dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
}

export default StatCard;