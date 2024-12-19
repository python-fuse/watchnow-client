// the main modal component\
"use client";

import { useModal } from "@/contexts/modalContext";
import React, { useEffect } from "react";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const { isModalOpen, closeModal } = useModal();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [closeModal]);

  return (
    <div
      className={`fixed text-black top-0 left-0 w-full h-full duration-300 z-30 bg-black bg-opacity-50 ${
        isModalOpen ? "" : "hidden invisible"
      }`}
    >
      <div className="scale-0 transform transition-transform duration-300 animate-grow flex overflow-hidden p-4 rounded-lg  h-screen items-center justify-center">
        {children}
      </div>
    </div>
  );
};
export default Modal;
