'use client'
import React from "react";
import Image from "next/image";
import Form from "./form";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Register = () => {
  const queryClient = new QueryClient();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center md:flex-row md:items-start">
      <div className="mx-4 flex h-auto w-full items-center justify-center md:w-1/2">
      <QueryClientProvider client={queryClient}>
         <Form />
      </QueryClientProvider>
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
            src="/images/Intellibin_logo_main.png"
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
