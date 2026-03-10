"use client";

import PorfolioCard, { ItemProps } from "./PorfolioCard";
import Globe from "@/icons/Globe";
import AppStore from "@/icons/AppStore";
import Car from "@/icons/Car";
import Consultancy from "@/icons/Consultancy";
import Microchrip from "@/icons/Microchrip";
import Link from "next/link";

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
      "id": 6,
      "title": "Great Transfers UK",
      "industry": "TAXI, TRANSFERS & TRANSPORT SERVICES",
      "role": "",
      "engagement": "More bookings. Less hassle. Your transport business — online.",
      "description": "A professional booking website where customers enter their journey details and confirm a transfer in minutes — day or night, no phone call needed. Since launching, bookings have risen by 57% and the business now serves customers UK wide.",
      "list": [
        "✓ Customers book at any hour — even while you are out driving.",
        "✓ Instant confirmations reduce no-shows and build customer confidence.",
        "✓ Less time on the phone means more time focused on your service."
      ],
      "image": "/assets/images/greattransfers.png",
      "tags": [
        { "label": "Booking Website" },
        { "label": "Airport Transfers" },
        { "label": "Private Hire" },
        { "label": "Online Reservations" }
      ],
      "link": "https://greattransfers.uk/",
      "attributes": [
        { "counting": "+57%", "label": "INCREASE IN BOOKINGS" },
        { "counting": "UK Wide", "label": "SERVICE COVERAGE" }
      ]
    },
    {
      "id": 4,
      "title": "MYRAS BEDS UK",
      "industry": "FURNITURE, BEDS & HOME GOODS",
      "role": "",
      "engagement": "A beautiful online showroom — open every day of the year.",
      "description": "A stylish e-commerce website where UK customers can browse premium beds and mattresses and place orders entirely online. The business no longer depends solely on footfall — it now attracts customers from across the country.",
      "list": [
        "✓ Customers shop from home without needing to visit your store.",
        "✓ Optimised for Google so new customers find you in search results.",
        "✓ Sell across the whole of the UK, not just locally."
      ],
      "image": "/assets/images/myrasbeds.png",
      "tags": [
        { "label": "Furniture E-Commerce", "is_active": true },
        { "label": "Beds & Mattresses" },
        { "label": "UK Retail" },
        { "label": "Google Optimized" }
      ],
      "link": "https://www.myrasbeds.co.uk/",
      "attributes": [
        { "counting": "UK Wide", "label": "MARKET REACH" },
        { "counting": "Online", "label": "SALES PLATFORM" }
      ]
    },
    {
      "id": 1,
      "title": "Auto-Bids",
      "industry": "VEHICLE SALES & ONLINE AUCTIONS",
      "role": "",
      "engagement": "The smarter way to sell cars — online, 24 hours a day.",
      "description": "Auto-Bids lets car dealers and auction houses list their full vehicle stock online. Buyers can browse, bid, and pay securely from any device — at any time of day. You manage everything from one simple dashboard.",
      "list": [
        "✓ Buyers compete in live bidding, driving up your sale prices.",
        "✓ Secure payments handled through the website — no cash, no no-shows.",
        "✓ Your showroom is open around the clock, even when you are not."
      ],
      "image": "/assets/img/auto-bids.png",
      "tags": [
        { "label": "Car Sales Website", "is_active": true },
        { "label": "Live Auction System" },
        { "label": "Secure Payments" },
        { "label": "Dealer Dashboard" }
      ],
      "link": "https://auto-bids.com/",
      "attributes": [
        { "counting": "100+", "label": "VEHICLES LISTED" },
        { "counting": "+28%", "label": "RISE IN BIDDING ACTIVITY" }
      ]
    },
    {
      "id": 3,
      "title": "Heavenly Meats LLC",
      "industry": "FOOD, MEAT & GROCERY E-COMMERCE",
      "role": "",
      "engagement": "A premium online shop that turns visitors into paying customers.",
      "description": "A high-performance online shop where customers can browse, order, and pay fully online — from any device, at any hour. Since launching, the business has seen a dramatic rise in orders and a much wider customer base.",
      "list": [
        "✓ Simple checkout means customers complete their purchase rather than giving up.",
        "✓ Loads in under 3 seconds — keeping customers engaged.",
        "✓ Sell beyond your local area and reach customers across the UK."
      ],
      "image": "/assets/img/heavenlymeatsllc.png",
      "tags": [
        { "label": "Online Shop", "is_active": true },
        { "label": "Food & Grocery" },
        { "label": "Easy Checkout" },
        { "label": "Fast Loading" }
      ],
      // "link": "https://heavenlymeatsllc.com/",
      "link": "",
      "attributes": [
        { "counting": "+42%", "label": "INCREASE IN ONLINE ORDERS" },
        { "counting": "2.5s", "label": "AVERAGE PAGE LOAD TIME" }
      ]
    },
    {
      "id": 2,
      "title": "Fatima Quranic Academy",
      "industry": "ONLINE EDUCATION & TUTORING",
      "role": "",
      "engagement": "Reaching students across the globe — from one professional website.",
      "description": "A fully managed education platform that makes it effortless for parents and students to find your courses and get in touch. Works perfectly on mobile, and brings in new enquiries automatically — no constant advertising needed.",
      "list": [
        "✓ Parents can browse courses, pricing, and teacher profiles in minutes.",
        "✓ Reach students locally, nationally, and internationally.",
        "✓ A professional website builds trust and makes families choose you."
      ],
      "image": "/assets/images/fatimaquranicacademy.png",
      "tags": [
        { "label": "Education Website", "is_active": true },
        { "label": "Online Tutoring" },
        { "label": "Course Listings" },
        { "label": "Mobile Friendly" }
      ],
      "link": "https://fatimaquranicacademy.com/",
      "attributes": [
        { "counting": "+31%", "label": "GROWTH IN STUDENT ENQUIRIES" },
        { "counting": "Worldwide", "label": "STUDENT REACH" }
      ]
    },
    {
      "id": 5,
      "title": "MR Oil",
      "industry": "OIL, FUEL & INDUSTRIAL SUPPLIES",
      "role": "",
      "engagement": "A professional online presence that brings in business clients.",
      "description": "A corporate website that showcases products and services clearly, builds credibility with business buyers, and makes it straightforward for new clients to send enquiries or request bulk quotes — all online, at any time.",
      "list": [
        "✓ Clients find your business on Google when searching for your supplies.",
        "✓ Professionally presented services build trust with larger buyers.",
        "✓ Stands you apart from competitors still relying on word of mouth."
      ],
      "image": "/assets/images/mr-oil.png",
      "tags": [
        { "label": "Corporate Website", "is_active": true },
        { "label": "Oil & Petroleum" },
        { "label": "B2B Enquiries" },
        { "label": "Industrial Supplies" }
      ],
      "link": "",
      "attributes": [
        { "counting": "B2B", "label": "BUSINESS-FOCUSED" },
        { "counting": "Industrial", "label": "MARKET REACH" }
      ]
    },
    {
      "id": 7,
      "title": "Frenco LTD",
      "industry": "CORPORATE SERVICES PLATFORM",
      "role": "Full-Stack Developer",
      "engagement": "Delivered during tenure at previous organization",
      "description": "A professional corporate website developed to showcase services, strengthen brand credibility, and generate qualified leads through a performance-driven design.",
      "list": [],
      "image": "/assets/images/frencoltd.png",
      "tags": [
        { "label": "Corporate Website" },
        { "label": "Lead Generation" },
        { "label": "Performance Optimized" }
      ],
      "link": "https://frencoltd.com/",
      "attributes": [
        { "counting": "+47%", "label": "INCREASE IN INQUIRIES" },
        { "counting": "International", "label": "CLIENT REACH" }
      ]
    },
    {
      "id": 8,
      "title": "Online Quran Home",
      "industry": "EDUCATIONAL SERVICES PLATFORM",
      "role": "Full-Stack Developer",
      "engagement": "Delivered under current organization",
      "description": "Lead-generation focused educational platform built to connect students with qualified Quran tutors worldwide. Designed for performance, trust-building, and seamless inquiry management.",
      "list": [],
      "image": "/assets/img/onlinequranhome.png",
      "tags": [
        { "label": "Service Website" },
        { "label": "Lead Generation" },
        { "label": "Performance Optimized" }
      ],
      "link": "https://onlinequranhome.com/",
      "attributes": [
        { "counting": "+26%", "label": "INCREASE IN INQUIRIES" },
        { "counting": "Global", "label": "STUDENT REACH" }
      ]
    },
    {
      "id": 9,
      "title": "LA121 Consultants",
      "industry": "BUSINESS CONSULTANCY",
      "role": "Full-Stack Developer",
      "engagement": "Developed and Delivered Under Current Organization",
      "description": "Modern consultancy website designed to strengthen brand authority and generate qualified business leads through structured service presentation and optimized UI.",
      "list": [],
      "image": "/assets/img/la121consultants.png",
      "tags": [
        { "label": "Corporate Website" },
        { "label": "Lead Generation" },
        { "label": "Business Branding" }
      ],
      // "link": "https://la121consultants.netlify.app/",
      "link": "",
      "attributes": [
        { "counting": "+39%", "label": "INCREASE IN CLIENT INQUIRIES" },
        { "counting": "99.9%", "label": "SYSTEM UPTIME" }
      ]
    },
    {
      "id": 10,
      "title": "NFT Neighbors",
      "industry": "BLOCKCHAIN / WEB3 PLATFORM",
      "role": "Full-Stack Developer & Web3 Integration Developer",
      "engagement": "Concept & Development Project",
      "description": "Web3-enabled NFT community platform integrating wallet connectivity, smart contract interaction, and scalable frontend architecture.",
      "list": [],
      "image": "/assets/img/nftneighbors.png",
      "tags": [
        { "label": "Blockchain" },
        { "label": "NFT Platform" },
        { "label": "Web3 Integration" }
      ],
      "link": "https://nftneighbors.com/",
      "attributes": [
        { "counting": "10+", "label": "NFTS MINTED" },
        { "counting": "+35%", "label": "COMMUNITY GROWTH" }
      ]
    },
    {
      "id": 11,
      "title": "TEI Enterprises App",
      "industry": "BUSINESS MANAGEMENT / MOBILE APPLICATION",
      "role": "Lead Mobile Developer",
      "engagement": "Developed and Managed Under Current Organization",
      "description": "Cross-platform business management application built to streamline internal operations, improve client coordination, and enhance overall engagement.",
      "list": [],
      "image": "/assets/img/tei-enterprises.png",
      "tags": [
        { "label": "Mobile App" },
        { "label": "Android & iOS" },
        { "label": "React Native" }
      ],
      // "link": "https://play.google.com/store/apps/details?id=app.tei.enterprises&hl=en",
      "link": "https://tei.enterprises/",
      "attributes": [
        { "counting": "1K+", "label": "ACTIVE USERS" },
        { "counting": "+25%", "label": "ENGAGEMENT GROWTH" }
      ]
    }
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
      className={`relative px-2 ${isPortfolioPage ? "" : "bg-[url('/assets/images/tech-light-bg.png')] bg-cover bg-center bg-no-repeat py-6 md:py-8"}`}
      suppressHydrationWarning
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          {/* <h2 className="mb-3 drop-shadow-sm text-capitalize text-primary">
            ONXIUS
          </h2> */}
          <h2 className="mb-2 drop-shadow-sm text-capitalize text-lg">
            Real Websites. Real Results. For Businesses Just Like Yours.
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-xl">
            Browse our work below and imagine what a website like this could do for your business.
          </p>
        </div>

        {/* Portfolio Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedData.map((item) => (
            <PorfolioCard data={item} key={item.id} />
          ))}
        </div>
        {/* view all projects button */}
        {!isPortfolioPage && <div className="mt-5 flex justify-center items-center wow fadeIn">
          <Link href="/portfolio" className="butn-custom rounded-pill py-2.5 px-16">View All Projects &#x2799;</Link>
        </div>}
      </div>
    </section>
  );
}
