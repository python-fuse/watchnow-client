import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";

const page = () => {
  return (
    <div className="max-w-[400px] py-8 mx-auto space-y-4">
      <div className="flex flex-col items-center gap-y-2">
        <Image src={logo} alt="logo" width={200} />
        <h2 className="text-4xl font-bold">Tube Buddy</h2>
        <p className="text-gray-400">
          Already have an account?{" "}
          <Link href={"/login"} className="text-violet-300 underline">
            Log in
          </Link>
        </p>
      </div>

      <div className="">
        <RegisterForm />
      </div>

      <p className="text-center font-medium">&copy;uCode 2024</p>
    </div>
  );
};
export default page;
