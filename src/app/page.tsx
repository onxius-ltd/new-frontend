"use client";
import About from "@/components/About"; // 👈 import your component
import Services from "@/components/Services"; // 👈 import your component
import Fearutes from "@/components/Features";
import Faqs from "@/components/Faqs";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import OurStory from "@/components/Story";
import OurMission from "@/components/Mission";
import ChooseUs from "@/components/ChooseUs";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";



export default function Home() {
  return (
    <>
      <About />
      <OurStory />
      <OurMission />
      <ChooseUs />
      <Services />
      <Fearutes />
      <Faqs />
      {/* <Testimonial /> */}
    </>
  );
}
