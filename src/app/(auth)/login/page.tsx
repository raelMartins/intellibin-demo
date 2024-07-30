import React from "react";
import Form from "./form";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen overflow-hidden">
      <div className="mx-4 w-full md:w-1/2 flex justify-center items-center h-1/2 md:h-full">
        <Form />
      </div>
      <div
        className="w-full md:w-1/2 hidden md:flex justify-center items-center h-full"
        style={{
          backgroundImage: "url('/images/intellibin-onbarding-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Image
          src="/images/Intellibin_Logo Main.png"
          alt="login"
          width={250}
          height={250}
        />
      </div>
    </div>
  );
};

export default Login;
