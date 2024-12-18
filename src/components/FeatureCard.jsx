import React from "react";

const FeatureCard = ({ title, description, /*src */ }) => {
  return (
    <div className="relative bg-[#E9F3FF] flex flex-col gap-4 justify-center items-center px-2 md:px-6 pt-5 h-auto rounded-2xl transition-all duration-200 hover:-translate-y-3">
      <div className="w-auto flex flex-col justify-center items-center gap-1">
        <h3 className="text-md lg:text-lg text-center font-semibold text-black">
          {title}
        </h3>
        <p className="text-[10px] lg:text-xs text-center font-normal text-[#756F6F] mb-4">
          {description}
        </p>
      </div>
      {/* <img src={src} alt={title} /> */}
    </div>
  );
};

export default FeatureCard;
