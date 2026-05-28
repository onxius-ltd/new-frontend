import type { Metadata } from "next";
import Faqs from "@/components/Faqs";
import Services from "@/components/Services"; // 👈 import your component
import TrustPilotReviews from "@/components/TrustPilotReviews";
import WeHelpsToGrow from "@/components/WeHelpsToGrow";

export const metadata: Metadata = {
  title: "Web Development & Digital Services",
  description:
    "Explore Onxius services including custom web development, UI/UX design, e‑commerce, SEO-friendly websites, and ongoing support.",
  openGraph: {
    title: "Services | Web Development, UI/UX & Digital Solutions",
    description:
      "Full-service web and software development — from discovery and design to launch and long-term maintenance.",
    url: "https://www.onxius.com/services",
    siteName: "Onxius",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Onxius Services | Web Development & Digital Solutions",
    description:
      "See how Onxius helps businesses with websites, apps, and digital products that convert.",
  },
};

export default function ServicePage() {
  return (
    <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 -mt-10">
      <Services />
      <div className="mb-2 mt-4">
        <WeHelpsToGrow />
      </div>
      <Faqs />
      <TrustPilotReviews />
    </div>
  );
}
