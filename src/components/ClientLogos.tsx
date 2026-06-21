"use client";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const logos = [
      "/assets/partner-logos/heavenly-meals.webp",
      "/assets/partner-logos/fatima-quranic-academy.webp",
      "/assets/partner-logos/mr-oil.webp",
      "/assets/partner-logos/great-transfers-uk.webp",
      "/assets/partner-logos/online-quran-home.webp",
      "/assets/partner-logos/tei-logo.webp",
];

// Duplicated once, up front — no need for state/effect since this never changes.
const duplicatedLogos = [...logos, ...logos];

const ANIMATION_DURATION = 30; // seconds for one full loop

export default function ClientLogos() {
      const containerRef = useRef<HTMLDivElement>(null);
      const [containerWidth, setContainerWidth] = useState(0);
      const controls = useAnimation();

      // Measure the width of a single set of logos (half of the duplicated track).
      useEffect(() => {
            const updateWidth = () => {
                  if (containerRef.current) {
                        setContainerWidth(containerRef.current.scrollWidth / 2);
                  }
            };

            updateWidth();

            const resizeObserver = new ResizeObserver(updateWidth);
            if (containerRef.current) resizeObserver.observe(containerRef.current);

            window.addEventListener("resize", updateWidth);
            return () => {
                  window.removeEventListener("resize", updateWidth);
                  resizeObserver.disconnect();
            };
      }, []);

      // Start the scrolling animation once we know how far it needs to travel.
      // Re-running this whenever containerWidth changes keeps the loop in sync
      // after a resize (e.g. rotating a phone, resizing a browser window).
      useEffect(() => {
            if (containerWidth > 0) {
                  controls.start({
                        x: [0, -containerWidth],
                        transition: {
                              x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: ANIMATION_DURATION,
                                    ease: "linear",
                              },
                        },
                  });
            }
      }, [containerWidth, controls]);

      return (
            <section
                  className="px-2 py-2 sm:py-4 md:py-6 lg:py-8 overflow-hidden -mt-10"
                  id="logos"
            >
                  <div className="st-container">
                        <div className="relative overflow-hidden">
                              <motion.div
                                    ref={containerRef}
                                    className="flex"
                                    animate={controls}
                                    // Genuinely pause/resume the animation on hover (the old
                                    // `animationPlayState` trick doesn't do anything for a
                                    // JS-driven Framer Motion transform — this does).
                                    onHoverStart={() => controls.stop()}
                                    onHoverEnd={() =>
                                          controls.start({
                                                x: [0, -containerWidth],
                                                transition: {
                                                      x: {
                                                            repeat: Infinity,
                                                            repeatType: "loop",
                                                            duration: ANIMATION_DURATION,
                                                            ease: "linear",
                                                      },
                                                },
                                          })
                                    }
                              >
                                    {duplicatedLogos.map((image_src, index) => (
                                          <div
                                                key={index}
                                                className="flex-shrink-0 px-3 sm:px-4 md:px-6 w-40 sm:w-48 md:w-52 lg:w-56"
                                          >
                                                <div className="relative h-20 sm:h-24 md:h-28 lg:h-24 w-full">
                                                      <Image
                                                            src={image_src}
                                                            alt={`partner logo ${(index % logos.length) + 1}`}
                                                            fill
                                                            className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                                                            sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, 220px"
                                                            quality={75}
                                                            // Let Next.js decide loading strategy itself: `priority`
                                                            // already forces eager-loading + a correctly-matched
                                                            // <link rel="preload"> for the first visible logos.
                                                            // Combining it with an explicit `loading="eager"` is
                                                            // redundant and triggers a Next.js console warning.
                                                            // Everything else lazy-loads, which is the real
                                                            // "optimized" behavior for a 2x-duplicated, mostly
                                                            // off-screen marquee.
                                                            priority={index < 4}
                                                      />
                                                </div>
                                          </div>
                                    ))}
                              </motion.div>

                              {/* Gradient overlays for smooth edges */}
                              <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />
                              <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />
                        </div>
                  </div>
            </section>
      );
}