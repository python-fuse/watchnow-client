"use client";
import { useState } from "react";
import FormInput from "../global/FormInput";
import Button from "../global/Button";
import { useFormik } from "formik";
import AuthService from "@/lib/AuthService";
import { useRouter } from "next/navigation";
import { useToast } from "@/contexts/toastContext";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { addToast } = useToast();

  const handleSubmit = async (values: {
    name?: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    try {
      setLoading(true);
      const response = await AuthService.register(
        values.email,
        values.password,
        values.name
      );
      console.log(response);
      addToast({
        content: "Account created successfully",
        status: "success",
      });
      router.push("/login");
    } catch (error: any) {
      console.log(error.response.data);
      addToast({
        content: error.response.data.message,
        status: "error",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="gap-y-6 flex flex-col mt-10"
    >
      <FormInput
        id="name"
        label="Username"
        value={formik.values.name}
        type="text"
        placeholder="Enter your name"
        onChange={formik.handleChange("name")}
      />
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

      <FormInput
        id="confirmPassword"
        label="Confirm Password"
        value={formik.values.confirmPassword}
        type="password"
        placeholder="Confirm your password"
        onChange={formik.handleChange("confirmPassword")}
      />

      <Button
        type="submit"
        disabled={
          !formik.values.email ||
          !formik.values.password ||
          !formik.values.confirmPassword
        }
        text="Sign up"
        loading={loading}
      />
    </form>
  );
};
export default RegisterForm;
