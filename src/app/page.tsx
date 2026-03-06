"use client";
import Services from "@/components/Services"; // 👈 import your component
import Fearutes from "@/components/Features";
import Faqs from "@/components/Faqs";
import ChooseUs from "@/components/ChooseUs";
import Portfolio from "@/components/Portfolio";
import ClientLogos from "@/components/ClientLogos";
import WeHelpsToGrow from "@/components/WeHelpsToGrow";


export default function Home() {
  return (
    <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
      <div className="mb-2">
        <ClientLogos />
      </div>
      <Portfolio />
      <div className="mb-2 mt-4">
        <Services />
      </div>
      <div className="mb-2 mt-4">
        <WeHelpsToGrow />
      </div>
      <ChooseUs />
      <Fearutes />
      <Faqs />
      {/* <Testimonial /> */}
    </div>
  );
}
