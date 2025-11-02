"use client";
import AboutSec from "@/components/AboutSec";
import Faqs from "@/components/Faqs";
import OurMission from "@/components/Mission";
import OurStory from "@/components/Story";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function AboutPage() {
  return (
    <div>
      <AboutSec />
      <OurStory />
      <OurMission />
      <Faqs />
    </div>
  );
}
