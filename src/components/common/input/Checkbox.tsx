import { icons } from "@/src/assets";

type CheckboxProps = {
  label: string;
  completed: boolean;
};

const Checkbox = ({ label, completed }: CheckboxProps) => {
  return (
    <div className="flex items-center gap-3 text-white">
      <div className={`w-6 h-6 border-2 flex items-center justify-center rounded-sm transition-all duration-300 border-white ${completed ? 'bg-white' : 'bg-transparent'}`}>
        {completed && (
          <icons.general.Check className="w-4 h-4 text-black" />
        )}
      </div>
      <span className={`text-lg font-medium text-white ${completed ? 'line-through opacity-70' : ''}`}>
        {label}
      </span>
    </div>
  );
};

export default Checkbox;