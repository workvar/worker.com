interface ButtonProps {
    type?: "submit" | "button" | "reset";
    label: string;
    onClick?: () => void;
}

const Button = ({ type = "button", label, onClick }: ButtonProps) => (
    <button
        type={type}
        onClick={onClick}
        className="cursor-pointer px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
    >
        {label}
    </button>
)

export default Button;