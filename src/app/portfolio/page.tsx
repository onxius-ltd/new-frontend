"use client";
import ClientLogos from "@/components/ClientLogos";
import Faqs from "@/components/Faqs";
import Portfolio from "@/components/Portfolio";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
      <ClientLogos />
      <Portfolio isPortfolioPage={true} />
      <Faqs />
    </div>
  );
}
