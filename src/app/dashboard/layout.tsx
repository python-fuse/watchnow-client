"use client";

import Header from "@/components/global/Header";
import { ModalProvider } from "@/contexts/modalContext";
import useAuth from "@/hooks/useAuth";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <ModalProvider>
      <main>
        <Header />
        <div className="container mt-10 mx-auto px-4">{children}</div>
      </main>
    </ModalProvider>
  );
};
export default layout;
