// the main modal component\
"use client";

import { useModal } from "@/contexts/modalContext";
import React from "react";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const { isModalOpen, closeModal } = useModal();

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  return (
    <div
      className={`fixed text-black top-0 left-0 w-full h-full duration-300 z-30 bg-black bg-opacity-50 flex items-center justify-center ${
        isModalOpen ? "" : "hidden invisible"
      }`}
    >
      {children}
    </div>
  );
};
export default Modal;
