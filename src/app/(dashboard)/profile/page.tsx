import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-50 p-6">
      <h1 className="mb-6 text-2xl font-semibold md:text-3xl">Profile</h1>

      <div className="flex w-full flex-row items-center gap-16 rounded-lg">
        <div className="relative mb-4 flex h-[196px] w-[240px] items-center justify-center rounded-[24px] bg-gray-200">
          <Image src="/images/user.svg" alt="" width={240} height={240} />
          <div className="absolute bottom-[16px] right-[16px] flex h-6 w-6 items-center justify-center rounded-[24px] bg-green-500">
            <Image src="/images/Edit.svg" alt="" width={240} height={240} />
          </div>
        </div>

        <div className="mr-20 flex flex-col items-start gap-4 text-left">
          <h2 className="text-lg font-bold md:text-xl">James Ben</h2>
          <p className="text-sm text-gray-500 md:text-base">ID A00112233</p>
          <p className="text-sm text-gray-500 md:text-base">
            jbennjoku@gmail.com
          </p>
          <p className="text-sm text-gray-500 md:text-base">
            +234 809 838 5425
          </p>
          <p className="flex items-center justify-center gap-2 text-sm text-gray-500 md:text-base">
            <svg
              className="h-4 w-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7v6a2 2 0 002 2h.002A2 2 0 0120 17v1a2 2 0 01-2 2H6a2 2 0 01-2-2v-1a2 2 0 01.001-2H4a2 2 0 002-2V7h13zM7 10h.01M7 12h.01M7 14h.01M12 10h.01M12 12h.01M12 14h.01M16 10h.01M16 12h.01M16 14h.01M12 18v.01"
              ></path>
            </svg>
            3
          </p>
        </div>
      </div>

      <div className="mt-8 w-full">
        {[
          "Edit Profile",
          "Subscriptions",
          "Help & Support",
          "About Intellibin",
          "Password Reset",
        ].map((item) => (
          <button
            key={item}
            className="color-[#1F2024] mb-2 flex w-full items-center justify-between rounded-md bg-[#ECFDF5] px-4 py-3 text-left text-sm md:text-base"
          >
            {item}
            <svg
              className="h-4 w-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        ))}
      </div>

      <button className="mt-4 text-sm text-red-500 hover:text-red-600 md:text-base">
        Log Out
      </button>
    </div>
  );
};

export default Page;
