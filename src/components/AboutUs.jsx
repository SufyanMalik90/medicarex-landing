import React from "react";

const AboutUs = () => {
  return (
    <div
      id="about-us"
      className="w-full h-auto bg-[#00206b] grid grid-cols-1 gap-6 lg:gap-0 lg:grid-cols-2 grid-rows-1 px-6 md:px-8 lg:px-20 xl:px-28 py-6 lg:py-20"
    >
      <img
        src="/mockup.png"
        alt="about-us-mockup"
        className="mx-auto lg:mx-0 order-1 px-4"
      />
      <div className="h-full flex flex-col gap-4 justify-center items-start order-1">
        <h2 className="lg:text-[55px] text-[45px] font-bold tracking-tight leading-tight text-white">
          About Us
        </h2>

        <p className="text-md font-normal text-[#ffffff]">
          At MedicareX, we are revolutionizing healthcare by empowering
          individuals to take control of their health and well-being. Our
          platform is designed to simplify your access to high-quality
          healthcare services, offering a seamless connection to trusted
          doctors, nearby pharmacies, hospitals, and emergency services — all at
          your fingertips.
          <br />
          <br />Our secure system allows you to easily store and
          manage your medical records, giving you the freedom to access your
          health history from anywhere, anytime. No more waiting for paper
          records or trying to track down your previous doctor{`'`}s visits — it
          {`'`}s all securely stored and accessible in a few clicks. We believe in empowering you with the tools
          needed to manage your health journey effectively.
          <br />
          <br />
          At MedicareX, we{`'`}re committed to making healthcare more
          accessible, efficient, and transparent. By combining advanced
          technology with a user-centric approach, we aim to streamline
          healthcare delivery, reduce wait times, and ensure that you receive
          the best possible care whenever you need it. Join us in our mission to
          create a healthier tomorrow, today.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
