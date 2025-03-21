import React from "react";
import arrowIcon from "../../assets/svg/arrow.svg";
import ctaShapes from "../../assets/cta-shapes.png";

export default function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto flex max-w-4xl flex-col gap-12 md:flex-row">
        <div className="relative max-w-md">
          <h2 className="mb-4 text-[30px] font-bold !leading-[125%] text-primary-100 sm:text-5xl">
            Unlock the full potential of{" "}
            <span className="text_base_gradient">SmartNotes</span>
          </h2>
          <p className="mb-[50px] text-base text-primary-100 opacity-70">
            Ready to streamline your workflow and boost your productivity? Start
            your free trial of SmartNotes today and experience the power of
            smart note-taking.
          </p>
          <button
            className="flex h-[57px] w-[200px] items-center justify-center gap-2 rounded-lg bg-gradient px-6 py-3 text-primary-400 transition-transform hover:scale-105"
            aria-label="Sign up with your email"
          >
            Signup for free{" "}
            <img src={arrowIcon} alt="Arrow icon indicating signup" />
          </button>
        </div>
        <div className="hidden flex-1 sm:flex md:block">
          <img
            src={ctaShapes}
            alt="Abstract SmartNotes design"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
