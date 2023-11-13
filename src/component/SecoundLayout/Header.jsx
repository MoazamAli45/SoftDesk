import React from "react";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { Fade } from "react-awesome-reveal";
import header from './header.module.css'

function Headers() {
  return (
    <div className={header.header}>
      {/* ====> back to home icon */}
      <Fade direction="up" triggerOnce>
        <Link
          href="/"
          className={header.link}
        >
          <BiArrowBack className="text-brand-main text-[30px] sm:text-[36px] backForAnimation object-contain" />
          Back to Home
        </Link>
      </Fade>
    </div>
  );
}

export default Headers;
