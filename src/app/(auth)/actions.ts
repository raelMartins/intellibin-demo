import { AxiosError } from "axios";
import { getCookie, setCookie } from "cookies-next";
import { axiosInstance } from "~/lib/axiosInstance";

type RegisterUser = {
  email: string;
  password: string;
  confirm_password: string;
  full_name: string;
  address: string;
  phone_number: string;
};
type loginUser = {
  email: string;
  password: string;
};
export const registerUser = async ({
  email,
  password,
  confirm_password,
  address,
  phone_number,
  full_name,
}: RegisterUser) => {
  if (!email) {
    return { status: "error", message: "Email is missing" };
  }
  if (!address) {
    return { status: "error", message: "Address is missing" };
  }
  if (!full_name) {
    return { status: "error", message: "Full name is missing" };
  }
  if (password !== confirm_password) {
    return {
      status: "error",
      message: "Password does not match confirm password",
    };
  }

  try {
    const res = await axiosInstance.post<{
      success: boolean;
      user: { email: string; phone_number: string };
    }>(
      "/api/register/",
      {
        email,
        password,
        confirm_password: confirm_password,
        phone_number,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    console.log(res.data);
    if (res.data.user) {
      console.log("====>", res.data);
      localStorage.setItem(
        "intellibin_register",
        JSON.stringify({
          email: res.data.user.email,
          phone_number: res.data.user.phone_number,
        }),
      );
      return {
        status: "success",
        message: "sign up successful",
      };
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
export const loginUser = async ({ email, password }: loginUser) => {
  try {
    const res = await axiosInstance.post<{ access: string; refresh: string }>(
      "/api/login/",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    console.log("done login user", res);
    if (res.data.access && res.data.refresh) {
      setCookie("intellibin_token", res.data.access);
      setCookie("intellibin_refresh_token", res.data.refresh);
      return { status: "success", message: "login successful" };
    }
    return { status: "error", message: "Couldn't log user in" };
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

export const confirmOtp = async ({
  email,
  otp,
}: {
  email: string;
  otp: string;
}) => {
  if (!email || !otp) {
    return { status: "error", message: "Missing Email or OTP" };
  }

  try {
    const res = await axiosInstance.post("/api/confirm_otp/", { email, otp });
    if (res.status === 200 || res.status === 201) {
      return { status: "success", message: "Otp confirmed successfully" };
    }
    return {
      message: "could not confirm otp please try again",
      status: "error",
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        message: error.message ?? "could not confirm otp please try again",
        status: "error",
      };
    }
    return {
      message: "could not confirm otp please try again",
      status: "error",
    };
  }
};
export const resendOtp = async (email: string) => {
  if (!email) {
    return { status: "error", message: "Missing Email" };
  }

  try {
    const res = await axiosInstance.post("/api/resend_otp/", { email });
    if (res.status === 200 || res.status === 201) {
      return { status: "success", message: "Otp sent to mail successfully" };
    }
    return {
      message: "could not send otp please try again",
      status: "error",
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        message: error.message ?? "could not send otp please try again",
        status: "error",
      };
    }
    return {
      message: "could not send otp please try again",
      status: "error",
    };
  }
};

export const authRefresh = async () => {
  const refreshToken = getCookie("intellibin_refresh_token");
  setCookie("intellibin_token", "");
  try {
    ("inside authRefresh");
    const response = await axiosInstance.post("api/token/refresh", {
      refreshToken: refreshToken,
    });

    const { access } = response.data;
    setCookie("intellibin_token", access);

    return access;
  } catch (error) {
    console.log(
      "error setting cookie",
      error instanceof Error ? error.message : "something wrong",
    );
  }
};
