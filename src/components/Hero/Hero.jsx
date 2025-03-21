import React from "react";
import arrowIcon from "../../assets/svg/arrow.svg";
import abstractShapes from "../../assets/images/abstract-shapes.png";

export default function Hero() {
  return (
    <div className="px-0 py-16 text-primary-100 md:p-[54px]">
      <div className="flex items-center justify-start gap-[101px] leading-[1.1] lg:justify-center">
        <div>
          <h1 className="mb-4 text-4xl font-bold leading-[1.1] sm:text-[54px]">
            <span className="text_base_gradient">Intelligent</span> cloud-based
            <br />
            <span className="text_base_gradient">note-taking</span> and <br />
            collaboration tool
          </h1>
          <p className="mb-[50px] text-primary-100">
            Experience the power of smart note-taking and transform the way you
            work today.
          </p>
          <div className="flex w-full max-w-md items-center rounded-lg bg-accent p-2 shadow-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full flex-1 rounded-lg border-none bg-accent px-4 py-3 text-black placeholder-gray-700 focus:outline-none"
            />
            <button
              className="ml-2 flex h-[57px] w-[167px] items-center justify-center gap-2 rounded-lg bg-gradient px-6 py-3 text-primary-400 transition hover:opacity-90"
              aria-label="Sign up with your email"
            >
              Signup
              <img src={arrowIcon} alt="" />
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src={abstractShapes} alt="abstractShapes " />
        </div>
      </div>
    </div>
  );
}
