import React from "react";
import { ANIMATED_LOGOS } from "../../utils/constants";

export default function AnimatedLogos() {
  return (
    <section className="relative overflow-hidden">
      <div className="flex animate-scroll space-x-16 whitespace-nowrap">
        {ANIMATED_LOGOS.concat(ANIMATED_LOGOS).map((logo, index) => (
          <img className="" src={logo} alt="logo" key={index} />
        ))}
      </div>
      <div className="absolute left-0 top-0 w-[20%] bg-gradient-to-l from-transparent to-[#080808] sm:w-[50%]">
        123
      </div>
      <div className="absolute right-0 top-0 w-[20%] bg-gradient-to-l from-[#080808] to-transparent sm:w-[50%]">
        123
      </div>
    </section>
  );
}
