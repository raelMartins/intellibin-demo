"use client";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "~/lib/utils";

const HeaderMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        className="space-y-1 z-[3] block md:hidden"
        onClick={() => setOpenMenu((openMenu) => !openMenu)}
      >
        <span
          className={cn(
            "bg-black w-6 h-[3px] block rounded-lg duration-300 transition-all ease-linear",
            {
              "-rotate-45 translate-y-[13px]": openMenu,
            }
          )}
        ></span>
        <span
          className={cn(
            "bg-black w-6 h-[3px] block rounded-lg duration-300 transition-all ease-linear",
            {
              "opacity-0": openMenu,
            }
          )}
        ></span>
        <span
          className={cn(
            "bg-black w-6 h-[3px] block rounded-lg duration-300 transition-all ease-linear",
            {
              "rotate-45 ": openMenu,
            }
          )}
        ></span>
      </button>

      <ul
        className={cn(
          "absolute inset-0 h-[100dvh] flex flex-col px-5 py-28 items-center gap-3 bg-[#f4fffa] text-white z-[2] duration-500 transition-transform ease-out",
          {
            "-translate-y-[400%]": !openMenu,
            "translate-y-0": openMenu,
          }
        )}
      >
        <div className="w-full flex flex-col  items-center gap-2">
          <Link
            href="/register"
            className="w-full h-[2.375rem] text-xs font-medium bg-intellibin-primary text-white rounded-md flex justify-center items-center  hover:bg-intellibin-primary/90 duration-200"
          >
            Sign Up
          </Link>
          <Link
            href="wwww.lawma.gov.ng"
            className="w-full h-[2.375rem] text-xs font-medium bg-white rounded-md text-intellibin-primary border border-solid border-intellibin-primary flex justify-center items-center hover:bg-white/50 duration-200"
          >
            Login
          </Link>
          <div className="mt-20 flex flex-col items-center gap-1">
            <p className="text-[#4b5563] text-center">
              Let’s work together to make the planet greener
            </p>
            <Link
              href="https://lawma.gov.ng/"
              className="hover:text-white/85 duration-200 flex gap-2 items-center text-intellibin-primary"
            >
              <span> Download App</span>
              <span>
                <ArrowRightIcon />
              </span>
            </Link>
          </div>
        </div>
      </ul>
    </>
  );
};

export default HeaderMobile;
