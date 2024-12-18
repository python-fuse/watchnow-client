import { TToastItem } from "@/lib/definitions";
import React, {
  useContext,
  createContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";

interface ToastContextProps {
  addToast: (newItem: Omit<TToastItem, "id">) => void;
  deleteToast: (id: string) => void;
  toastItems: TToastItem[];
  duration?: number;
}

const ToastContext = createContext<ToastContextProps | null>(null);

export const ToastContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toastItems, setToastItems] = useState<TToastItem[]>([]);
  const timeoutRefs = useRef<Map<String, NodeJS.Timeout>>(new Map());

  useEffect(() => {
    timeoutRefs.current.forEach((timeout) => clearTimeout(timeout));
  }, []);

  const deleteToast = useCallback((id: string) => {
    const timeout = timeoutRefs.current.get(id);
    if (timeout) {
      clearTimeout(timeout);
      timeoutRefs.current.delete(id);
    }
    setToastItems((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback(
    (newItem: Omit<TToastItem, "id">) => {
      const id = crypto.randomUUID();
      const newest = { ...newItem, id };
      setToastItems((prev) => [...prev, newest]);

      const timeout = setTimeout(() => {
        deleteToast(newest.id);
      }, newest.duration || 4000);

      timeoutRefs.current.set(id, timeout);
    },
    [deleteToast]
  );

  return (
    <ToastContext.Provider value={{ addToast, deleteToast, toastItems }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
};
