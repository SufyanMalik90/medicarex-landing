import React from "react";

const AboutUs = () => {
  return (
    <div
      id="about-us"
      className="w-full h-auto grid grid-cols-1 gap-6 lg:gap-0 lg:grid-cols-2 grid-rows-1 px-6 md:px-8 lg:px-20 xl:px-28 py-6 lg:py-20"
    >
      <img
        src="/mockup.png"
        alt="about-us-mockup"
        className="mx-auto lg:mx-0 order-1 px-4"
      />
      <div className="h-full flex flex-col gap-4 justify-center items-start order-1">
        <h2 className="text-[45px] font-bold tracking-tight leading-tight">
          About Us
        </h2>

        <p className="text-md font-normal text-[#454545]">
        At MedicareX, we're dedicated to empowering individuals to take control of their health. Our platform simplifies access to quality healthcare, connecting you with trusted doctors, pharmacies, and emergency services. Securely store your medical records, schedule appointments, and receive timely health alerts, all in one convenient place.
          <br />
          <br /> We're committed to leveraging technology to revolutionize healthcare, making it more accessible and efficient.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
