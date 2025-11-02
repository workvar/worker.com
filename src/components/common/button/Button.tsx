interface ButtonProps {
    type?: "submit" | "button" | "reset";
    label: string;
    onClick?: () => void;
    disabled?: boolean;
}

const Button = ({ type = "button", label, onClick, disabled = false }: ButtonProps) => (
    <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`px-6 py-3 bg-gray-900 text-white font-medium rounded-lg transition-colors ${
            disabled
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer hover:bg-gray-800"
        }`}
    >
        {label}
    </button>
)

export default Button;