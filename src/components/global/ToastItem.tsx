import { useToast } from "@/contexts/toastContext";
import { TToastItem } from "@/lib/definitions";
import { BsCheckCircle, BsInfoCircle, BsX, BsXCircle } from "react-icons/bs";
import { IoWarningOutline } from "react-icons/io5";

interface ToastItemsProps {
  status: TToastItem["status"];
  content: TToastItem["content"];
  toastId: TToastItem["id"];
}

const ToastItem: React.FC<ToastItemsProps> = ({ status, content, toastId }) => {
  const { deleteToast } = useToast();
  return (
    <div
      className={`toast flex items-center text-xs w-max justify-between p-2 rounded  gap-x-2 ${
        status === "success"
          ? "bg-green-400"
          : status === "error"
          ? "bg-red-400"
          : status === "info"
          ? "bg-blue-400"
          : "bg-blue-400"
      }`}
    >
      {status === "success" ? (
        <BsCheckCircle />
      ) : status === "error" ? (
        <BsXCircle />
      ) : status === "info" ? (
        <BsInfoCircle />
      ) : (
        <IoWarningOutline />
      )}
      <span className="text-sm text-nowrap">{content}</span>
      <button
        className="hover:outline border-violet-500  rounded-full"
        onClick={() => deleteToast(toastId)}
      >
        <BsX />
      </button>
    </div>
  );
};
export default ToastItem;
