"use client";
import { useFormik } from "formik";
import Link from "next/link";
import eyeicon from "../../../../public/images/intellibin_eye_icon.png";
import { useState } from "react";
import Image from "next/image";
import { loginUser } from "../actions";
import { useToast } from "~/components/ui/use-toast";
import { useRouter } from "next/navigation";

interface FormValues {
  emailOrPhone: string;
  password: string;
  // rememberMe: boolean;
}

const validate = (values: FormValues) => {
  const errors: Partial<FormValues> = {};

  if (!values.emailOrPhone) {
    errors.emailOrPhone = "Required";
  }

  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};

const Loginform = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginStatus, setLoginStatus] = useState<"idle" | "logging" | "error">(
    "idle",
  );
  const router = useRouter();
  const { toast } = useToast();
  const formik = useFormik({
    initialValues: {
      emailOrPhone: "",
      password: "",
      // rememberMe: false,
    },
    validate,

    onSubmit: async (values: FormValues) => {
      console.log("login");
      if (loginStatus === "logging") {
        return;
      }
      console.log(values);
      if (!values.emailOrPhone || !values.password) {
        return;
      }

      try {
        setLoginStatus("logging");

        const { status, message } = await loginUser({
          email: values.emailOrPhone,
          password: values.password,
        });
        if (status === "error") {
          setLoginStatus("idle");
          toast({
            description: message ?? "Something went wrong",
            variant: "destructive",
          });
          return;
        }
        setLoginStatus("idle");
        toast({
          description: message ?? "Something went wrong",
        });
        router.push("/profile");
      } catch (error) {
        setLoginStatus("idle");
        toast({
          description: "Something went wrong",
          variant: "destructive",
        });
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="mx-auto w-[538px] max-w-lg pb-[40px] pl-[24px] pr-[24px] pt-[40px]"
    >
      <h1 className="mb-4 flex text-4xl font-bold leading-10 text-intellibin-primary">
        Welcome, Ben!
      </h1>
      <div className="mb-4">
        <label
          htmlFor="emailOrPhone"
          className="block text-base font-normal leading-6 text-intellibingrey-400"
        >
          Email or Phone
        </label>
        <input
          id="emailOrPhone"
          name="emailOrPhone"
          type="text"
          placeholder="Text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.emailOrPhone}
          className="w-full rounded-md px-3 py-2 ring-1 ring-inset ring-intellibingrey-500 placeholder:text-gray-400 focus:ring-intellibin-primary"
        />
        {formik.touched.emailOrPhone && formik.errors.emailOrPhone ? (
          <div className="text-sm text-red-500">
            {formik.errors.emailOrPhone}
          </div>
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

      {/* <div className="items-left mb-4 flex flex-col-reverse justify-between">
        <div>
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            className="rounded text-blue-500 focus:ring-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.rememberMe}
          />
          <label
            htmlFor="rememberMe"
            className="ml-2 text-base font-normal leading-6 text-intellibingrey-400"
          >
            Remember login details on next login
          </label>
        </div>
        <div>
          <Link href="/forgot-password">
            <div className="mb-4 text-base font-bold text-intellibin-primary">
              Forgot Password ?
            </div>
          </Link>
        </div>
      </div> */}

      <button
        type="submit"
        className="w-full rounded-md bg-intellibin-primary px-4 py-2 text-white focus:outline focus:ring"
      >
        {loginStatus === "logging" ? "Loggin in..." : "Login"}
      </button>
      <small className="mt-4 text-base font-normal leading-6 text-intellibingrey-400">
        Not a member?{" "}
        <Link href="/register" className="text-intellibin-primary">
          Register
        </Link>
      </small>
    </form>
  );
};

export default Loginform;
