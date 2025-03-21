import React from "react";
import Navbar from "./Navigation/Navbar";
import Hero from "./Hero/Hero";
import AnimatedLogos from "./Logos/AnimatedLogos";
import Features from "./features/Features";
import Footer from "./footer/Footer";
import Faq from "./FAQ/Faq";
import Plans from "./Plans/Plans";
import Video from "./Video/Video";
import Testimonial from "./Testimonial/Testimonial";
import CTA from "./CTA/CTA";

export default function AppLayout() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <Hero />
        <div className="py-10">
          <AnimatedLogos />
        </div>
        <Testimonial />
        <section>
          <Features />
        </section>
        <Testimonial />
        <section>
          <Video />
        </section>
        <Testimonial />
        <section>
          <Plans />
        </section>
        <Testimonial />
        <section>
          <Faq />
        </section>
        <Testimonial />
        <CTA />
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}
