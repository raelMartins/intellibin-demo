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
}
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
    const res = await axiosInstance.post<{ email: string }>(
      "/api/register/",
      {
        email,
        password,
        confirm_password: confirm_password,
        phone_number
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    if (res.data.user.email) {
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
export const loginUser = async ({email,password}:loginUser) => {
  try {
    const res = await axiosInstance.post<{ email: string,password:any }>(
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
    console.log('done login user',res)
    // if (res.data.user.email) {
    //   return { status: "success", message: "sign up successful" };
    // }
    // return { status: "error", message: "Couldn't register user" };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        status: "error",
        message: error.message ?? "Something went wrong",
      };
    }
    return { status: "error", message: "Internal Server Error" };
  }
}

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
