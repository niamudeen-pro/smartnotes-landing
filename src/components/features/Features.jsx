import React from "react";
import { FEATURES } from "../../utils/constants";

const FeatureCard = ({ heading, description, icon }) => (
  <div className="rounded-lg border border-[rgba(4,140,128,0.5)] p-[32px] text-primary-100">
    <img
      src={icon}
      alt=""
      className="mb-6 h-8 w-8 rounded-md border border-secondary-200 p-1"
    />
    <p className="mb-2 text-xl font-semibold">{heading}</p>
    <p className="text-accent">{description}</p>
  </div>
);

export default function Features() {
  return (
    <div className="relative mx-auto max-w-[1180px] flex-col px-4 py-[70px] text-primary-100">
      <div className="mb-20 text-center">
        <h2 className="mb-4 text-[30px] font-bold sm:text-5xl">
          Discover the Power of{" "}
          <span className="text_base_gradient">SmartNotes</span>
        </h2>
        <p className="mx-auto max-w-sm text-base text-primary-100 opacity-70">
          SmartNotes is packed with innovative features designed to
          revolutionize how you take notes, collaborate, and stay organized.
        </p>
      </div>
      <div className="grid gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {FEATURES.slice(0, 2).map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {FEATURES.slice(2, 6).map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>
      </div>
      {/* <div className="features__overlay_gradient"></div> */}
    </div>
  );
}
