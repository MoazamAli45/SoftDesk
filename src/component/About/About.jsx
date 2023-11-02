import classes from "./About.module.css";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { Swiper } from "swiper/react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay, Mousewheel, Keyboard } from "swiper";

import { SwiperSlide } from "swiper/react";
export default function About() {
  const data = [
    { id: "01", img: require("../../../public/Assets/about/sd1.jpg") },
    { id: "02", img: require("../../../public/Assets/about/sd2.jpg") },
    { id: "03", img: require("../../../public/Assets/about/sd3.jpg") },
    { id: "41", img: require("../../../public/Assets/about/sd21.JPG") },
    { id: "09", img: require("../../../public/Assets/about/sd4.jpeg") },
    { id: "10", img: require("../../../public/Assets/about/sd5.JPG") },
    { id: "11", img: require("../../../public/Assets/about/sd6.JPG") },
    // { id: "12", img: require("../../../public/Assets/about/sd7.jpg") },
    // { id: "13", img: require("../../../public/Assets/about/sd8.jpg") },
    { id: "05", img: require("../../../public/Assets/about/sd9.jpeg") },
    { id: "04", img: require("../../../public/Assets/about/sd10.jpeg") },
    // { id: "06", img: require("../../../public/Assets/about/sd11.jpg") },
    { id: "07", img: require("../../../public/Assets/about/sd12.jpg") },
    { id: "08", img: require("../../../public/Assets/about/sd13.jpg") },
    { id: "16", img: require("../../../public/Assets/about/sd16.JPG") },
    { id: "17", img: require("../../../public/Assets/about/sd17.JPG") },
    { id: "18", img: require("../../../public/Assets/about/sd18.JPG") },
    { id: "19", img: require("../../../public/Assets/about/sd19.JPG") },
    { id: "20", img: require("../../../public/Assets/about/sd20.JPG") },
    //   {id:'21',
    // img: require('./Img14.jpg')},
    //   {id:'22',
    // img: require('../../../public/Assets/about/sd22.JPG')},
  ];
  return (
    <div id="home" className={classes["About"]}>
      <div className={classes["container"]}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F8983B" fill-opacity="1" d="M0,192L60,202.7C120,213,240,235,360,245.3C480,256,600,256,720,218.7C840,181,960,107,1080,85.3C1200,64,1320,96,1380,112L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg> */}
        <div className={classes["main"]} data-aos="fade-up">
          <h1 className={classes["About_heading"]}>
            Hola! We are
            <span className={classes["soft"]}>
              <TypeAnimation
                sequence={[" Softdesk", 2000, " Tech Nexus", 2000]}
                speed={50}
                className="animatehead"
                wrapper="span" // Animation will be rendered as a <span>
                repeat={Infinity}
              />
            </span>
          </h1>
          <div className={classes["About-quote"]}>
            <p className={classes["quote"]}>
              Where Vision Drives Change and Ignites Empathy
              <br /> - Join Softdesk
            </p>
          </div>
        </div>
        <div className={classes["content"]}>
          <Swiper
            slidesPerView={"auto"}
            // spaceBetween={30}
            // pagination={{clickable:true}}
            mousewheel={true}
            keyboard={true}
            loop={true}
            autoplay={{
              delay: 800,
            }}
            navigation={false}
            modules={[Navigation, Autoplay, Mousewheel, Keyboard]}
            className={classes["mySwiper"]}
          >
            {data.map((slide) => (
              <SwiperSlide className={classes["swiper-slide"]} key={slide.id}>
                <Image
                  src={slide.img}
                  className={classes["slide-img"]}
                  alt="pic"
                ></Image>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={classes["main-para"]} data-aos="fade-up">
        <div className={classes["para-head"]}>
          <h2 className={classes["who"]}>About us</h2>
          <div className={classes["line"]} />
        </div>
        <Fade direction="up" triggerOnce>
          <p className={classes["para"]}>
            SoftDesk is a student-run society at UET, Taxila that brings
            together IT, software, and other Engineering Students. At SoftDesk,
            <span>
              {" "}
              we&apos;re more than just a society &minus; we&apos;re a community
              of passionate and curious students who share a love of technology,
              innovation, and creativity.
            </span>{" "}
            Whether you&apos;re a coding wizard, content creator, designing
            guru, or marketing mastermind, there&apos;s a place for you in our
            community. Our events and activities are designed to inspire and
            challenge you, from coding challenges and hackathons to workshops
            and guest speaker events. We believe that the best ideas come from
            collaboration and teamwork, so we encourage everyone to get involved
            and work together to create something amazing. Join us today and
            discover all that SoftDesk has to offer. Together, we can unleash
            our collective creativity and make a positive impact on the world.
          </p>
        </Fade>
      </div>
    </div>
  );
}
