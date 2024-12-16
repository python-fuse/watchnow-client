"use client";
import { useState } from "react";
import FormInput from "../global/FormInput";
import Button from "../global/Button";
import { useFormik } from "formik";
import AuthService from "@/lib/AuthService";
import { useRouter } from "next/navigation";
import { useToast } from "@/contexts/toastContext";

const LoginForm = () => {
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      setLoading(true);
      const response = await AuthService.login(values.email, values.password);
      console.log(response);
      router.push("/dashboard");
      addToast({
        content: "Logged in successfully!",
        status: "success",
      });
    } catch (e: any) {
      console.log(e.response.data.message);
      addToast({
        content: "An error occured!",
        status: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="gap-y-8 flex flex-col mt-10"
    >
      <FormInput
        id="email"
        label="Email"
        value={formik.values.email}
        type="email"
        placeholder="Enter your email"
        onChange={formik.handleChange("email")}
      />

      <FormInput
        id="password"
        label="Password"
        value={formik.values.password}
        type="password"
        placeholder="Enter your password"
        onChange={formik.handleChange("password")}
      />

      <Button type="submit" text="Log in" loading={loading} />
    </form>
  );
};
export default LoginForm;
