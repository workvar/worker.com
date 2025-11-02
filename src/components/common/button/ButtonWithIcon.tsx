interface ButtonWithIconProps {
    label: string;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    onClick?: () => void;
}

const ButtonWithIcon = ({ label, icon, iconPosition = "right", onClick }: ButtonWithIconProps) => {
    return (
        <button className="mt-8 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2" onClick={onClick}>
            {icon && iconPosition === "left" && icon}
            {label}
            {icon && iconPosition === "right" && icon}
        </button>
    );
};

export default ButtonWithIcon;