import type { Metadata } from "next";
import AboutSec from "@/components/AboutSec";
import Faqs from "@/components/Faqs";
import Fearutes from "@/components/Features";
import TrustPilotReviews from "@/components/TrustPilotReviews";
import WeHelpsToGrow from "@/components/WeHelpsToGrow";

export const metadata: Metadata = {
  title: "About Onxius",
  description:
    "Learn about Onxius — a UK-based digital agency helping businesses with modern websites, custom software, and long-term technology partnerships.",
  openGraph: {
    title: "About Onxius | Web & Software Partner",
    description:
      "Onxius blends design, engineering, and strategy to deliver long-term web and software solutions for ambitious companies.",
    url: "https://www.onxius.com/about",
    siteName: "Onxius",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Onxius | Web & Software Partner",
    description:
      "Discover the team and values behind Onxius, your technology partner for growth.",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 -mt-20">
      <AboutSec />
      <div className="mb-4">
        <WeHelpsToGrow />
      </div>
      <Fearutes />
      <Faqs />
      <TrustPilotReviews />
    </div>
  );
}
