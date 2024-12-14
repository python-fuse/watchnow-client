"use client";
import { useState } from "react";
import FormInput from "../global/FormInput";
import Button from "../global/Button";
import { useFormik } from "formik";
import AuthService from "@/lib/AuthService";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

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
      router.push("/login");
    } catch (error: any) {
      console.log(error.response.data);
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

      <Button type="submit" text="Sign up" loading={loading} />
    </form>
  );
};
export default RegisterForm;
