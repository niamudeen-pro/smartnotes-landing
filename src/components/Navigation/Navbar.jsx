import React, { useState } from "react";
import logo from "../../assets/svg/logo.svg";
import arrow from "../../assets/svg/arrow.svg";
import hamburger from "../../assets/svg/hamburger-menu.svg";
import closeIcon from "../../assets/svg/close.svg";
import Button from "../Shared/Button/Button";
import { SOCIAL_LINKS } from "../../utils/constants";

const NAVIGATION_LINKS = [
  { label: "Features", url: "#features" },
  { label: "Pricing", url: "#pricing" },
  { label: "Support", url: "#support" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(4,140,129,0.3)] bg-primary-400">
      <div className="container z-50 px-5 py-6 text-primary-100 md:px-12 xl:px-24">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="SmartNotes Logo" />
            <h1 className="text-2xl font-bold">SmartNotes</h1>
          </div>

          {/* Navigation Links */}
          <ul
            className={`absolute left-0 top-16 w-full flex-col gap-6 space-y-4 bg-primary-400 px-7 py-12 shadow-md transition-all duration-300 md:static md:flex md:w-auto md:flex-row md:gap-10 md:space-y-0 md:py-0 ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            {NAVIGATION_LINKS.map(({ label, url }) => (
              <li key={label} onClick={() => setIsOpen(false)}>
                <a href={url} className="hover:text-secondary-200">
                  {label}
                </a>
              </li>
            ))}
            {/* Mobile Get Started Button */}
            <li className="flex gap-[18px] md:hidden">
              {SOCIAL_LINKS?.map((item, index) => (
                <button
                  key={index}
                  className="hover:bg-secondary-400 flex h-8 w-8 items-center justify-center rounded-full bg-secondary-300 transition"
                >
                  <img src={item?.icon} alt="social icon" />
                </button>
              ))}
            </li>
          </ul>

          {/* Desktop Get Started Button */}
          <div className="hidden md:block">
            <Button icon={arrow}>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={isOpen ? closeIcon : hamburger} alt="Menu Toggle" />
          </button>
        </nav>
      </div>
    </header>
  );
}
