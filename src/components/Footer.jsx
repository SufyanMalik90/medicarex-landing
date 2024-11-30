import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="px-6 md:px-8 lg:px-28 py-20 bg-[#F8F8F8] pt-12 pb-6 flex flex-col  gap-y-6 md:gap-y-8">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 lg:px-8 gap-y-6">
        <div className="col-span-12 md:col-span-4 flex justify-start items-center">
        <Image alt="logo" src="/logomedicare.svg" width={150} height={150}/>
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col justify-start items-start lg:items-center gap-y-4">
          <p className="text-xl xl:text-2xl font-semibold leading-[27.72px]">
            Find us on Social Media
          </p>
          <div className="flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="w-11 h-11 border-[1px] border-black rounded-full flex justify-center items-center"
            >
              <Image alt="facebook-icon" src="/facebook-icon.svg" width={20} height={20}/>
            </Link>
            <Link
              href="/"
              className="w-11 h-11 border-[1px] border-black rounded-full flex justify-center items-center"
            >
              <Image alt="twitter-icon" src="/twitter-logo.svg" width={20} height={20}/>
            </Link>
            <Link
              href="/"
              className="w-11 h-11 border-[1px] border-black rounded-full flex justify-center items-center"
            >
              <Image alt="linkedin-icon" src="/linkedin-logo.svg" width={20} height={20}/>
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              className="w-11 h-11 border-[1px] border-black rounded-full flex justify-center items-center"
            >
              <Image alt="insta-icon" src="/insta-logo.svg" width={20} height={20}/>

            </Link>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col items-start lg:items-end gap-y-4">
          <p className="text-lg xl:text-xl font-semibold leading-[23.1px]">
            We’re always happy to help.
          </p>
          <a
            href="mailto:support@medicareX.com"
            className={`text-sm text-black/[0.7] font-light leading-[16.17px]`}
          >
            support@medicareX.com
          </a>
        </div>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row justify-between items-center md:py-3 gap-y-3">
        <p className="text-sm font-light leading-[16.17px] text-center">
          Copyright © 2024 MedicaeX. All rights reserved.
        </p>
        <div>
          {/* <Link
            to="/terms-conditions"
            className="text-xs text-gray-600 font-light leading-[16.17px]"
          >
            Terms of Services |{" "}
          </Link>
          <Link
            to="/privacy-policy"
            className="text-xs text-gray-600 font-light leading-[16.17px]"
          >
            Privacy Policy |{" "}
          </Link>
          <Link
            to="/cookie-policy"
            className="text-xs text-gray-600 font-light leading-[16.17px]"
          >
            Cookie Policy
          </Link> */}
          <a className="text-xs text-gray-600" href="/terms-conditions" target="_blank">Terms of Services |{" "}</a>
          <a className="text-xs text-gray-600" href="/privacy-policy" target="_blank">Privacy Policy |{" "}</a>
          <a className="text-xs text-gray-600" href="/cookie-policy" target="_blank">Cookie Policy</a>
          {/* Terms of Services | Privacy Policy */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
