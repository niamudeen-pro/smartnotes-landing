import React from "react";
import DoubleQuote from "../../assets/images/double-quote.png";

export default function Testimonial() {
  return (
    <section className="py-16">
      <div className="relative mx-auto w-full max-w-md text-center text-primary-100">
        <blockquote className="mb-8 text-2xl font-bold">
          <p className="w-full max-w-2xl text-xl sm:text-2xl">
            The real-time synchronization and AI- powered organization have made
            our workflow more efficient than ever.
          </p>
        </blockquote>
        <figure>
          <figcaption className="flex_center gap-2">
            <p>Sarah Johnson</p>
            <p className="opacity-70">TechSavvy Solutions</p>
          </figcaption>
        </figure>
        <img
          src={DoubleQuote}
          alt="Double Quote Icon"
          className="absolute -top-6 left-1 flex sm:-left-4"
        />
      </div>
    </section>
  );
}
