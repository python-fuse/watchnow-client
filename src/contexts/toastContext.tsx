import { TToastItem } from "@/lib/definitions";
import React, { useContext, createContext, useState } from "react";

interface ToastContextProps {
  addToast: (newItem: Omit<TToastItem, "id">) => void;
  deleteToast: (id: string) => void;
  toastItems: TToastItem[];
}

const ToastContext = createContext<ToastContextProps | null>(null);

export const ToastContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toastItems, setToastItems] = useState<TToastItem[]>([]);

  const deleteToast = (id: string) =>
    setToastItems(toastItems.filter((item) => item.id !== id));

  const addToast = (newItem: Omit<TToastItem, "id">) => {
    const newest = { ...newItem, id: crypto.randomUUID() };
    setToastItems([...toastItems, newest]);

    setTimeout(() => {
      deleteToast(newest.id);
    }, 2000);
  };

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
