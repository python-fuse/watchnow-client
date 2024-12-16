"use client";

import Header from "@/components/global/Header";
import ToastContainer from "@/components/global/ToastContainer";
import { ModalProvider } from "@/contexts/modalContext";
import { ToastContextProvider } from "@/contexts/toastContext";
import useAuth from "@/hooks/useAuth";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <ModalProvider>
      <ToastContextProvider>
        <main className="flex flex-col max-h-screen overflow-hidden ">
          <ToastContainer />
          <Header />
          <div className="container py-10  h-[calc(100dvh-56px)] mx-auto px-4 overflow-y-auto">
            {children}
          </div>
        </main>
      </ToastContextProvider>
    </ModalProvider>
  );
};
export default layout;
