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
  return (
    <button
      aria-label={text}
      type={type}
      onClick={onClick}
      disabled={loading}
      className={
        "bg-violet-500 flex items-center gap-x-2 text-sm  text-white rounded-md p-2 hover:bg-violet-600 duration-300 border-2 border-transparent hover:border-violet-500  place-content-center " +
        (loading ? "cursor-not-allowed pointer-events-none " : "") +
        " " +
        className
      }
    >
      {loading ? <Spinner /> : children ? children : text}
    </button>
  );
};
export default Button;
