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
    <div>
      <button onClick={onClick}>
        <div
          className={`w-full py-4 px-6 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl transition cursor-pointer ${className}`}
        >
          {label}
        </div>
      </button>
    </div>
  );
};

export default SubmitButton;
