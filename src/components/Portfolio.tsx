"use client";
import PorfolioCard, { ItemProps } from "./PorfolioCard";
import Globe from "@/icons/Globe";
import AppStore from "@/icons/AppStore";
import Car from "@/icons/Car";
import Consultancy from "@/icons/Consultancy";
import Microchrip from "@/icons/Microchrip";

export const portfolioData: ItemProps[] = [
      {
            id: 1,
            title: "Auto-Bids",
            industry: "Automotive SaaS Platform",
            role: "Full-Stack Developer",
            engagement: "Delivered under current organization",
            description:
                  "Scalable vehicle auction and bidding platform engineered with secure transaction handling, real-time bidding logic, and role-based dashboards for buyers and administrators.",
            image: "/assets/img/auto-bids.png",
            tags: [
                  { icon: <Car />, label: "Auction Platform" },
                  { label: "Automotive" },
                  { label: "React & Laravel" }
            ],
            link: "https://auto-bids.com/",
            attributes: [
                  { counting: "5,000+", label: "Vehicles Listed" },
                  { counting: "+58%", label: "Bidding Activity Growth" }
            ]
      },
      {
            id: 3,
            title: "Heavenly Meats LLC",
            industry: "E-commerce / Retail",
            role: "Full-Stack Developer",
            engagement: "Delivered during tenure at previous organization",
            description:
                  "High-performance e-commerce platform developed for a premium meat brand, focused on conversion optimization and seamless ordering experience across devices.",
            image: "/assets/img/heavenlymeatsllc.png",
            tags: [
                  { icon: <Globe />, label: "E-commerce Website" },
                  { label: "Online Store" },
                  { label: "Conversion Optimization" }
            ],
            link: "https://heavenlymeatsllc.com/",
            attributes: [
                  { counting: "+42%", label: "Increase in Online Orders" },
                  { counting: "2.5s", label: "Average Load Time" }
            ]
      },
      {
            id: 4,
            title: "Online Quran Home",
            industry: "Educational Services Platform",
            role: "Full-Stack Developer",
            engagement: "Delivered under current organization",
            description:
                  "Lead-generation focused educational platform built to connect students with qualified Quran tutors worldwide. Designed for performance, trust-building, and seamless inquiry management.",
            image: "/assets/img/onlinequranhome.png",
            tags: [
                  { icon: <Globe />, label: "Service Website" },
                  { label: "Lead Generation" },
                  { label: "Performance Optimized" }
            ],
            link: "https://onlinequranhome.com/",
            attributes: [
                  { counting: "+60%", label: "Increase in Inquiries" },
                  { counting: "Global", label: "Student Reach" }
            ]
      },
      {
            id: 5,
            title: "LA121 Consultants",
            industry: "Business Consultancy",
            role: "Full-Stack Developer",
            engagement: "Delivered during tenure at previous organization",
            description:
                  "Modern consultancy website designed to strengthen brand authority and generate qualified business leads through structured service presentation and optimized UI.",
            image: "/assets/img/la121consultants.png",
            tags: [
                  { icon: <Consultancy />, label: "Corporate Website" },
                  { label: "Lead Generation" },
                  { label: "Business Branding" }
            ],
            link: "https://la121consultants.netlify.app/",
            attributes: [
                  { counting: "+58%", label: "Increase in Client Inquiries" },
                  { counting: "99.9%", label: "System Uptime" }
            ]
      },
      {
            id: 6,
            title: "NFT Neighbors",
            industry: "Blockchain / Web3 Platform",
            role: "Full-Stack Developer & Web3 Integration Developer",
            engagement: "Concept & Development Project",
            description:
                  "Web3-enabled NFT community platform integrating wallet connectivity, smart contract interaction, and scalable frontend architecture.",
            image: "/assets/img/nftneighbors.png",
            tags: [
                  { icon: <Microchrip />, label: "Blockchain" },
                  { label: "NFT Platform" },
                  { label: "Web3 Integration" }
            ],
            link: "https://nftneighbors.com/",
            attributes: [
                  { counting: "500+", label: "NFTs Minted" },
                  { counting: "+65%", label: "Community Growth" }
            ]
      },
      {
            id: 2,
            title: "TEI Enterprises App",
            industry: "Business Management / Mobile Application",
            role: "Lead Mobile Developer",
            engagement: "Delivered during tenure at previous organization",
            description:
                  "Cross-platform business management application built to streamline internal operations, improve client coordination, and enhance overall engagement.",
            image: "/assets/img/tei-enterprises.png",
            tags: [
                  { icon: <AppStore />, label: "Mobile App" },
                  { label: "Android & iOS" },
                  { label: "React Native" }
            ],
            link: "https://play.google.com/store/apps/details?id=app.tei.enterprises&hl=en",
            attributes: [
                  { counting: "10K+", label: "Active Users" },
                  { counting: "+35%", label: "Engagement Growth" }
            ]
      },
];

export default function Portfolio() {
      return (
            <section
                  id="portfolio"
                  className="relative px-2 py-12 md:py-16 bg-transparent backdrop-blur-md"
            >
                  <div className="container mx-auto px-6">
                        {/* Header */}
                        <div className="text-center mb-16 wow fadeInUp" data-wow-delay="0.1s">
                              <h2 className="mb-3 drop-shadow-sm text-capitalize text-primary ">
                                    Selected Projects & Case Studies
                              </h2>
                              <p className="text-gray-700 max-w-3xl mx-auto text-xl">
                                    A selection of web, SaaS, and mobile solutions built to improve performance,
                                    automate workflows, and drive measurable business growth.
                              </p>
                        </div>

                        {/* Portfolio Cards */}
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                              {portfolioData?.length > 0 && portfolioData.map((item, index) => (
                                    <PorfolioCard data={item} key={index} />
                              ))}
                        </div>
                  </div>
            </section>
      );
}