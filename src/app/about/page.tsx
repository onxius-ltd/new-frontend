"use client";
import AboutSec from "@/components/AboutSec";
import Faqs from "@/components/Faqs";
import Fearutes from "@/components/Features";
import WeHelpsToGrow from "@/components/WeHelpsToGrow";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
      <AboutSec />
      <div className="mb-4">
        <WeHelpsToGrow />
      </div>
      <Fearutes />
      <Faqs />
    </div>
  );
}
