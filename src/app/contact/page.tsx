import type { Metadata } from "next";
import ContactUs from "@/components/ContactUs";
import TrustPilotReviews from "@/components/TrustPilotReviews";

export const metadata: Metadata = {
  title: "Contact Onxius",
  description:
    "Contact Onxius to discuss a new website, software project, or ongoing support. Book a call or send us your requirements.",
  openGraph: {
    title: "Contact Onxius | Talk to Our Team",
    description:
      "Ready to start a project or have questions? Reach out to the Onxius team for a free, no‑obligation consultation.",
    url: "https://www.onxius.com/contact",
    siteName: "Onxius",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Onxius | Web & Software Experts",
    description:
      "Let’s talk about your website, product, or digital roadmap.",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 -mt-10">
      <ContactUs />
      <TrustPilotReviews />
    </div>
  );
}
