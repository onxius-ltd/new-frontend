'use client';

import ClientLogos from '@/components/ClientLogos';
import Faqs from '@/components/Faqs';
import ParticleAnimation from '@/components/ParticleAnimation';
import Portfolio from '@/components/Portfolio';

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
      </div>
    </div>
  );
}
