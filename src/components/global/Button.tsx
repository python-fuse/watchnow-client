import Spinner from "./Spinner";

interface ButtonProps {
  text: string;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  onClick?: (() => void) | (() => Promise<void>);
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text,
  loading,
  onClick,
  type = "button",
  disabled,
  className,
  children,
}) => {
  const defaultBgClass = "bg-violet-500 hover:bg-violet-600 ";
  const baseClasses =
    "flex items-center gap-x-2 text-sm  rounded-md duration-300 border-2 border-transparent hover:border-violet-500 md:p-2 place-content-center p-1 text-white";

  return (
    <button
      aria-label={text}
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`
        ${
          className?.includes("bg-")
            ? className
            : `${defaultBgClass} ${className}`
        }
        ${baseClasses}
        ${loading ? "cursor-not-allowed pointer-events-none" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}
      `.trim()}
    >
      {loading ? <Spinner /> : children ? children : text}
    </button>
  );
};
export default Button;
