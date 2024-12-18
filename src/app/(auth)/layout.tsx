"use client";

import ToastContainer from "@/components/global/ToastContainer";
import { ToastContextProvider } from "@/contexts/toastContext";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <ToastContextProvider>
      <ToastContainer />
      {children}
    </ToastContextProvider>
  );
};
export default layout;
