import React from "react";
import videoImg from "../../assets/video.png";
import playIconImg from "../../assets/play-button.png";
// import TLgradient from "../../assets/vid-top-left-gradient.png";
// import BRgradient from "../../assets/vid-bottom-right-gradient.png";

export default function Video() {
  return (
    <section className="flex_center overflow-hidden py-16">
      <div className="flex_center relative">
        <img src={videoImg} alt="" className="" />

        {/* Play Button */}
        <button className="absolute z-30">
          <img
            src={playIconImg}
            alt="Play Icon"
            className="h-14 w-14 rounded-full"
          />
        </button>

        {/* Overlay */}
        <div className="absolute inset-0 rounded-[20px] bg-secondary-200 opacity-50"></div>
      </div>
    </section>
  );
}
