"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const portfolioData = [
      {
            id: 1,
            title: "TEI Enterprises App",
            description:
                  "A modern business management app designed for streamlined operations and client engagement, available on Google Play Store.",
            image: "/assets/img/tei-enterprises.png",
            tags: ["Android App", "React Native", "Business", "Play Store", "Apple Store"],
            link: "https://play.google.com/store/apps/details?id=app.tei.enterprises&hl=en",
      },
      {
            id: 2,
            title: "Heavenly Meats LLC",
            description:
                  "A deliciously crafted online presence for a premium meat and BBQ business, featuring mouth-watering visuals and responsive design.",
            image: "/assets/img/heavenlymeatsllc.png",
            tags: ["Wordpress", "Elementor", "Business"],
            link: "https://heavenlymeatsllc.com/",
      },
      {
            id: 3,
            title: "Auto-Bids",
            description:
                  "A smart vehicle bidding and auction platform designed for seamless user experience and secure transactions.",
            image: "/assets/img/auto-bids.png",
            tags: ["React", "Laravel", "SQL"],
            link: "https://auto-bids.com/",
      },
      {
            id: 4,
            title: "LA121 Consultants",
            description:
                  "A sleek, professional consultancy website showcasing services and expertise with a modern, minimal UI.",
            image: "/assets/img/la121consultants.png",
            tags: ["Vite.js", "Tailwind", "Netlify", "Firebase"],
            link: "https://la121consultants.netlify.app/",
      },
      {
            id: 5,
            title: "NFT Neighbors",
            description:
                  "An engaging NFT community website featuring digital assets, Web3 integration, and immersive visuals.",
            image: "/assets/img/nftneighbors.png",
            tags: ["React", "Web3", "Blockchain", "Node.js", "Mongodb", "Progressive Web App (pwa)"],
            link: "https://nftneighbors.com/",
      },
];


export default function Portfolio() {
      return (
            <section
                  id="portfolio"
                  className="relative py-2 pb-5 bg-transparent backdrop-blur-md"
            >
                  <div className="container mx-auto px-6">
                        {/* Header */}
                        <div className="text-center mb-16">
                              <h2 className="text-5xl font-bold mb-3 drop-shadow-sm">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 uppercase">
                                          OUR  Portfolio
                                    </span>
                              </h2>
                              <p className="text-gray-700 max-w-lg mx-auto">
                                    Built for What’s Next ✨
                              </p>
                        </div>

                        {/* Portfolio Cards */}
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                              {portfolioData?.length > 0 && portfolioData.map((item, index) => (
                                    <motion.div
                                          key={item.id}
                                          initial={{ opacity: 0, y: 40 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          whileHover={{ scale: 1.04, rotateX: 4, rotateY: -3 }}
                                          transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                          viewport={{ once: true }}
                                          className="relative rounded-md bg-white/10 dark:bg-white/5 border border-white/20 backdrop-blur-2xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] transition-all duration-500 overflow-hidden group"
                                    >
                                          {/* 3D Glow Border */}
                                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 blur-[30px]"></div>

                                          {/* Content */}
                                          <div className="relative z-10">
                                                <div className="relative w-full h-56">
                                                      <Image
                                                            src={item.image}
                                                            alt={item.title}
                                                            fill
                                                            className="object-fill rounded-t-md"
                                                      />
                                                </div>

                                                <div className="p-6">
                                                      <h3 className="text-xl font-semibold text-[var(--dark-blue-clr)] mb-2 text-shadow ">
                                                            {item.title}
                                                      </h3>
                                                      <p className="text-gray-500 text-sm mb-4">
                                                            {item.description}
                                                      </p>

                                                      <div className="flex flex-wrap gap-2 mb-4">
                                                            {item.tags.map((tag) => (
                                                                  <span
                                                                        key={tag}
                                                                        className="text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white"
                                                                  >
                                                                        {tag}
                                                                  </span>
                                                            ))}
                                                      </div>

                                                      <a
                                                            href={item.link}
                                                            target="_blank"
                                                            className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500 transition-opacity text-black "
                                                      >
                                                            View Project →
                                                      </a>
                                                </div>
                                          </div>
                                    </motion.div>
                              ))}
                        </div>
                  </div>
            </section>
      );
}
