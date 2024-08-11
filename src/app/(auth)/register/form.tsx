"use client";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { registerUser } from "../actions";
import { useToast } from "~/components/ui/use-toast";
import { useRouter } from "next/navigation";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import axios from "axios";
import { API_CONFIG } from "~/app/constants/api-config";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [registerState, setRegisterState] = useState<
    "idle" | "error" | "submitting"
  >("idle");
  const { toast } = useToast();
  
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      location: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      confirmPrivacy: false,
    },
    onSubmit: async (values) => {
      if (registerState === "submitting") {
        return;
      }

      try {
        setRegisterState("submitting");
        const { status, message } = await registerUser({
          email: values.email,
          password: values.password,
          confirm_password: values.confirmPassword,
          full_name: values.fullName,
          address: values.location,
          phone_number: values.phoneNumber,
        });
        if (status === "error") {
          toast({
            description: message ?? "Something went wrong",
            variant: "destructive",
          });
          setRegisterState("error");
          return;
        }

        toast({
          description: message ?? "User registered successfully",
          variant: "success",
        });
        setRegisterState("idle");
      } catch (error) {
        setRegisterState("error");
        toast({ description: "Something went wrong", variant: "destructive" });
      }
    },
    validate: (values) => {
      const errors: {
        fullName?: string;
        email?: string;
        location?: string;
        phoneNumber?: string;
        password?: string;
        confirmPassword?: string;
        confirmPrivacy?: string;
      } = {};

      if (!values.fullName) {
        errors.fullName = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.location) {
        errors.location = "Required";
      }
      if (!values.phoneNumber) {
        errors.phoneNumber = "Required";
      }
      if (!values.password) {
        errors.password = "Required";
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = "Required";
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Passwords do not match";
      }
      if (!values.confirmPrivacy) {
        errors.confirmPrivacy = "You must agree to the privacy policy";
      }
      return errors;
    },
  });

  const router = useRouter();

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="mx-auto w-[538px] max-w-lg pb-[40px] pl-[24px] pr-[24px] pt-[40px]"
    >
      <h1 className="flex text-4xl font-bold leading-10 text-intellibin-primary">
        Sign Up
      </h1>
      <p className="mb-4 text-base font-normal leading-6 text-intellibingrey-400">
        Create an account to get started
      </p>
      <div className="mb-4">
        <label
          htmlFor="fullName"
          className="block text-base font-normal leading-6 text-intellibingrey-400"
        >
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.fullName}
          className="w-full rounded-md px-3 py-2 ring-1 ring-inset ring-intellibingrey-500 placeholder:text-gray-400 focus:ring-intellibin-primary"
        />
        {formik.errors.fullName ? <div>{formik.errors.fullName}</div> : null}
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-base font-normal leading-6 text-intellibingrey-400"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="w-full rounded-md px-3 py-2 ring-1 ring-inset ring-intellibingrey-500 placeholder:text-gray-400 focus:ring-intellibin-primary"
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>

      <div className="mb-4">
        <label
          htmlFor="location"
          className="block text-base font-normal leading-6 text-intellibingrey-400"
        >
          Location
        </label>
        <input
          id="location"
          name="location"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.location}
          className="w-full rounded-md px-3 py-2 ring-1 ring-inset ring-intellibingrey-500 placeholder:text-gray-400 focus:ring-intellibin-primary"
        />
        {formik.errors.location ? <div>{formik.errors.location}</div> : null}
      </div>

      <div className="mb-4">
        <label
          htmlFor="phoneNumber"
          className="block text-base font-normal leading-6 text-intellibingrey-400"
        >
          Phone Number
        </label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
          className="w-full rounded-md px-3 py-2 ring-1 ring-inset ring-intellibingrey-500 placeholder:text-gray-400 focus:ring-intellibin-primary"
        />
        {formik.errors.phoneNumber ? (
          <div>{formik.errors.phoneNumber}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-base font-normal leading-6 text-intellibingrey-400"
        >
          Password
        </label>
        <div className="relative flex items-center">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="w-full rounded-md px-3 py-2 ring-1 ring-inset ring-intellibingrey-500 placeholder:text-gray-400 focus:ring-intellibin-primary"
          />
          <Image
            src="/images/intellibin_eye_icon.png"
            alt=""
            sizes=""
            className="absolute right-3 cursor-pointer"
            width={20}
            height={20}
            onClick={() => setShowPassword((prevState) => !prevState)}
          />
        </div>

        {formik.touched.password && formik.errors.password ? (
          <div className="text-sm text-red-500">{formik.errors.password}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label
          htmlFor="confirmpassword"
          className="block text-base font-normal leading-6 text-intellibingrey-400"
        >
          Confirm Password
        </label>
        <div className="relative flex items-center">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showPassword ? "text" : "password"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            className="w-full rounded-md px-3 py-2 ring-1 ring-inset ring-intellibingrey-500 placeholder:text-gray-400 focus:ring-intellibin-primary"
          />
          <Image
            src="/images/intellibin_eye_icon.png"
            alt=""
            sizes=""
            className="absolute right-3 cursor-pointer"
            width={20}
            height={20}
            onClick={() => setShowPassword((prevState) => !prevState)}
          />
        </div>

        {formik.touched.password && formik.errors.password ? (
          <div className="text-sm text-red-500">{formik.errors.password}</div>
        ) : null}
      </div>

      <div className="flex items-center gap-2 align-middle">
        <input
          type="checkbox"
          id="confirmPrivacy"
          name="confirmPrivacy"
          onChange={formik.handleChange}
          checked={formik.values.confirmPrivacy}
        />
        <label htmlFor="confirmPrivacy">
          {" "}
          I&apos;ve read and agreed with the{" "}
          <span className="font-bold text-intellibin-primary">
            Terms and Conditions
          </span>{" "}
          and the{" "}
          <span className="font-bold text-intellibin-primary">
            {" "}
            Privacy Policy.
          </span>{" "}
        </label>
        {formik.errors.confirmPrivacy ? (
          <div>{formik.errors.confirmPrivacy}</div>
        ) : null}
      </div>

      <button
        type="submit"
        className="mt-2 w-full rounded-md bg-intellibin-primary px-4 py-2 text-white focus:outline focus:ring"
      >
        {registerState === "submitting" ? "Registering..." : " Create Account"}
      </button>

      <small className="mt-4 flex items-center justify-center text-center text-base font-normal leading-6 text-intellibingrey-400">
        Already have an account?{" "}
        <Link href="/login" className="ml-1 text-intellibin-primary">
          Login
        </Link>
      </small>
    </form>
  );
};

export default SignupForm;
