"use client";
import AboutSec from "@/components/AboutSec";
import Faqs from "@/components/Faqs";
import OurMission from "@/components/Mission";
import OurStory from "@/components/Story";

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
