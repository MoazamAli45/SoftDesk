import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../common/customButton/customButton";
import { IoMdContact } from "react-icons/io";
import { Data } from "../../../Data/data";
import { Spin as Hamburger } from "hamburger-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="w-full h-[90px]">
      <div className="w-full h-full max-w-[1200px] m-auto flex justify-between items-center px-4 lg:px-[10px]">
        {/* =====> logo */}
        <div className="flex justify-center items-center text-[30px] text-brand-main font-semibold">
          <Link href="" className="w-[100px] h-[70px] relative">
            <Image
              src="/Assets/logo.png"
              fill
              className="object-cover"
              alt=""
            />
          </Link>
        </div>
        <div
          style={{
            display: "none",
            lg: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "14px",
            },
          }}
        >
          {Data.navibar.map((navi, index) => (
            <Link
              key={index}
              href={navi.path}
              style={{
                fontSize: "18px",
                "!": {
                  color: "[#F59837]",
                  fontWeight: "normal",
                  fontFamily: "poppins",
                },
              }}
            >
              {navi.name}
            </Link>
          ))}
          {/* <CustomButton
            icon={<IoMdContact style={{ fontSize: "22px", color: "text-brand-main" }} />}
            text="Contact us"
            styles="bg-none border-2 border-brand-main text-brand-main w-[180px] py-2 rounded-[64px]"
          /> */}
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            lg: { display: "none" },
          }}
        >
          <Hamburger
            className="text-white-main"
            color="white"
            rounded
            size={34}
            toggled={isOpen}
            toggle={setIsOpen}
          />
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className="drawer"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "6px",
                justifyContent: "center",
                alignItems: "center",
                color: "text-white-main",
              }}
            >
              {/* =========>top bar */}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <RxCross2
                  onClick={toggleDrawer}
                  style={{ fontSize: "60px", color: "#e76b2dde" }}
                />
              </div>
              {/* ========> sections links */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "16px",
                }}
              >
                {Data.navibar.map((navi, index) => (
                  <Link
                    // onClick={toggleDrawer}
                    href={navi.path}
                    style={{
                      fontFamily: "poppins",
                      fontSize: "34px",
                      color: "#e76b2dde",
                    }}
                    key={index}
                  >
                    {navi.name}
                  </Link>
                ))}
              </div>
              {/* ========> social links */}
              <div
                style={{
                  display: "flex",
                  items: "center",
                  justifyContent: "center",
                  gap: "8px",
                  marginTop: "20px",
                }}
              >
                {mobileSocialLinks.map((navi, index) => (
                  <Link
                    href="/"
                    key={index}
                    style={{ color: "#e76b2dde", fontSize: "50px" }}
                  >
                    {navi.label}
                  </Link>
                ))}
              </div>
            </div>
          </Drawer>
        </div>
        {/* ======> Links  */}
        {/* <div className="hidden lg:flex justify-center items-center gap-14">
          {Data.navibar.map((navi, index) => {
            return (
              <Link
                key={index}
                // color="#CF6732"
                href={navi.path}
                className="text-[18px] !text-[#F59837] font-normal font-poppins "
              >
                {navi.name}
              </Link>
            );
          })}
          
        </div> */}
        {/* <div className="lg:hidden w-full flex justify-end items-center ">
          <Hamburger
            className=" text-white-main"
            color="white"
            rounded
            size={34}
            toggled={isOpen}
            toggle={setIsOpen}
          />
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className="drawer"
          >
            <div className="flex flex-col p-6 justify-center items-center ">
              {/* =========>top bar */}
        {/*<div className="w-full flex justify-end items-center">
                <RxCross2
                  onClick={toggleDrawer}
                  className="text-[60px] text-white-main "
                />
              </div>
              {/* ========> sections links */}
        {/*<div className="flex flex-col justify-center items-center gap-8 mt-16">
                {Data.navibar.map((navi, index) => {
                  return (
                    <Link
                      onClick={toggleDrawer}
                      href={navi.path}
                      className="font-poppins text-[34px] text-white-main"
                      key={index}
                    >
                      {navi.name}
                    </Link>
                  );
                })}
              </div>
              {/* ========> social links */}
        {/*} <div className="flex items-center justify-center gap-8 mt-20">
                {mobileSocialLinks.map((navi, index) => {
                  return (
                    <Link
                      href="/"
                      key={index}
                      className="text-white-main text-[50px]"
                    >
                      {navi.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </Drawer>
        </div> */}
      </div>
    </div>
  );
}

const mobileSocialLinks = [
  {
    label: <AiFillInstagram />,
  },
  {
    label: <BsFacebook />,
  },
  {
    label: <AiOutlineTwitter />,
  },
];

export default Header;
