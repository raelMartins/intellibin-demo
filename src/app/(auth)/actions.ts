"use server";

import { AxiosError } from "axios";
import { axiosInstance } from "~/lib/axiosInstance";

type RegisterUser = {
  email: string;
  password: string;
  confirm_password: string;
};
export const registerUser = async ({
  email,
  password,
  confirm_password,
}: RegisterUser) => {
  if (!email) {
    return { status: "error", message: "Email is missing" };
  }
  if (password !== confirm_password) {
    return {
      status: "error",
      message: "Password does not match confirm password",
    };
  }

  try {
    const res = await axiosInstance.post<{ email: string }>(
      "/api/register",
      {
        email,
        password,
        confirm_password: confirm_password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    if (res.data.email) {
      return { status: "success", message: "sign up successful" };
    }
    return { status: "error", message: "Couldn't register user" };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        status: "error",
        message: error.message ?? "Something went wrong",
      };
    }
    return { status: "error", message: "Internal Server Error" };
  }
};
