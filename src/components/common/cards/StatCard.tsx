"use client";

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
  return (
    <div className="fade-in bg-gray-200 border border-gray-300 rounded-lg p-6 min-h-[200px] grid grid-cols-5 gap-2">
      <div className="flex flex-row items-center mb-3 col-span-2 justify-center">
        <span className="text-7xl font-semibold text-gray-900">{number}</span>
        <span className="text-4xl font-semibold text-gray-700 ml-1">{unit}</span>
      </div>
      <div className="text-gray-500 text-xl col-span-3 flex items-center pr-1">
        <span dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
}

export default StatCard;