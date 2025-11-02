interface InputBoxProps {
    type: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    placeholder?: string;
}

const InputBox = ({ type, value, onChange, required, placeholder }: InputBoxProps) => (
    <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="flex-1 px-4 py-3 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-900"
    required={required}
  />
)

export default InputBox;