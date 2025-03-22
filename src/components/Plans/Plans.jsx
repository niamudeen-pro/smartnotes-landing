import React, { useState } from "react";
import { PLANS } from "../../utils/constants";
import checkIcon from "../../assets/svg/check.png";
import clsx from "clsx"; // Import clsx for better class management

export default function Plans() {
  const [isYearly, setIsYearly] = useState(true);
  return (
    <section className="flex flex-col items-center py-24">
      {/* Header Section */}
      <div className="text-center">
        <h3 className="mb-4 text-[30px] font-bold text-secondary-200 sm:text-5xl">
          Pricing <span className="text-primary-100">& Plans</span>
        </h3>
        <p className="text-reg max-w-sm text-primary-100 opacity-70">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>

        <div className="my-10 flex items-center justify-center gap-4 text-white">
          {/* Monthly Label */}
          <p className="text-med">Monthly</p>

          {/* Toggle Switch */}
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative h-8 w-16 rounded-full p-1 transition-all ${
              isYearly ? "bg-teal-500" : "bg-primary-100"
            }`}
          >
            <div
              className={`h-6 w-6 rounded-full bg-white transition-all ${
                isYearly ? "translate-x-8" : "translate-x-0"
              }`}
            ></div>
          </button>

          {/* Yearly Label */}
          <span className="text-med">Yearly</span>

          {/* Save 25% Button */}
          <button className="rounded-full bg-gradient px-3 py-1 text-sm text-black">
            Save 25%
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {PLANS.map((plan, index) => (
          <div
            key={plan.plan}
            className={clsx(
              "max-w-80 w-full rounded-xl border px-8 py-10",
              plan.darkMode
                ? "border-teal-500 text-primary-100"
                : "bg-primary-100 text-black",
            )}
          >
            {/* Plan Header */}
            <div className="mb-8 flex items-center gap-2">
              <img
                src={plan.planIcon}
                alt="plan icon"
                className="h-[25px] w-[25px] rounded-md border border-secondary-200 p-1"
              />
              <p className="text-small font-normal text-secondary-200">
                {plan.plan}
              </p>
            </div>

            {/* Price or Custom Label */}
            <div className="mb-8 flex items-end gap-2">
              <h2
                className={clsx(
                  "font-bold leading-none",
                  plan.darkMode ? "text-primary-100" : "text-primary-300",
                )}
              >
                {index === 2 ? "Custom" : `$${plan.planPrice}`}
              </h2>
              {index !== 2 && (
                <p className="leading-none text-secondary-200">/ yearly</p>
              )}
            </div>

            {/* Plan Features */}
            <ul className="mb-8 mt-4 space-y-2 text-sm">
              {plan.bullets.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <img src={checkIcon} alt="check icon" />
                  <p className="text-reg">{feature}</p>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button
              className={clsx(
                "flex_center text-med h-[57px] w-full gap-2 rounded-lg border border-secondary-200",
                plan.darkMode && "bg-gradient text-black",
              )}
            >
              {plan.CallToAction}
              <img
                src={plan.ctaIcon}
                alt="cta icon"
                className={clsx(
                  "h-8 w-8 rounded-md p-1",
                  !plan.darkMode && "border border-secondary-200",
                )}
              />
            </button>

            {/* Footer Text */}
            {index !== 2 && (
              <p className="text-tiny py-1 text-center text-primary-200">
                No credit card required
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
