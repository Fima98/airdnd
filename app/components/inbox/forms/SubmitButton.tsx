interface SubmitButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  label,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`py-4 px-6 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl transition cursor-pointer ${
        className || ""
      }`}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
