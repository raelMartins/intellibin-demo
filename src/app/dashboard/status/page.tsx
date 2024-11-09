import React from "react";
import { ChevronRightIcon, CirclePlus, MapPin, Trash2 } from "lucide-react";

const Page = () => {
  return <div className="px-4 pb-10 md:pb-20">
    <div className="flex justify-between items-center">
    <h2 className="md:text-intellibinGRAY-900 text-intellibinGRAY-600 mb-8 leading-[22px] flex items-center justify-center md:text-2xl md:font-semibold ml-96">
        Status
      </h2>
      <span className="flex text-intellibin-primary gap-1 ">
      <h4 className="font-semibold md:leading-[26.4px]">
              Add bin
            </h4>
            <CirclePlus />
      </span>
    </div>

    <div className="flex flex-col gap-3 pt-5 md:pt-10">
        <div className="flex items-center justify-between rounded-lg bg-intellibin-veryLightGreen px-4 py-6 text-intellibinGRAY-600">
          <p className="leading-[22.4px] flex gap-2">01 <Trash2 /></p>
          <p className="leading-[22.4px] flex gap-2"> <MapPin />Tafawa Balewa Way, University Of Lagos, Lagos 101245, Lagos</p>
          <p className="flex items-center gap-2 text-intellibin-primary">
           
              <span>50%</span>
          
            <span>
              <ChevronRightIcon className="h-4 w-4" />
            </span>
          </p>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-intellibin-veryLightGreen px-4 py-6 text-intellibinGRAY-600">
          <p className="leading-[22.4px] flex gap-2">02 <Trash2 /></p>
          <p className="leading-[22.4px] flex gap-2"> <MapPin />Tafawa Balewa Way, University Of Lagos, Lagos 101245, Lagos</p>
          <p className="flex items-center gap-2 text-intellibin-primary">
           
              <span>50%</span>
          
            <span>
              <ChevronRightIcon className="h-4 w-4" />
            </span>
          </p>
        </div>
        <div className="flex items-center justify-between rounded-lg bg-intellibin-veryLightGreen px-4 py-6 text-intellibinGRAY-600">
          <p className="leading-[22.4px] flex gap-2">03 <Trash2 /></p>
          <p className="leading-[22.4px] flex gap-2"> <MapPin />Tafawa Balewa Way, University Of Lagos, Lagos 101245, Lagos</p>
          <p className="flex items-center gap-2 text-intellibin-primary">
           
              <span>50%</span>
          
            <span>
              <ChevronRightIcon className="h-4 w-4" />
            </span>
          </p>
        </div>
      </div>
      
      <button
          type="submit"
          className="w-full bg-intellibin-primary text-white py-3 px-4 rounded-md  focus:outline focus:ring mt-8"
        >
          Request for a smart bin
        </button>
  </div>;
};

export default Page;
