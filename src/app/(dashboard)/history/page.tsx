import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import React from "react";
import { cn } from "~/lib/utils";

const Page = () => {
  return (
    <div className="px-4 pb-10 md:pb-20">
      <h2 className="text-center text-lg font-[700] leading-[35.2px] text-intellibinGRAY-600 md:text-[2rem]">
        Waste History
      </h2>
      <div className="flex flex-col gap-3 pt-5 md:pt-10">
        <div className="flex items-center justify-between rounded-lg bg-intellibin-veryLightGreen px-4 py-6 text-intellibinGRAY-600">
          <p className="leading-[22.4px]">01 Reward Points</p>
          <p className="flex items-center gap-2 text-intellibin-primary">
            <span className="flex items-center gap-1">
              <span>points:</span>
              <span className="text-[2rem] font-[700] leading-[35.2px]">
                45
              </span>
            </span>
            <span>
              <ChevronRightIcon className="h-4 w-4" />
            </span>
          </p>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-intellibin-veryLightGreen px-4 py-6 text-intellibinGRAY-600">
          <p className="leading-[22.4px]">01 Reward Points</p>
          <p className="flex items-center gap-2 text-intellibin-primary">
            <span className="flex items-center gap-1">
              <span>points:</span>
              <span className="text-[2rem] font-[700] leading-[35.2px]">
                45
              </span>
            </span>
            <span>
              <ChevronRightIcon className="h-4 w-4" />
            </span>
          </p>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-intellibin-veryLightGreen px-4 py-6 text-intellibinGRAY-600">
          <p className="leading-[22.4px]">01 Reward Points</p>
          <p className="flex items-center gap-2 text-intellibin-primary">
            <span className="flex items-center gap-1">
              <span>points:</span>
              <span className="text-[2rem] font-[700] leading-[35.2px]">
                45
              </span>
            </span>
            <span>
              <ChevronRightIcon className="h-4 w-4" />
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 pt-5 lg:pt-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-intellibin-primary">
            <button>
              <ChevronLeftIcon className="h-4 w-4" />
            </button>{" "}
            <p className="text-lg font-[700] text-intellibinGRAY-600">April</p>{" "}
            <button>
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </div>
          <button className="flex items-center gap-1 text-intellibinGRAY-600">
            <span>All</span>
            <span>
              <ChevronDownIcon />
            </span>
          </button>
        </div>
        <p className="flex items-center gap-1 text-xs text-intellibinGRAY-600">
          <span>Waste Pickups</span> <span className="font-[700]">6</span>{" "}
          <span>Recyclables</span>
          <span className="font-[700]">6</span>
        </p>
        <ul className="flex list-disc flex-col gap-2 pl-4">
          {[
            { status: "completed", quantity: false, pickup: "Waste" },
            { status: "ongoing", quantity: true, pickup: "Waste" },
            { status: "completed", quantity: false, pickup: "Recyclable" },
            { status: "completed", quantity: true, pickup: "Waste" },
            { status: "completed", quantity: false, pickup: "Recyclable" },
          ].map((w, i) => (
            <li
              key={`waste-${i + 1}`}
              className={cn(
                w.status === "completed"
                  ? "marker:text-intellibin-primary"
                  : "marker:text-intellibin-warning",
              )}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-[700] leading-[22.4px] text-intellibin-primary md:text-base">
                    {w.pickup} Pickup
                  </h3>
                  <p className="text-xs font-medium leading-4 text-intellibinGRAY-600">
                    April 16, 2024 2:36pm
                  </p>
                </div>
                <div
                  className={cn(
                    w.quantity ? "block text-xs leading-4" : "hidden",
                  )}
                >
                  <p className="text-intellibin-primary">Qty:14kg</p>
                  <p className="text-intellibinGRAY-600">Points:</p>
                </div>
                <p
                  className={cn("text-xs leading-[19.6px] md:text-sm", {
                    "text-intellibin-warning":
                      w.status.toLowerCase() === "ongoing",
                    "text-intellibin-primary":
                      w.status.toLowerCase() === "completed",
                  })}
                >
                  +Ongoing
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
