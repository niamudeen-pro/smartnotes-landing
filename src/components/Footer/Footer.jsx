import React from "react";
import facebookIcon from "../../assets/footer/facebook.svg";
import linkedinIcon from "../../assets/footer/linkedin.svg";
import twitterIcon from "../../assets/footer/twitter.svg";
import youtubeIcon from "../../assets/footer/youtube.svg";
import logoIcon from "../../assets/svg/logo.svg";
import arrowIcon from "../../assets/svg/colored-arrow.svg";
import { FOOTER_LINKS } from "../../utils/constants";

export default function Footer() {
  const socialIcons = [facebookIcon, linkedinIcon, twitterIcon, youtubeIcon];

  return (
    <footer
      className="w-full border-t border-[rgba(4,140,128,0.5)]"
      id="support"
    >
      {/* Top Section */}
      <div className="container flex flex-col gap-16 py-16 sm:px-16 xl:flex-row xl:justify-between">
        {/* Left Side (Logo + Input) */}
        <div className="space-y-6">
          {/* Logo */}
          <div className="flex gap-2">
            <img src={logoIcon} alt="SmartNotes Logo" />
            <h1 className="text-2xl font-bold text-primary-100">SmartNotes</h1>
          </div>

          {/* Email Input */}
          <div className="flex w-[290px] items-center rounded-lg bg-accent p-2 shadow-md">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full rounded-lg bg-accent px-4 text-black placeholder-gray-700 focus:outline-none"
            />
            <img
              src={arrowIcon}
              alt="Submit"
              className="h-8 w-8 rounded-lg border border-secondary-200"
            />
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:gap-24">
          {FOOTER_LINKS.map(({ heading, subheadings }, index) => (
            <div key={index} className="space-y-[14px] text-accent">
              <p className="text-lg font-bold">{heading}</p>
              <div className="flex flex-col gap-1.5">
                {subheadings.map((item, subIndex) => (
                  <a
                    key={subIndex}
                    href={item}
                    className="text-small hover:text-secondary-200"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-secondary-200 py-4">
        <div className="container flex flex-col-reverse items-center gap-4 md:flex-row md:justify-between">
          {/* Copyright */}
          <p className="text-left text-sm">
            ©2024 SmartNotes. All Rights Reserved.{" "}
            <a
              href="https://x.com/iamhervewabo"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              @iamhervewabo
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialIcons.map((icon, index) => (
              <button
                key={index}
                className="hover:bg-secondary-400 flex h-8 w-8 items-center justify-center rounded-full bg-secondary-300 transition"
              >
                <img src={icon} alt="social icon" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
