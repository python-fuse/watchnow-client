"use client";

import Header from "@/components/global/Header";
import { ModalProvider } from "@/contexts/modalContext";
import useAuth from "@/hooks/useAuth";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <ModalProvider>
      <main className="flex flex-col max-h-screen overflow-hidden ">
        <Header />
        <div className="container py-10  h-[calc(100dvh-56px)] mx-auto px-4 overflow-y-auto">
          {children}
        </div>
      </main>
    </ModalProvider>
  );
};
export default layout;
