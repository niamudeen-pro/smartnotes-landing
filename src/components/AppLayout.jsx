import Navbar from "./Navigation/Navbar";
import Hero from "./Hero/Hero";
import AnimatedLogos from "./Logos/AnimatedLogos";
import Features from "./Features/Features";
import Footer from "./Footer/Footer";
import Faq from "./FAQ/Faq";
import Plans from "./Plans/Plans";
import Video from "./Video/Video";
import Testimonial from "./Testimonial/Testimonial";
import CTA from "./CTA/CTA";
import useSmoothScroll from "../hooks/useSmoothScroll";

export default function AppLayout() {
  useSmoothScroll();
  return (
    <div className="page">
      <Navbar />
      <main>
        <Hero />
        <div className="py-10">
          <AnimatedLogos />
        </div>
        <Testimonial />
        <Features />
        <Testimonial />
        <Video />
        <Testimonial />
        <Plans />
        <Testimonial />
        <Faq />
        <Testimonial />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
