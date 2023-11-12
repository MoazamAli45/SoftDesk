import React, { useState } from 'react'
import Styles from './Styles.module.css'
import Image from 'next/image'
import { Data } from "../../../Data/data";
import Drawer from "react-modern-drawer";
import Link from 'next/link';
import { Spin as Hamburger } from "hamburger-react";
import { RxCross2 } from 'react-icons/rx';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

const mobileSocialLinks = [
    {
      label: <AiFillInstagram />,
      href:'https://www.instagram.com/softdesk_uett/'
    },
    {
      label: <AiFillFacebook />,
      href:'https://www.facebook.com/SoftDesk'
    },
    {
      label: <AiFillLinkedin />,
      href:'https://www.linkedin.com/company/softdeskuett'
    },
    {
      label: <AiOutlineWhatsApp />,
      href:'https://whatsapp.com/channel/0029VaDCcFD1t90VytImBU2e'
    },
  ];
export default function Appbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState);
    };
  return (
    <div className={Styles.Appbar}>
    <div className={Styles.Appbar_inside}>
    <Link className={Styles.link} href='/'>
    <Image
              src="/Assets/logo.png"
              fill
              className={Styles.img}
              alt=""
            />

    </Link>

    <div className={Styles.nav}>
    {Data.navibar.map((navi, index) => (
            <Link
              key={index}
              href={navi.path}
             className={Styles.name}
            >
              {navi.name}
            </Link>
          ))}
    </div>
    <div className={Styles.icon}>
<Hamburger 
    className={Styles.Ham}
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
 <div className={Styles.drawer}>
                {/* =========>top bar */}
                <div className={Styles.cross}>
                  <RxCross2
                    onClick={toggleDrawer}
                    className={Styles.cross1}
                  />
                </div>
                <div className={Styles.drawerM}>
                {Data.navibar.map((navi, index) => (
                  <Link
                    // onClick={toggleDrawer}
                    href={navi.path}
                    className={Styles.path}
                    key={index}
                  >
                    {navi.name}
                  </Link>
                ))}
                </div>
                </div>
                <div className={Styles.social}>
                {mobileSocialLinks.map((navi, index) => (
                  <Link
                    href={navi.href}
                    key={index}
                    style={{ color: "aliceblue", fontSize: "50px" }}
                  >
                    {navi.label}
                  </Link>
                ))}
                </div>
          </Drawer>
    </div>
    </div>
    </div>
  )

}
