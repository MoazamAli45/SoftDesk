import React from "react";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Data } from "../../../Data/data";
import Link from "next/link";

function Footer() {
  return (
    <div className="w-full">
      <div className="w-full m-auto hidden max-w-[1200px] flex flex-col justify-center items-start py-8 px-4 md:px-[10px]">
        {/* =====> line */}
        <div className="border-b-[2px] border-solid border-brand-main w-full"></div>
        {/* =====> footer content */}
        <div className="w-full grid grid-cols-[1.8fr,1.7fr] justify-center items-center px-4">
          {/* =======> logo */}
          <div className="w-full flex justify-start items-center">
            <div className="w-[300px] h-[340px] relative text-white-main text-semibold font-semibold">
              <Image src="/Assets/logo.png" fill className="cover"></Image>
            </div>
          </div>
          {/* =====> Address + socila links */}
          <div className="w-full flex flex-col gap-4">
            {/* => location */}
            <div className="w-full flex gap-2 justify-start items-center">
              <MdLocationOn className="text-[26px] text-brand-main" />
              <p className="text-[16px] text-white-main font-poppins">
                University of Engineeing and Tecnplogy, Taxila
              </p>
            </div>
            {/* =====> social links */}
            <div className="w-full flex justify-start items-center gap-6">
              <p className="text-white-main text-[16px] font-poppins">
                Social Media
              </p>
              <div className="flex justify-center items-center gap-2">
                <BsInstagram className="text-[16px] text-brand-main" />
                <AiFillLinkedin className="text-[16px] text-brand-main" />
                <BsFacebook className="text-[16px] text-brand-main" />
              </div>
            </div>
          </div>
        </div>
        {/* =======> bottom line */}
        <div className="w-full border-b-[1px] border-solid border-brand-main"></div>
        {/* =====> navigation links */}
        <div className="w-full grid grid-cols-[2fr,1.7fr] justify-center items-center px-4 py-8">
          <div className="w-full flex justify-start items-center gap-4">
            {Data.navibar.map((navi, index) => {
              return (
                <Link
                  href={navi.path}
                  className="text-[16px] text-brand-main font-poppins"
                >
                  {navi.name}
                </Link>
              );
            })}
          </div>
          <p className="text-white-main text-[16px]">
            Copyright @ 2023-SoftDesk
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
