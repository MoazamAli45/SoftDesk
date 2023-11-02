import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import cab1 from "../../../public/Assets/previous/Cabinet22-23.jpg";
import cab2 from "../../../public/Assets/previous/Cabinet21-22.jpg";
import cab3 from "../../../public/Assets/previous/Cabinet20-21.jpg";
import cab4 from "../../../public/Assets/previous/Cabinet19-20.jpg";
import cab5 from "../../../public/Assets/previous/Cabinet18-19.jpg";
import cab6 from "../../../public/Assets/previous/Cabinet17-18.jpg";
import cab7 from "../../../public/Assets/previous/Cabinet16-17.jpg";
import cab8 from "../../../public/Assets/previous/Cabinet16-17-2.jpg";
import cab9 from "../../../public/Assets/previous/Cabinet15-16.jpg";
import cab10 from "../../../public/Assets/previous/Cabinet14-15.jpg";
import Image from "next/image";
import "swiper/css/pagination";
import "swiper/css/navigation";
import classes from "./Previous.module.css";
import { Pagination, Navigation, Autoplay, Mousewheel, Keyboard } from "swiper";

export default function Previous() {
  const data = [
    {
      id: "01",
      name: "Cabinet 2022-23",
      img: cab1,
    },
    {
      id: "02",
      name: "Cabinet 2021-22",
      img: cab2,
    },
    {
      id: "03",
      name: "Cabinet 2020-21",
      img: cab3,
    },
    {
      id: "04",
      name: "Cabinet 2019-20",
      img: cab4,
    },
    {
      id: "05",
      name: "Cabinet 2018-19",
      img: cab5,
    },
    {
      id: "06",
      name: "Cabinet 2017-18",
      img: cab6,
    },
    {
      id: "07",
      name: "Cabinet 2016-17",
      img: cab7,
    },
    {
      id: "08",
      name: "Cabinet 2016-17",
      img: cab8,
    },
    {
      id: "09",
      name: "Cabinet 2015-16",
      img: cab9,
    },
    {
      id: "10",
      name: "Cabinet 2014-15",
      img: cab10,
    },
  ];

  return (
    // <div className={classes['Previous']} >

    <div className={classes["Previous"]}>
      <div className={classes["para-head"]}>
        <h3 className={classes["title"]}>
          Previous <span> Cabinet</span>
        </h3>
        <div className={classes["line"]} />
      </div>
      <Swiper
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 800,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Navigation, Autoplay, Mousewheel, Keyboard, Pagination]}
        slidesPerView={1}
        className="mySwiper"
      >
        {data.map((Cabinet, id) => (
          <SwiperSlide className={classes["Slide"]} key={id}>
            <h2 className={classes["name"]}>{Cabinet.name} </h2>
            <div className={classes["shape"]}>
              <Image
                className={classes["cabinet-img"]}
                src={Cabinet.img}
                alt={Cabinet.name}
              ></Image>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
