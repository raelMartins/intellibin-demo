import React from "react";
import Image from "next/image";
import Form from "./form";

const Register = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center md:flex-row md:items-start">
      <div className="mx-4 flex h-auto w-full items-center justify-center md:w-1/2">
        <Form />
      </div>
      <div
        className="relative hidden h-full min-h-[776px] w-full items-center justify-center md:flex md:w-1/2"
        // style={{
        //   backgroundImage: "url('/images/intellibin-onbarding-background.png')",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <Image
          src="/images/intellibin-onbarding-background.png"
          alt=""
          width={250}
          height={250}
          className="h-full w-full"
        />
        <div className="absolute">
          <Image
            src="/images/Intellibin_Logo Main.png"
            alt="login"
            width={250}
            height={250}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
