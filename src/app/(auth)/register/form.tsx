"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
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
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-lg mx-auto w-[538px] pt-[40px] pr-[24px] pb-[40px] pl-[24px] "
    >
      <h1 className="flex text-intellibin-primary font-bold text-4xl leading-10 ">
        Sign Up
      </h1>
      <p className="font-normal leading-6 text-base text-intellibingrey-400 mb-4 ">
        Create an account to get started
      </p>
      <div className="mb-4">
        <label
          htmlFor="fullName"
          className="block font-normal leading-6 text-base text-intellibingrey-400"
        >
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.fullName}
          className=" rounded-md w-full py-2 px-3 ring-1 ring-inset ring-intellibingrey-500 placeholder:text-gray-400 focus:ring-intellibin-primary "
        />
        {formik.errors.fullName ? <div>{formik.errors.fullName}</div> : null}
      </div>

      <div className="mb-4 ">
        <label
          htmlFor="email"
          className="block font-normal leading-6 text-base text-intellibingrey-400"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className=" rounded-md w-full py-2 px-3 ring-1 ring-inset ring-intellibingrey-500 placeholder:text-gray-400 focus:ring-intellibin-primary "
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>

      <div className="mb-4">
        <label
          htmlFor="location"
          className="block font-normal leading-6 text-base text-intellibingrey-400"
        >
          Location
        </label>
        <input
          id="location"
          name="location"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.location}
          className=" rounded-md w-full py-2 px-3 ring-1 ring-inset ring-intellibingrey-500 placeholder:text-gray-400 focus:ring-intellibin-primary "
        />
        {formik.errors.location ? <div>{formik.errors.location}</div> : null}
      </div>

      <div className="mb-4">
        <label
          htmlFor="phoneNumber"
          className="block font-normal leading-6 text-base text-intellibingrey-400"
        >
          Phone Number
        </label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
          className=" rounded-md w-full py-2 px-3 ring-1 ring-inset ring-intellibingrey-500 placeholder:text-gray-400 focus:ring-intellibin-primary "
        />
        {formik.errors.phoneNumber ? (
          <div>{formik.errors.phoneNumber}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="block font-normal leading-6 text-base text-intellibingrey-400"
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
            className="rounded-md w-full py-2 px-3 ring-1 ring-inset ring-intellibingrey-500 placeholder:text-gray-400 focus:ring-intellibin-primary "
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
          <div className="text-red-500 text-sm">{formik.errors.password}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label
          htmlFor="confirmpassword"
          className="block font-normal leading-6 text-base text-intellibingrey-400"
        >
          Confirm Password
        </label>
        <div className="relative flex items-center">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="rounded-md w-full py-2 px-3 ring-1 ring-inset ring-intellibingrey-500 placeholder:text-gray-400 focus:ring-intellibin-primary "
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
          <div className="text-red-500 text-sm">{formik.errors.password}</div>
        ) : null}
      </div>

      <div className="flex gap-2 align-middle items-center">
        <input
          type="checkbox"
          id="confirmPrivacy"
          name="confirmPrivacy"
          onChange={formik.handleChange}
          checked={formik.values.confirmPrivacy}
        />
        <label htmlFor="confirmPrivacy">
          {" "}
          I've read and agreed with the{" "}
          <span className="text-intellibin-primary font-bold">
            Terms and Conditions
          </span>{" "}
          and the{" "}
          <span className="text-intellibin-primary font-bold">
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
        className="w-full bg-intellibin-primary text-white py-2 px-4 rounded-md  focus:outline focus:ring mt-2"
      >
        Create Account
      </button>

      <small className="font-normal leading-6 text-base text-intellibingrey-400 mt-4 flex items-center justify-center text-center">
        Already have an account?{" "}
        <Link href="/login" className="text-intellibin-primary ml-1">
          Login
        </Link>
      </small>
    </form>
  );
};

export default SignupForm;
