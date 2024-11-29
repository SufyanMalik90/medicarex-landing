import React from "react";

const Outro = () => {
  return (
    <div className="w-full h-auto flex justify-center mt-6 lg:mt-32 items-center relative">
      <span className="w-full h-28 absolute bottom-0 left-0 bg-[#F8F8F8]"></span>
      <div className="w-[98%] lg:w-[70%] px-6 lg:px-12 h-56 rounded-2xl z-[1000] flex justify-start items-end bg-[#1A5091]">
        <div className="hidden lg:block lg:w-1/4">
          <img src="/mockup.png" alt="outro-mockup" />
        </div>
        <div className="w-full lg:w-3/4 lg:px-10 flex flex-col gap-4 h-full justify-center items-start">
          <h1 className="text-[28px] font-bold text-white leading-tight ">
          Caring for You, Every Step of the Way
          </h1>
          <p className="text-sm font-normal text-white/[0.80]">
            Explore our app today!
          </p>
          <div className="flex gap-2 justify-start items-center">
        <button
          name="get-the-app"
          className="bg-[#0089FB] shadow-sm w-36 h-12 rounded-full flex items-center justify-center text-white text-md font-medium"
        >
          Explore Now!
        </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Outro;
