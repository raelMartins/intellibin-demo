"use client";

import { Clock4Icon, HomeIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "~/lib/utils";

const LayoutLinks = () => {
  const pathname = usePathname();
  return (
    <>
      <ul className="pt-[4.5rem] grow flex flex-col gap-4">
        <li>
          <Link
            href="/home"
            className={cn(
              "flex gap-3 items-center py-2 pr-3 pl-2 text-sm leading-[21px] font-semibold",
              {
                "bg-intellibin-primary text-white": pathname === "/home",
              }
            )}
          >
            <span>
              <HomeIcon />
            </span>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            href="/status"
            className={cn(
              "flex gap-3 items-center py-2 pr-3 pl-2 text-sm leading-[21px] font-semibold",
              {
                "bg-intellibin-primary text-white": pathname === "/status",
              }
            )}
          >
            <span>
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.45 14.97c1.07 3.44 3.95 6.09 7.53 6.82M2.05 10.98A9.996 9.996 0 0 1 12 2c5.18 0 9.44 3.94 9.95 8.98M14.01 21.8c3.57-.73 6.44-3.35 7.53-6.78"
                  stroke="#374151"
                  strokeWidth="1.76"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>Status</span>
          </Link>
        </li>
        <li>
          <Link
            href="/history"
            className={cn(
              "flex gap-3 items-center py-2 pr-3 pl-2 text-sm leading-[21px] font-semibold",
              {
                "bg-intellibin-primary text-white rounded-lg":
                  pathname === "/history",
              }
            )}
          >
            <span>
              <Clock4Icon />
            </span>
            <span>History</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default LayoutLinks;
