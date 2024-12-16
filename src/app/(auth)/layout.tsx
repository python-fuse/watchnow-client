"use client";

import ToastContainer from "@/components/global/ToastContainer";
import { ToastContextProvider } from "@/contexts/toastContext";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <ToastContextProvider>
      <div className="container py-10  h-[calc(100dvh-56px)] mx-auto px-4 overflow-y-auto">
        <ToastContainer />
        {children}
      </div>
    </ToastContextProvider>
  );
};
export default layout;
