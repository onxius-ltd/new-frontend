"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const logos = [
      "/assets/partner-logos/heavenly-meals.png",
      "/assets/partner-logos/fatima-quranic-academy.png",
      "/assets/partner-logos/myrasbeds.png",
      "/assets/partner-logos/mr-oil.png",
      "/assets/partner-logos/great-transfers-uk.png",
      "/assets/partner-logos/frenco-ltd.png",
      "/assets/partner-logos/auto-bids.png",
      "/assets/partner-logos/online-quran-home.png",
      "/assets/partner-logos/tei-logo.jpg",
      "/assets/partner-logos/nft-neighbors.png",
];

export default function ClientLogos() {
      const [duplicatedLogos, setDuplicatedLogos] = useState<string[]>([]);
      const containerRef = useRef<HTMLDivElement>(null);
      const [containerWidth, setContainerWidth] = useState(0);

      // Duplicate logos to create seamless infinite scroll
      useEffect(() => {
            setDuplicatedLogos([...logos, ...logos]);
      }, []);

      // Measure container width for responsive animation
      useEffect(() => {
            const updateWidth = () => {
                  if (containerRef.current) {
                        setContainerWidth(containerRef.current.scrollWidth / 2);
                  }
            };

            updateWidth();
            window.addEventListener('resize', updateWidth);
            return () => window.removeEventListener('resize', updateWidth);
      }, []);

      return (
            <section className="px-2 py-2 sm:py-4 md:py-6 lg:py-8 overflow-hidden -mt-10 " id="logos">
                  {/* title */}
                  {/* <h2 className="text-center text-2xl md:text-3xl font-semibold pb-10 text-gray-800">
                        Trusted by Industry Leaders
                  </h2> */}
                  <div className="st-container">
                        {/* Animated scrolling container */}
                        <div className="relative overflow-hidden">
                              <motion.div
                                    ref={containerRef}
                                    className="flex"
                                    animate={{
                                          x: [0, -containerWidth],
                                    }}
                                    transition={{
                                          x: {
                                                repeat: Infinity,
                                                repeatType: "loop",
                                                duration: 30,
                                                ease: "linear",
                                          },
                                    }}
                                    whileHover={{
                                          animationPlayState: "paused",
                                    }}
                              >
                                    {duplicatedLogos.map((image_src, index) => (
                                          <div
                                                key={index}
                                                className="flex-shrink-0 px-3 sm:px-4 md:px-6 w-40 sm:w-48 md:w-52 lg:w-56"
                                          >
                                                <div className="relative h-20 sm:h-24 md:h-28 lg:h-24 w-full">
                                                      <Image
                                                            src={image_src}
                                                            alt={`partner logo ${index % logos.length + 1}`}
                                                            fill
                                                            className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                                                            sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, 220px"
                                                      />
                                                </div>
                                          </div>
                                    ))}

                              </motion.div>

                              {/* Gradient overlays for smooth edges */}
                              <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />
                              <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />
                        </div>

                        {/* Optional: Static grid for mobile with animation only on desktop */}
                        {/* <div className="md:hidden mt-8">
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                                    {logos.map((image_src, index) => (
                                          <motion.div
                                                key={index}
                                                className="flex justify-center items-center h-16"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                whileHover={{ scale: 1.1 }}
                                          >
                                                <div className="relative w-full h-full">
                                                      <Image
                                                            src={image_src}
                                                            alt={`partner logo ${index + 1}`}
                                                            fill
                                                            className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                                                            sizes="(max-width: 640px) 120px, 160px"
                                                      />
                                                </div>
                                          </motion.div>
                                    ))}
                              </div>
                        </div> */}
                  </div>
            </section>
      );
}