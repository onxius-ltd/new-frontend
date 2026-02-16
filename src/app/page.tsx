"use client";
import Services from "@/components/Services"; // 👈 import your component
import Fearutes from "@/components/Features";
import Faqs from "@/components/Faqs";
import ChooseUs from "@/components/ChooseUs";
import Portfolio from "@/components/Portfolio";
import ClientLogos from "@/components/ClientLogos";


export default function Home() {
  return (
    <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
      <ClientLogos />
      <Portfolio />
      <Services />
      <ChooseUs />
      <Fearutes />
      <Faqs />
      {/* <Testimonial /> */}
    </div>
  );
}
