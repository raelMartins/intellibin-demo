import React from "react";
import Form from "./form";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center overflow-hidden md:flex-row">
      <div className="mx-4 flex h-1/2 w-full items-center justify-center md:h-full md:w-1/2">
        <Form />
      </div>
      <div
        className="hidden h-full w-full items-center justify-center md:flex md:w-1/2"
        style={{
          backgroundImage: "url('/images/intellibin-onbarding-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Image
          src="/images/Intellibin_logo_Main.png"
          alt="login"
          width={250}
          height={250}
        />
      </div>
    </div>
  );
};

export default Login;
