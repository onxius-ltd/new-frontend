"use client";

import PorfolioCard, { ItemProps } from "./PorfolioCard";
import Globe from "@/icons/Globe";
import AppStore from "@/icons/AppStore";
import Car from "@/icons/Car";
import Consultancy from "@/icons/Consultancy";
import Microchrip from "@/icons/Microchrip";

// ─────────────────────────────────────────────────────────────────────────────
// WHY A FUNCTION INSTEAD OF A MODULE-LEVEL CONST:
//
// portfolioData was previously defined as a module-level constant with JSX
// values (e.g. <Car />, <Globe />) inside the `tags` array. Module-level JSX
// is evaluated once at import time on the server, then React creates fresh
// element objects on the client — the two object references differ, which
// React flags as a hydration mismatch, causing the page to blink/repaint.
//
// Wrapping in a function means JSX is created during the component render
// pass, which happens identically on both server and client.
// ─────────────────────────────────────────────────────────────────────────────
function getPortfolioData(): ItemProps[] {
  return [
    {
      id: 1,
      title: "Auto-Bids",
      industry: "Automotive SaaS Platform",
      role: "Full-Stack Developer",
      engagement: "Delivered during tenure at previous organization",
      description:
        "Scalable vehicle auction and bidding platform engineered with secure transaction handling, real-time bidding logic, and role-based dashboards for buyers and administrators.",
      image: "/assets/img/auto-bids.png",
      tags: [
        { icon: <Car />, label: "Auction Platform" },
        { label: "Automotive" },
        { label: "React & Laravel" },
      ],
      link: "https://auto-bids.com/",
      attributes: [
        { counting: "5,000+", label: "Vehicles Listed" },
        { counting: "+58%", label: "Bidding Activity Growth" },
      ],
    },
    {
      id: 2,
      title: "Fatima Quranic Academy",
      industry: "Online Quran Education Platform",
      role: "Full-Stack Wordpress Developer",
      engagement: "Developed and Managed Under Current Organization",
      description:
        "A trusted online Quran academy connecting students worldwide with qualified tutors for Tajweed, Tafseer, and Hifz, built for performance and seamless inquiries.",
      image: "/assets/images/fatimaquranicacademy.png",
      tags: [
        { icon: <Globe />, label: "Online Quran Academy" },
        { label: "Performance Optimized" },
      ],
      link: "https://fatimaquranicacademy.com/",
      attributes: [
        { counting: "+60%", label: "Growth in Student Inquiries" },
        { counting: "Worldwide", label: "Student Reach" },
      ],
    },
    {
      id: 3,
      title: "Heavenly Meats LLC",
      industry: "E-commerce / Retail",
      role: "Full-Stack Developer",
      engagement: "Developed and Managed Under Current Organization",
      description:
        "High-performance e-commerce platform developed for a premium meat brand, focused on conversion optimization and seamless ordering experience across devices.",
      image: "/assets/img/heavenlymeatsllc.png",
      tags: [
        { icon: <Globe />, label: "E-commerce Website" },
        { label: "Online Store" },
        { label: "Conversion Optimization" },
      ],
      link: "https://heavenlymeatsllc.com/",
      attributes: [
        { counting: "+42%", label: "Increase in Online Orders" },
        { counting: "2.5s", label: "Average Load Time" },
      ],
    },
    {
      id: 4,
      title: "MYRAS BEDS",
      industry: "Furniture & Bedding E-Commerce",
      role: "Full-Stack WordPress Developer",
      engagement: "Delivered during tenure at previous organization",
      description:
        "A modern e-commerce bedding platform showcasing premium beds and mattresses, designed for seamless shopping, high performance, and an enhanced customer experience.",
      image: "/assets/images/myrasbeds.png",
      tags: [
        { icon: <Globe />, label: "E-Commerce Website" },
        { label: "Furniture & Bedding" },
        { label: "Performance Optimized" },
      ],
      link: "https://www.myrasbeds.co.uk/",
      attributes: [
        { counting: "UK", label: "Market Reach" },
        { counting: "Online", label: "Retail Platform" },
      ],
    },
    {
      id: 5,
      title: "MR Oil",
      industry: "Oil & Petroleum Services",
      role: "Full-Stack WordPress Developer",
      engagement: "Developed and Managed Under Current Organization",
      description:
        "A professional oil and petroleum services platform showcasing products, bulk supply solutions, and streamlined customer inquiries with a performance-focused design.",
      image: "/assets/images/mr-oil.png",
      tags: [
        { icon: <Globe />, label: "Corporate Website" },
        { label: "Energy & Petroleum" },
        { label: "Performance Optimized" },
      ],
      link: "",
      attributes: [
        { counting: "B2B", label: "Client Focused" },
        { counting: "Industrial", label: "Market Reach" },
      ],
    },
    {
      id: 6,
      title: "Great Transfers UK",
      industry: "Transportation & Airport Transfer Services",
      role: "Full-Stack Developer",
      engagement: "Developed and Managed Under Current Organization",
      description:
        "A professional airport transfer and private transportation platform designed for seamless bookings, service reliability, and optimized performance to drive customer inquiries.",
      image: "/assets/images/greattransfers.png",
      tags: [
        { icon: <Globe />, label: "Booking Website" },
        { label: "Transportation Services" },
        { label: "Performance Optimized" },
      ],
      link: "https://greattransfers.uk/",
      attributes: [
        { counting: "+60%", label: "Increase in Bookings" },
        { counting: "UK Wide", label: "Service Coverage" },
      ],
    },
    {
      id: 7,
      title: "Frenco LTD",
      industry: "Corporate Services Platform",
      role: "Full-Stack Developer",
      engagement: "Delivered during tenure at previous organization",
      description:
        "A professional corporate website developed to showcase services, strengthen brand credibility, and generate qualified leads through a performance-driven design.",
      image: "/assets/images/frencoltd.png",
      tags: [
        { icon: <Globe />, label: "Corporate Website" },
        { label: "Lead Generation" },
        { label: "Performance Optimized" },
      ],
      link: "https://frencoltd.com/",
      attributes: [
        { counting: "+60%", label: "Increase in Inquiries" },
        { counting: "International", label: "Client Reach" },
      ],
    },
    {
      id: 8,
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
        { label: "Performance Optimized" },
      ],
      link: "https://onlinequranhome.com/",
      attributes: [
        { counting: "+60%", label: "Increase in Inquiries" },
        { counting: "Global", label: "Student Reach" },
      ],
    },
    {
      id: 9,
      title: "LA121 Consultants",
      industry: "Business Consultancy",
      role: "Full-Stack Developer",
      engagement: "Developed and Delivered Under Current Organization",
      description:
        "Modern consultancy website designed to strengthen brand authority and generate qualified business leads through structured service presentation and optimized UI.",
      image: "/assets/img/la121consultants.png",
      tags: [
        { icon: <Consultancy />, label: "Corporate Website" },
        { label: "Lead Generation" },
        { label: "Business Branding" },
      ],
      link: "https://la121consultants.netlify.app/",
      attributes: [
        { counting: "+58%", label: "Increase in Client Inquiries" },
        { counting: "99.9%", label: "System Uptime" },
      ],
    },
    {
      id: 10,
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
        { label: "Web3 Integration" },
      ],
      link: "https://nftneighbors.com/",
      attributes: [
        { counting: "500+", label: "NFTs Minted" },
        { counting: "+65%", label: "Community Growth" },
      ],
    },
    {
      id: 11,
      title: "TEI Enterprises App",
      industry: "Business Management / Mobile Application",
      role: "Lead Mobile Developer",
      engagement: "Developed and Managed Under Current Organization",
      description:
        "Cross-platform business management application built to streamline internal operations, improve client coordination, and enhance overall engagement.",
      image: "/assets/img/tei-enterprises.png",
      tags: [
        { icon: <AppStore />, label: "Mobile App" },
        { label: "Android & iOS" },
        { label: "React Native" },
      ],
      link: "https://play.google.com/store/apps/details?id=app.tei.enterprises&hl=en",
      attributes: [
        { counting: "10K+", label: "Active Users" },
        { counting: "+35%", label: "Engagement Growth" },
      ],
    },
  ];
}

export default function Portfolio({
  isPortfolioPage = false,
}: {
  isPortfolioPage?: boolean;
}) {
  // Call at render time — NOT at module level — so JSX elements are created
  // in the same pass on both server and client, preventing hydration mismatch.
  const allData = getPortfolioData();
  const displayedData = isPortfolioPage ? allData : allData.slice(0, 6);

  return (
    // suppressHydrationWarning is a safety net for any minor attribute
    // differences (e.g. class names from third-party libs like WOW.js)
    // that don't affect rendering correctness.
    <section
      id="portfolio"
      className="relative px-2 py-12 md:py-16 bg-transparent backdrop-blur-md"
      suppressHydrationWarning
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-3 drop-shadow-sm text-capitalize text-primary">
            Selected Projects & Case Studies
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-xl">
            A selection of web, Software as a Service, and mobile solutions
            built to improve performance, automate workflows, and drive
            measurable business growth.
          </p>
        </div>

        {/* Portfolio Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedData.map((item) => (
            <PorfolioCard data={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
