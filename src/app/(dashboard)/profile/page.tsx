import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6">Profile</h1>
      
      <div className="flex flex-row justify-between items-center rounded-lg w-full">
        <div className="w-[240px] h-[196px] rounded-[24px] bg-gray-200 flex items-center justify-center mb-4 relative">
          <img src="/images/user.svg" alt="" />
          <div className="absolute bottom-[16px] right-[16px] w-6 h-6 bg-green-500 rounded-[24px] flex items-center justify-center">
            <img src="/images/Edit.svg" alt="" />
          </div>
        </div>
        
        <div className="text-left flex flex-col items-start gap-4 mr-20"  >
          <h2 className="text-lg md:text-xl font-bold">James Ben</h2>
          <p className="text-sm md:text-base text-gray-500">ID A00112233</p>
          <p className="text-sm md:text-base text-gray-500">jbennjoku@gmail.com</p>
          <p className="text-sm md:text-base text-gray-500">+234 809 838 5425</p>
          <p className="text-sm md:text-base text-gray-500 flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7v6a2 2 0 002 2h.002A2 2 0 0120 17v1a2 2 0 01-2 2H6a2 2 0 01-2-2v-1a2 2 0 01.001-2H4a2 2 0 002-2V7h13zM7 10h.01M7 12h.01M7 14h.01M12 10h.01M12 12h.01M12 14h.01M16 10h.01M16 12h.01M16 14h.01M12 18v.01"></path>
            </svg>
            3
          </p>
        </div>
      </div>

      <div className="mt-8 w-full">
        {['Edit Profile', 'Subscriptions', 'Help & Support', 'About Intellibin', 'Password Reset'].map((item) => (
          <button
            key={item}
            className="flex justify-between items-center w-full px-4 py-3 bg-[#ECFDF5] color-[#1F2024] text-left text-sm md:text-base rounded-md mb-2"
          >
            {item}
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        ))}
      </div>

      <button className="mt-4 text-red-500 hover:text-red-600 text-sm md:text-base">Log Out</button>
    </div>
  );
};

export default Page;
