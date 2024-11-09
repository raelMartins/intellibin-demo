"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getCookie } from "cookies-next";
import {
  ArrowRightIcon,
  ChevronRightIcon,
  CloudIcon,
  MapPinIcon,
  ShieldCheckIcon,
  Trash2Icon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
  // const [isLoading, setIsLoading] = useState(true)
  const token = getCookie("intellibin_token");
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["dashboard details"],
    queryFn: async () => {
      const res = await axios.get(
        "https://intellibin-treekle-be-admin.onrender.com/api/wastebin/dashboard/",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return res.data[0];
    },
  });

  // console.log('the data is', data)
  //if data is loading
  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>
  }
  return (
    <div className="px-4 pb-10 md:pb-20">
      <h2 className="mb-8 leading-[22px] text-intellibinGRAY-600 md:text-xl md:font-semibold md:text-intellibinGRAY-900">
        Good afternoon Ben!
      </h2>
      <div className="flex flex-col gap-5">
        <div className="relative flex w-full flex-col gap-6 overflow-clip rounded-xl bg-intellibin-primary p-5 text-white md:gap-10">
          <Image
            src="/images/intellibin_frame_green.png"
            fill
            className="top-5 w-full object-contain"
            alt=""
          />
          <div className="relative flex justify-between">
            <div className="flex flex-col gap-3 text-xs md:text-sm">
              <p>User ID: A00112233</p>
              <p className="flex items-center gap-2">
                <span>
                  <MapPinIcon className="h-3 w-3 md:h-4 md:w-4" />
                </span>
                <span>Yaba,Lagos</span>
              </p>
              <p className="flex items-center gap-2">
                <span>
                  <CloudIcon className="h-3 w-3 md:h-4 md:w-4" />
                </span>{" "}
                <span>Cloudy</span>
                <span>30&deg;C</span>
              </p>
            </div>
            <div>
              <p className="font-medium leading-[22px] md:text-xl">
                Reward Points:
              </p>
              <p className="text-[2.5rem] font-semibold leading-[44px]">300</p>
            </div>
          </div>
          <div className="relative flex items-center gap-3 text-xs md:text-sm">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <span>
                  <Trash2Icon className="h-3 w-3 md:h-4 md:w-4" />
                </span>
                <span className="font-medium">3</span>
              </div>
              <div className="flex items-center gap-1">
                <span>
                  <ShieldCheckIcon className="h-3 w-3 md:h-4 md:w-4" />
                </span>
                <span className="font-medium">3</span>
              </div>
            </div>
            <Link
              href="/status"
              className="flex items-center gap-1 text-[0.625rem] duration-150 hover:text-white/60 md:text-xs"
            >
              <span>View Status</span>
              <span className="flex rounded-sm bg-intellibin-veryLightGreen p-1">
                <ChevronRightIcon className="h-3 w-3 text-intellibin-primary" />
              </span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-intellibinGRAY-600">
            <h2 className="text-xl font-semibold md:text-2xl md:leading-[26.4px]">
              Trucks around you
            </h2>
            <Link
              href="#view"
              className="flex items-center gap-1 text-xs md:text-sm"
            >
              <span className="">View</span>{" "}
              <span>
                <ArrowRightIcon className="h-3 w-3 text-intellibin-primary" />
              </span>
            </Link>
          </div>
          <div>
            <Image
              src="/images/intellibin_map.png"
              width={1050}
              height={215}
              className="h-[215px] w-full rounded-2xl object-cover"
              alt="map"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-intellibinGRAY-600">
            <h2 className="text-xl font-semibold md:text-2xl md:leading-[26.4px]">
              Waste History
            </h2>
            <Link
              href="#view"
              className="flex items-center gap-1 text-xs md:text-sm"
            >
              <span className="">View</span>{" "}
              <span>
                <ArrowRightIcon className="h-3 w-3 text-intellibin-primary" />
              </span>
            </Link>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-[700] leading-[22.4px] text-intellibin-primary">
                  Waste Pickup
                </h3>
                <p className="text-xs font-medium leading-4 text-intellibinGRAY-600">
                  April 16, 2024 2:36pm
                </p>
              </div>
              <p className="text-sm leading-[19.6px] text-intellibin-success">
                +Completed
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-[700] leading-[22.4px] text-intellibin-primary">
                  Recyclable Pickup
                </h3>
                <p className="text-xs font-medium leading-4 text-intellibinGRAY-600">
                  April 16, 2024 2:36pm
                </p>
              </div>
              <p className="text-sm leading-[19.6px] text-intellibin-warning">
                +Ongoing
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-[700] leading-[22.4px] text-intellibin-primary">
                  Waste Pickup
                </h3>
                <p className="text-xs font-medium leading-4 text-intellibinGRAY-600">
                  April 16, 2024 2:36pm
                </p>
              </div>
              <p className="text-sm leading-[19.6px] text-intellibin-success">
                +Completed
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-[700] leading-[22.4px] text-intellibin-primary">
                  Waste Pickup
                </h3>
                <p className="text-xs font-medium leading-4 text-intellibinGRAY-600">
                  April 16, 2024 2:36pm
                </p>
              </div>
              <p className="text-sm leading-[19.6px] text-intellibin-success">
                +Completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
