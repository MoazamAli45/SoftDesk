import React, { useState } from "react";
import classes from "./Event.module.css";
import { Fade } from "react-awesome-reveal";
import { Data } from "../../../Data/data";
// import video from '../../../public/Assets/Events/roadmap.mp4'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay, Mousewheel, Keyboard } from "swiper";

export default function Event() {
  // const [videoPath, setVideoPath] = useState(video);
  return (
    <div>
      <div className={classes["para-head"]}>
        <h2 className={classes["who"]}>Events</h2>
        <div className={classes["line"]} />
      </div>

      {Data.PreviousEvents.map((item) => (
        <div key={item.id} className={classes["event"]}>
          <div className={classes["event-name"]}>
            <Fade direction="up" triggerOnce>
              <h3>{item.eventName}</h3>
            </Fade>
          </div>
          <div className={classes["event-video"]}></div>
          <div className={classes["event-description"]}>
            <Fade direction="up" triggerOnce>
              <p className={classes["para"]}>{item.description}</p>
            </Fade>
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
              {item.img.map((slide) => (
                <SwiperSlide className={classes["swiper-slide"]} key={slide.id}>
                  <Image
                    src={slide.no}
                    className={classes["slide-img"]}
                    alt="pic"
                  ></Image>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ))}

      {/* <CldVideoPlayer
  width="1620"
  height="1080"
  

  colors={{
    accent: '#ff0000',
    base: '#00ff00',
    text: '#0000ff'
  }}
  fontFace="Source Serif Pro">
  <source src='../../../public/Assets/Events/roadmap.mp4'></source>
      </CldVideoPlayer>
       {Data.PreviousEvents.map( (item) => 
      <Image className={classes['cabinet-img']} src={item.img} alt='pic' width={500} height={500} /> )} */}
    </div>
  );
}
