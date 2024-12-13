import Spinner from "./Spinner";

interface ButtonProps {
  text: string;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  loading,
  onClick,
  type = "button",
  disabled,
}) => {
  return (
    <button
      aria-label={text}
      type={type}
      onClick={onClick}
      disabled={loading}
      className={
        "bg-violet-500 text-white rounded-md p-2 hover:bg-violet-600 duration-300 border-2 border-transparent hover:border-violet-500 grid place-content-center h-[43px] " +
        (loading ? "cursor-not-allowed pointer-events-none" : "")
      }
    >
      {loading ? <Spinner /> : text}
    </button>
  );
};
export default Button;
