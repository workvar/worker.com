import { Cards } from "@/src/components/common";

interface PillarCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PillarCard = ({ icon, title, description }: PillarCardProps) => {
  return (
    <Cards.Glass>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center h-full justify-between">
        <div className="text-white mb-4 hidden md:block">
          {icon}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
          {title}
        </h3>
        <p className="text-xs md:text-base text-center text-white font-light leading-relaxed">
          {description}
        </p>
      </div>
    </Cards.Glass>
  );
};

export default PillarCard;