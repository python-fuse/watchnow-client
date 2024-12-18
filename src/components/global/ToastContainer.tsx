import { useToast } from "@/contexts/toastContext";
import ToastItem from "./ToastItem";

const ToastContainer = () => {
  const { toastItems } = useToast();
  return (
    <>
      {toastItems.length > 0 && (
        <div className="flex flex-col gap-y-2 text-black absolute left-2 bottom-4   z-50 p-2  rounded">
          {toastItems.map((toastItem) => (
            <ToastItem
              key={toastItem.id}
              content={toastItem.content}
              status={toastItem.status}
              toastId={toastItem.id}
            />
          ))}
        </div>
      )}
    </>
  );
};
export default ToastContainer;
