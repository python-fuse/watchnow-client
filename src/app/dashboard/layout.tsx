import Header from "@/components/global/Header";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};
export default layout;
