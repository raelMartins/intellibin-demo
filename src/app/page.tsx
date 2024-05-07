import {
  ChevronDownIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeaderMobile from "~/components/header-mobile-home";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { cn } from "~/lib/utils";

export default function Home() {
  return (
    <>
      <header>
        <nav className="px-4 max-w-[60.125rem] mx-auto py-3 flex items-center justify-between">
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
          <div className="hidden md:flex items-center gap-2">
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
          <HeaderMobile />
        </nav>
      </header>
      <main className="bg-[#f2f2f2] font-inter">
        <div className="bg-intellibin-primary flex justify-center items-center gap-3 py-3 text-white text-sm lg:text-base px-4">
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
          <div className="text-white bg-intellibinblack-100/85 relative w-full h-full flex flex-col justify-center items-center text-center min-h-[448px] lg:min-h-[748px] py-14">
            <h2 className="text-5xl lg:text-9xl font-bold">Intellibin</h2>
            <p className="max-w-[31ch] md:max-w-prose mt-4 mb-12">
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
            <div className="hidden md:block mt-24">
              <a className="flex gap-1 items-center text-xs font-inter">
                Swipe Up <ChevronDownIcon className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className=" max-w-[60.125rem] mx-auto px-4 py-5 lg:pb-10 lg:pt-32 text-center font-inter">
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
                className="object-cover rounded-3xl md:object-contain"
              />
            </div>
          </div>
        </section>
        <section className=" flex flex-col items-center overflow-hidden">
          <div className="pt-5 lg:pt-10 pb-16 max-w-[60.125rem] mx-auto px-4 w-full text-left">
            <div className="">
              <h2 className="text-[#1d1d1f] font-bold text-balance text-xl lg:text-[4rem] lg:leading-[4.375rem] ">
                Explore our range of <br />
                services
              </h2>
              <p className="mt-5 text-sm lg:text-lg max-w-prose text-[#6B7280]">
                Rhoncus morbi et augue nec, in id ullamcorper at sit.
                Condimentum sit nunc in eros scelerisque sed. Commodo in viverra
                nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam
                sagittis, pulvinar. Fermentum scelerisque sit consectetur hac
                mi. Mollis leo eleifend ultricies purus iaculis.
              </p>
            </div>
            <Carousel
              opts={{
                align: "start",
              }}
              className="pt-8 lg:min-w-[1200px]"
            >
              <CarouselContent className="pl-4 -ml-4 ">
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
                    <CarouselItem
                      key={w.src}
                      className={cn(
                        "md:basis-1/2 lg:basis-[480px] relative h-[240px] rounded-xl mr-3",
                        {
                          "bg-[#3a3eb3]": index === 1,
                        }
                      )}
                    >
                      <Image
                        src={w.src}
                        alt=""
                        fill
                        className="object-cover  rounded-xl w-full"
                      />
                      <div className="relative p-5">
                        <p className="font-semibold text-xl lg:text-3xl text-white  max-w-[16ch]">
                          {w.title}
                        </p>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <div className="flex justify-between relative">
                <CarouselPrevious className="left-2 md:left-[45%] top-[30px]" />
                <CarouselNext className="right-32 md:right-[45%] top-[30px]" />
              </div>
            </Carousel>
          </div>
        </section>
        <section>
          <div className="max-w-[60.125rem] mx-auto  px-4 py-8 sm:pb-40 md:pt-15 md:pb-52  lg:pt-20 lg:pb-80 flex flex-col items-center relative">
            <h2 className="text-[2.5rem]  md:text-5xl lg:text-[4rem] text-intellibingrey-700 font-bold leading-[2.5rem] lg:leading-[70.4px] text-center">
              We are passionate about circular economy.
            </h2>
            <div className="text-center text-[#1d1d1f] mt-8 flex flex-col gap-4 items-center md:max-w-80 md:mt-80">
              <div>
                <h3 className="text-xs font-bold">Our Feedback</h3>
                <h4 className="text-2xl font-semibold">Intelllibin</h4>
              </div>
              <p className="text-[#6b7280]">
                Nec massa viverra eget feugiat pellentesque. Feugiat adipiscing
                massa vitae auctor mr
              </p>
              <Link
                href="/register"
                className="bg-intellibin-primary hover:bg-intellibin-primary/75 rounded-[19px] flex justify-center items-center py-2 px-4 text-white w-36"
              >
                Join Us
              </Link>
            </div>
            <div className="pt-5">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="pt-8 md:hidden"
              >
                <CarouselContent className="pl-4 -ml-4 ">
                  {[
                    {
                      id: "ssjjdjcnjncjn",
                      src: "https://www.youtube.com/embed/8krzjlHaGes?si=oAsOyM_NhKZd9zH4",
                    },
                    {
                      id: "hshjsjshjjsjsjs",
                      src: "https://www.youtube.com/embed/K6ppCC3lboU?si=R4yJGvuA0DIYDFjc",
                    },
                    {
                      id: "nbcbbxbsggsgsgg",
                      src: "https://www.youtube.com/embed/K6ppCC3lboU?si=R4yJGvuA0DIYDFjc",
                    },
                    {
                      id: "qmqmqmqmmxvas",
                      src: "https://www.youtube.com/embed/K6ppCC3lboU?si=R4yJGvuA0DIYDFjc",
                    },
                  ].map((w, index) => {
                    return (
                      <CarouselItem
                        key={w.id}
                        className="md:basis-1/2 lg:basis-[480px] relative h-40 rounded-xl mr-3"
                      >
                        <iframe
                          width="560"
                          height="315"
                          src={w.src}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          className="w-full h-40"
                        ></iframe>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <div className="flex justify-between relative">
                  <CarouselPrevious className="left-0 top-[30px]" />
                  <CarouselNext className="bottom-0 right-0 top-[30px]" />
                </div>
              </Carousel>
              <div className="hidden md:block ">
                <div className="w-60 h-40 lg:w-[375px] lg:h-60 absolute top-1/3 left-5 -rotate-[18.69deg]">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/8krzjlHaGes?si=oAsOyM_NhKZd9zH4"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="w-60 h-40 lg:w-[375px] lg:h-60 absolute top-1/3 right-5 rotate-[11deg]">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/8krzjlHaGes?si=oAsOyM_NhKZd9zH4"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="w-60 h-40 lg:w-[375px] lg:h-60 absolute left-5 rotate-[19deg]">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/8krzjlHaGes?si=oAsOyM_NhKZd9zH4"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="w-60 h-40 lg:w-[375px] lg:h-60 absolute right-5 rotate-[-19deg]">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/8krzjlHaGes?si=oAsOyM_NhKZd9zH4"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center">
          <div className="max-w-[60.125rem] px-4 w-full py-20 md:py-32 lg:py-40">
            <div className="relative w-full h-[314px] md:h-[516px] rounded-[1.125rem] overflow-hidden flex flex-col justify-center  ">
              <Image
                fill
                src="/images/intellibin_green_grass.png"
                alt="green grass"
                className="object-cover"
              />
              <div className="relative px-4 py-8 md:px-12 md:py-14 flex flex-col items-center md:items-start gap-10 md:gap-20 text-center md:text-left text-white">
                <div>
                  <h2 className="font-bold text-xl">Our Mission</h2>
                  <p className="max-w-[33ch] text-sm md:text-base">
                    Nec massa viverra eget feugiat pellentesque. Feugiat
                    adipiscing massa vitae auctor mr
                  </p>
                </div>
                <div>
                  <h2 className="font-bold text-xl">Our Vision</h2>
                  <p className="max-w-[33ch] text-sm md:text-base">
                    Nec massa viverra eget feugiat pellentesque. Feugiat
                    adipiscing massa vitae auctor mr
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center">
          <div className="max-w-[60.125rem] w-full px-4">
            <h2 className="text-center text-intellibingrey-700 font-bold text-[2.5rem] mb-8 md:mb-12">
              FAQs
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full text-[#1d1d1f]"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      <footer className="flex flex-col items-center bg-background">
        <div className="max-w-[60.125rem] w-full px-4 py-6 md:py12 md:px-8 space-y-8">
          <ul className="flex flex-col gap-3 md:flex-row md:items-center md:justify-center">
            <li>
              <a
                href="#"
                className="text-sm font-medium text-black/80 hover:text-black duration-200 "
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-medium text-black/80 hover:text-black duration-200 "
              >
                Terms And Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-medium text-black/80 hover:text-black duration-200 "
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-medium text-black/80 hover:text-black duration-200 "
              >
                Support
              </a>
            </li>
          </ul>
          <ul className="flex justify-center items-center gap-3">
            <li>
              <a href="#">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <GithubIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <LinkedinIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <InstagramIcon />
              </a>
            </li>
          </ul>
          <p className="text-intellibingrey-400 text-center">
            &copy; 2024 Intelibin, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
