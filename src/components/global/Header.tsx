"use client";

import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";
import { FaSignOutAlt } from "react-icons/fa";
import AuthService from "@/lib/AuthService";
import { useRouter } from "next/navigation";
import { useToast } from "@/contexts/toastContext";

const Header = () => {
  const router = useRouter();
  const { addToast } = useToast();
  const handleLogout = async () => {
    try {
      await AuthService.logout();
      router.push("/login");
      addToast({
        content: "Logged out!",
        status: "info",
      });
    } catch (error) {
      console.error(error);
      addToast({
        content: "An error occured!",
        status: "error",
      });
    }
  };
  return (
    <nav className="flex justify-between items-center h-14 border-b-2 bg-violet-500 p-4 py-4">
      <Link href="/">
        <Image
          src={logo}
          alt="WatchNow"
          width={80}
          className="w-[40px] md:w-[80px"
        />
      </Link>

      <h2 className="title text-2xl font-bold ">Tube Buddy</h2>

      <button
        className="flex  items-center gap-2 text-sm md:text-lg"
        onClick={handleLogout}
      >
        Log out
        <FaSignOutAlt size={22} />
      </button>
    </nav>
  );
};
export default Header;
