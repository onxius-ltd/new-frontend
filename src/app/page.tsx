import type { Metadata } from "next";
import Services from "@/components/Services"; // 👈 import your component
import Fearutes from "@/components/Features";
import Faqs from "@/components/Faqs";
import ChooseUs from "@/components/ChooseUs";
import Portfolio from "@/components/Portfolio";
import ClientLogos from "@/components/ClientLogos";
import WeHelpsToGrow from "@/components/WeHelpsToGrow";
import TrustPilotReviews from "@/components/TrustPilotReviews";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Onxius | Web Development, Software Development & IT Solutions",
  description:
    "Onxius builds high-converting websites, custom software, and scalable cloud solutions for startups and growing businesses in the UK and worldwide.",
  keywords: [
    "web development agency",
    "website design London",
    "custom software development",
    "IT solutions company",
    "Onxius",
    "E-commerce Development",
    "IT solutions",
    "Progressive Web Apps Development",
    "Mobile Apps Development",
    "Wordpress Development",
    "WooCommerce Development",
    "SEO & Digital Marketing",
    "Social Media Ads Marketing",
    "UI/UX Design",
    "Desktop App Development",
    "Support and App Development",
    "Custom Software Development"
  ],
  openGraph: {
    title: "Onxius | Web Development, Software Development & IT Solutions",
    description:
      "From modern business websites to custom software and cloud infrastructure, Onxius helps companies launch, scale, and grow online.",
    url: "https://www.onxius.com/",
    siteName: "Onxius",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Onxius | Web Development, Software Development & IT Solutions",
    description:
      "Onxius delivers reliable web, software, and cloud solutions to help businesses grow faster.",
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/assets/images/tech-light-bg.webp" />
      </Head>
      {/* Content */}
      <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
        <div className="mb-2 mt-2">
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
        <TrustPilotReviews />
        {/* <Testimonial /> */}
      </div>
    </>
  );
}
