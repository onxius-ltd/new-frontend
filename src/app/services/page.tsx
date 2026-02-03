"use client";
import Faqs from "@/components/Faqs";
import Services from "@/components/Services"; // 👈 import your component

export default function ServicePage() {
  return (
    <div>
      <Services />
      <Faqs />
    </div>
  );
}
