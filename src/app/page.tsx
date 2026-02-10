"use client";
import Services from "@/components/Services"; // 👈 import your component
import Fearutes from "@/components/Features";
import Faqs from "@/components/Faqs";
// import Testimonial from "@/components/Testimonial";
// import Testimonial from "@/components/ContactUs";
import OurStory from "@/components/Story";
import OurMission from "@/components/Mission";
import ChooseUs from "@/components/ChooseUs";
import AboutSec from "@/components/AboutSec";
import Portfolio from "@/components/Portfolio";
import ClientLogos from "@/components/ClientLogos";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";


export default function Home() {
  return (
    <div>
      <ClientLogos />
      <Portfolio />
      <Services />
      {/* <AboutSec /> */}
      {/* <OurStory /> */}
      {/* <OurMission /> */}
      {/* <ChooseUs /> */}
      {/* <Fearutes /> */}
      <Faqs />
      {/* <Testimonial /> */}
    </div>
  );
}
