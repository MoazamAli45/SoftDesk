import React, { useRef } from "react";

function Video({ src, type = "video/mp4", styles = "" }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
  };

  return (
    <video
      ref={videoRef}
      playsInline
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`w-full h-full rounded-[15px] object-cover  ${styles}`}
    >
      <source src={src} type={type} />
    </video>
  );
}

export default Video;
