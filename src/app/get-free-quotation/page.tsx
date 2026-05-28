import type { Metadata } from "next";
import Qutation from "@/components/Qutation";
import TrustPilotReviews from "@/components/TrustPilotReviews";

export const metadata: Metadata = {
  title: "Get a Free Website Quote",
  description:
    "Share your project details with Onxius and receive a transparent, no‑obligation quote for your website or software project.",
  openGraph: {
    title: "Get a Free Quote | Onxius",
    description:
      "Tell us about your goals, budget, and timeline. Onxius will respond with a tailored proposal for your next web or software project.",
    url: "https://www.onxius.com/get-free-quotation",
    siteName: "Onxius",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Free Website or App Quote | Onxius",
    description:
      "Quickly request pricing for a new website, redesign, or custom software build.",
  },
};

export default function CustomerEnquire() {
  return (
    <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 -mt-10">
      <Qutation />
      <TrustPilotReviews />
    </div>
  );
}
