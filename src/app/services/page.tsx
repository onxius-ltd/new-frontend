"use client";
import Faqs from "@/components/Faqs";
import Services from "@/components/Services"; // 👈 import your component

export default function ServicePage() {
  return (
    <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
      <Services />
      <br />
      <Faqs />
    </div>
  );
}
