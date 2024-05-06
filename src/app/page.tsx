import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function Home() {
  return (
    <>
      <header>
        <nav className="px-5 max-w-[60.125rem] mx-auto py-3 flex items-center justify-between">
          <div>
            <Link href="/">
              <Image
                src="/images/intellibin_logo_header.svg"
                width={200}
                height={200}
                alt="intellibin logo"
                className="h-12 object-cover"
              />
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-2">
            <Link
              href="/register"
              className="w-[6.4375rem] h-[2.375rem] text-xs font-medium bg-intellibin-primary text-white rounded-md flex justify-center items-center  hover:bg-intellibin-primary/90 duration-200"
            >
              Sign Up
            </Link>
            <Link
              href="wwww.lawma.gov.ng"
              className="w-[6.4375rem] h-[2.375rem] text-xs font-medium bg-white rounded-md text-intellibin-primary border border-solid border-intellibin-primary flex justify-center items-center hover:bg-white/50 duration-200"
            >
              Login
            </Link>
          </div>
        </nav>
      </header>
      <main className="bg-[#f2f2f2] font-inter">
        <div className="bg-intellibin-primary flex justify-center items-center gap-3 py-3 text-white text-sm lg:text-base px-5">
          <p>Let’s work together to make the planet greener</p>
          <Link
            href="https://lawma.gov.ng/"
            className="hover:text-white/85 duration-200"
          >
            Download App
          </Link>
        </div>
        <section className="relative min-h-[448px] lg:min-h-[748px] ">
          <Image
            src="/images/intellibin_hero_bg.jpg"
            fill
            sizes="100vw"
            alt=""
            className="object-cover"
          />
          <div className="text-white bg-intellibinblack-100/90 relative w-full h-full flex flex-col justify-center items-center text-center min-h-[448px] lg:min-h-[748px] py-14">
            <h2 className="text-5xl lg:text-9xl font-bold">Intellibin</h2>
            <p className="max-w-prose mt-4 mb-12">
              Nec massa viverra eget feugiat pellentesque. Feugiat adipiscing
              massa vitae auctor mi massa. Sodales libero viverr fsfeifjshifkfs
              N am flkmplkcmlcnicnkqwnc
            </p>
            <div className="flex flex-col lg:flex-row gap-3 items-center">
              <Link
                href="register"
                className="rounded-lg py-2 px-6 font-medium bg-white  text-intellibingrey-700 hover:bg-white/95"
              >
                Create Account
              </Link>
              <Link
                href="register"
                className="rounded-lg py-2 px-6 font-medium text-white bg-intellibin-primary hover:bg-intellibin-primary/90"
              >
                Download App
              </Link>
            </div>
            <div className="mt-24">
              <a className="flex gap-1 items-center text-xs font-inter">
                Swipe Up <ChevronDownIcon className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className=" max-w-[60.125rem] mx-auto px-5 py-5 lg:pb-10 lg:pt-32 text-center font-inter">
            <h2 className="text-[#111111] text-xl font-bold text-center">
              Discover
            </h2>
            <h3 className="text-xl lg:text-[4rem] lg:leading-[4.85rem] font-bold text-intellibingrey-700 ">
              Elevate your eco-game and make a positive impact with Intellibin
            </h3>
            <p className="text-sm lg:text-xl text-intellibingrey-700 mt-7 max-w-prose mx-auto">
              Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum
              sit nunc in eros scelerisque sed. Commodo in viverra nunc,
              ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis,
              pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo
              eleifend ultricies purus iaculis.
            </p>
            <div className="relative h-[314px] mt-5 lg:mt-10">
              <Image
                src="/images/intellibin_dark_example.png"
                fill
                alt=""
                sizes="90vw"
                className="object-contain"
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center ">
          <div className="py-5 lg:py-10 max-w-[60.125rem]  px-5 text-left">
            <h2 className="text-[#1d1d1f] font-bold text-balance text-xl lg:text-[4rem] lg:leading-[4.375rem]">
              Explore our range of <br />
              services
            </h2>
            <p className="mt-5 text-sm lg:text-lg max-w-prose text-[#6B7280]">
              Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum
              sit nunc in eros scelerisque sed. Commodo in viverra nunc,
              ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis,
              pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo
              eleifend ultricies purus iaculis.
            </p>
            <div className="pt-8 ">
              <div className="flex gap-4 overflow-x-auto">
                {[
                  {
                    title: "Waste PickUp",
                    src: "/images/intellibin_waste_pickup.png",
                  },
                  {
                    title: "Automated Waste Handling",
                    src: "/images/intellibin_waste_automation.png",
                  },
                  {
                    title: "Waste History Updates",
                    src: "/images/intellibin_waste_history.png",
                  },
                ].map((w, index) => {
                  return (
                    <div
                      key={w.src}
                      className={cn(
                        "flex gap-3 flex-shrink-0 overflow-hidden rounded-lg relative w-[460px] h-[240px]",
                        {
                          "bg-[#3a3eb3]": index === 1,
                        }
                      )}
                    >
                      <Image
                        src={w.src}
                        alt=""
                        fill
                        className="object-cover  rounded-lg"
                      />
                      <div className="relative p-5">
                        <p className="font-semibold text-xl lg:text-3xl text-white  text-pretty max-w-[120px]">
                          {w.title}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
