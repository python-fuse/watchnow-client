"use client";

import Header from "@/components/global/Header";
import useAuth from "@/components/hooks/useAuth";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  return (
    <main>
      <Header />
      <div className="container mt-10 mx-auto px-4">{children}</div>
    </main>
  );
};
export default layout;
