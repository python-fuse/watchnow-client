"use client";

import ToastContainer from "@/components/global/ToastContainer";
import { ToastContextProvider } from "@/contexts/toastContext";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <ToastContextProvider>
      <ToastContainer />
      <div className="flex h-screen  justify-center place-items-center w-full">
        {children}
      </div>
    </ToastContextProvider>
  );
};
export default layout;
