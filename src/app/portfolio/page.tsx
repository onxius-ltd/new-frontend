import type { Metadata } from "next";
import ClientLogos from '@/components/ClientLogos';
import Faqs from '@/components/Faqs';
import ParticleAnimation from '@/components/ParticleAnimation';
import Portfolio from '@/components/Portfolio';
import TrustPilotReviews from "@/components/TrustPilotReviews";

export const metadata: Metadata = {
  title: "Website & Project Portfolio",
  description:
    "See recent websites, platforms, and digital products designed and built by Onxius for clients across different industries.",
  openGraph: {
    title: "Portfolio | Recent Web & Software Projects",
    description:
      "Browse selected client work from Onxius, including marketing sites, booking platforms, and business tools.",
    url: "https://www.onxius.com/portfolio",
    siteName: "Onxius",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Onxius Portfolio | Web & Software Projects",
    description:
      "Real examples of websites and products shipped by Onxius for growing brands.",
  },
};

export default function PortfolioPage() {
  return (
    <div style={{ position: 'relative', zIndex: 2 }}>
      {/* Particle Background - Fixed */}
      <ParticleAnimation
        particleCount={100}
        connectionDistance={200}
        speed={0.8}
        background="white"
      />

      {/* Content on top of particles */}
      <div className='z-2 relative'>
        <Portfolio isPortfolioPage={true} />
        <Faqs isPortfolioPage={true} />
        <TrustPilotReviews />
      </div>
    </div>
  );
}
