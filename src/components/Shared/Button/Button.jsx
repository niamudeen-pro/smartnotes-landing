import React from "react";

export default function Button({ children, type = "button", icon }) {
  return (
    <button
      type={type}
      className="flex h-[57px] w-[167px] items-center justify-center gap-2 rounded-lg bg-gradient text-primary-400"
    >
      {children}
      {icon && <img src={icon} alt="icon" />}
    </button>
  );
}
