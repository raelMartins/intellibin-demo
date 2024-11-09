import { BellIcon, Clock4Icon, HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import LayoutLinks from "./layout-links";
import MobileHeader from "./mobile-header";
import { Button } from "~/components/ui/button";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="font-inter">
      <header>
        <div className="flex items-center justify-between px-5 py-5 md:justify-end">
          <MobileHeader />
          <nav className="hidden min-h-screen flex-col bg-intellibin-veryLightGreen px-4 pt-5 text-[#6B7280] md:fixed md:bottom-0 md:left-0 md:top-0 md:flex md:w-[230px] md:px-4">
            <div>
              <Link href="/">
                <Image
                  src="/images/intellibin_logo_header.svg"
                  width={182}
                  height={48}
                  alt="intellibin logo"
                  className="h-12 w-[182px] object-cover"
                />
              </Link>
            </div>
            <LayoutLinks />
            <div className="flex items-center gap-1 border-t border-solid border-t-intellibingrey-500 p-4">
              <div>
                <Image
                  src="/images/intellibin_profile.jpg"
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-full object-cover"
                  alt="profile"
                />
              </div>
              <div>
                <p className="leading-5 text-[#374151]">James Ben</p>
                <Link
                  href="/profile"
                  className="text-sm leading-4 text-intellibin-primary"
                >
                  View Profile
                </Link>
              </div>
            </div>
          </nav>
          <Button variant={"ghost"} className="relative">
            <BellIcon />
          </Button>
        </div>
      </header>
      <main className="md:pl-72">{children}</main>
    </div>
  );
};

export default Layout;
