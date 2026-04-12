"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tooltip from "./Tooltip";
import { fadeUp } from "./ContactForm2";

const WebsiteFeatureGroups = [
    {
        group: "Core Features",
        tooltip:
            "Essential building blocks every website needs — bookings, shop, forms, maps and visibility on Google.",
        features: [
            { name: "Booking System", tooltip: "Let customers book appointments or services directly from your site." },
            { name: "Services Showcase", tooltip: "Display your offerings with descriptions, pricing and images." },
            { name: "E-Commerce", tooltip: "Sell products or services online with a full storefront." },
            { name: "Contact Form", tooltip: "A simple form so visitors can reach you without leaving the page." },
            { name: "SEO Optimisation", tooltip: "Structured markup, meta tags and speed tuning to rank higher on Google." },
            { name: "Google Map Integration", tooltip: "Embed an interactive map so customers can find your location easily." },
            { name: "Analytics Tools Integration", tooltip: "Connect Google Analytics or similar to track visitors and behaviour." },
        ],
    },
    {
        group: "User & Authentication",
        tooltip:
            "Control who can access your site — sign-up flows, secure login, roles, and extra verification layers.",
        features: [
            { name: "User Registration", tooltip: "Allow visitors to create a personal account on your platform." },
            { name: "Authentication (Login / Logout)", tooltip: "Secure sign-in and sign-out flow for registered users." },
            { name: "User Roles & Permissions", tooltip: "Assign different access levels e.g. admin, editor, customer." },
            { name: "Email Verification", tooltip: "Confirm a user's email address before activating their account." },
            { name: "Two-Factor Authentication (2FA)", tooltip: "Add a second security step via SMS or authenticator app." },
        ],
    },
    {
        group: "Content",
        tooltip: "Publish and organise articles, tag posts by topic, and let visitors leave comments.",
        features: [
            { name: "Blog / Articles", tooltip: "Publish news, guides or updates to engage visitors and boost SEO." },
            { name: "Categories & Tags", tooltip: "Organise posts so readers can filter and find content quickly." },
            { name: "Comments System", tooltip: "Let readers leave feedback or questions directly under each post." },
        ],
    },
    {
        group: "E-Commerce",
        tooltip:
            "Everything needed to sell online — search, cart, checkout, discounts, reviews and stock control.",
        features: [
            { name: "Product Filter & Search", tooltip: "Help shoppers find products by category, price, size and more." },
            { name: "Shopping Cart", tooltip: "A persistent basket where customers collect items before buying." },
            { name: "Checkout", tooltip: "A smooth, secure payment flow supporting cards and digital wallets." },
            { name: "Coupon Codes", tooltip: "Create discount codes for promotions, sales or loyal customers." },
            { name: "Reviews & Ratings", tooltip: "Let buyers leave star ratings and written reviews on products." },
            { name: "Order Tracking", tooltip: "Give customers real-time updates on their order status and delivery." },
            { name: "Inventory Management", tooltip: "Track stock levels and get alerts when products run low." },
        ],
    },
    {
        group: "Security",
        tooltip:
            "Keep your site and users safe with encryption, firewalls, automated backups and abuse prevention.",
        features: [
            { name: "SSL Certificate", tooltip: "Encrypts data between your site and visitors — essential for trust." },
            { name: "Data Encryption", tooltip: "Sensitive data is stored and transmitted in an unreadable format." },
            { name: "reCAPTCHA", tooltip: "Stops bots from spamming your forms with a Google challenge." },
            { name: "Firewall", tooltip: "Blocks malicious traffic before it ever reaches your site." },
            { name: "Backup System", tooltip: "Automated daily backups so your site can be restored if anything goes wrong." },
            { name: "Login Attempt Limits", tooltip: "Locks out users after too many failed password attempts." },
            { name: "Brute Force Attack Alerts", tooltip: "Notifies you immediately if someone is trying to crack your login." },
        ],
    },
    {
        group: "Marketing",
        tooltip:
            "Grow your audience with referral programmes, affiliate links, email campaigns and social sharing.",
        features: [
            { name: "Referral System", tooltip: "Reward existing customers for bringing in new ones." },
            { name: "Affiliate Marketing", tooltip: "Let partners earn a commission by promoting your products." },
            { name: "Email Marketing", tooltip: "Send newsletters, offers and automated campaigns to your subscriber list." },
            { name: "Social Sharing", tooltip: "Add share buttons so visitors can post your content to their networks." },
        ],
    },
    {
        group: "Advanced",
        tooltip:
            "Next-level features — live chat, AI chatbot, multi-language, offline-ready PWA and push notifications.",
        features: [
            { name: "Live Chat Support", tooltip: "Let visitors message your team in real time without leaving the page." },
            { name: "AI Chatbot", tooltip: "An automated assistant that answers common questions 24 / 7." },
            { name: "Multi-Language Support", tooltip: "Serve content in multiple languages to reach a global audience." },
            { name: "Progressive Web App (PWA)", tooltip: "Your site works offline and can be installed like a native app." },
            { name: "Real-Time Notifications", tooltip: "Push instant alerts to users for orders, messages or updates." },
        ],
    },
];

interface FeaturesSelectorProps {
    value: string[];
    onChange: (v: string[]) => void;
    index: number;
}

const FeaturesSelector = ({ value, onChange, index }: FeaturesSelectorProps) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const toggle = (featureName: string) => {
        onChange(
            value.includes(featureName)
                ? value.filter((v) => v !== featureName)
                : [...value, featureName]
        );
    };

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <motion.div
            variants={fadeUp}
            custom={index}
            initial="hidden"
            animate="visible"
            className="col-span-2"
            ref={ref}
        >
            {/* Label — using <div> instead of <p> to safely nest Tooltip's block element */}
            <div
                className="text-[11px] uppercase tracking-[0.18em] mb-1 font-semibold"
                style={{ color: "var(--dark-grey-clr)" }}
            >
                Website / App Features
                <Tooltip text="Select all features you'd like included. Don't worry if you're unsure, our team will advise you during the discovery call." />
            </div>

            <p className="text-[11px] mb-3" style={{ color: "var(--dark-grey-clr)", opacity: 0.6 }}>
                {value.length > 0
                    ? `${value.length} feature${value.length !== 1 ? "s" : ""} selected`
                    : "Select all that apply"}
            </p>

            {/* Selected pill tags */}
            {value.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-3">
                    {value.map((featureName) => (
                        <span
                            key={featureName}
                            className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium"
                            style={{
                                background: "rgba(241,128,39,0.08)",
                                color: "var(--sky-clr)",
                                border: "1px solid rgba(241,128,39,0.25)",
                            }}
                        >
                            {featureName}
                            <button
                                type="button"
                                onClick={() => toggle(featureName)}
                                className="hover:opacity-60 font-bold ml-0.5"
                                aria-label={`Remove ${featureName}`}
                            >
                                ×
                            </button>
                        </span>
                    ))}
                </div>
            )}

            {/* Dropdown trigger */}
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all"
                style={{
                    background: "#f9f9f9",
                    border: `1.5px solid ${open ? "var(--sky-clr)" : "var(--light-gray-clr)"}`,
                    color: "var(--dark-grey-clr)",
                    boxShadow: open ? "0 0 0 3px rgba(241,128,39,0.12)" : "none",
                }}
            >
                <span>Browse and select features…</span>
                <span
                    className="text-xs transition-transform duration-200"
                    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                        fill="currentColor"
                        className="w-4 h-4"
                    >
                        <path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z" />
                    </svg>
                </span>
            </button>

            {/* Dropdown panel */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="mt-1.5 rounded-xl shadow-xl overflow-hidden z-40 relative"
                        style={{
                            background: "#ffffff",
                            border: "1.5px solid var(--light-gray-clr)",
                        }}
                    >
                        <div className="max-h-80 overflow-y-auto p-4 space-y-5">
                            {WebsiteFeatureGroups.map((grp) => (
                                <div key={grp.group}>
                                    {/* Group label — <div> avoids invalid nesting with Tooltip */}
                                    <div
                                        className="text-[10px] uppercase tracking-widest font-bold mb-2 flex items-center gap-1"
                                        style={{ color: "var(--sky-clr)" }}
                                    >
                                        {grp.group}
                                        <Tooltip text={grp.tooltip} />
                                    </div>

                                    {/* Feature pills — single wrapping div, no double-wrap */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {grp.features.map((f) => {
                                            const isSelected = value.includes(f.name);
                                            return (
                                                <div key={f.name} className="relative inline-flex items-center">
                                                    <button
                                                        type="button"
                                                        onClick={() => toggle(f.name)}
                                                        className="px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all"
                                                        style={{
                                                            border: `1.5px solid ${isSelected ? "var(--sky-clr)" : "var(--light-gray-clr)"}`,
                                                            background: isSelected ? "rgba(241,128,39,0.08)" : "#f9f9f9",
                                                            color: isSelected ? "var(--sky-clr)" : "var(--dark-grey-clr)",
                                                        }}
                                                    >
                                                        {isSelected && "✓ "}
                                                        {f.name}
                                                        <Tooltip text={f.tooltip} />
                                                    </button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div
                            className="px-4 py-2.5 flex justify-between items-center"
                            style={{
                                borderTop: "1px solid var(--light-gray-clr)",
                                background: "#f9f9f9",
                            }}
                        >
                            <span className="text-xs" style={{ color: "var(--dark-grey-clr)" }}>
                                {value.length} selected
                            </span>
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="text-xs font-bold hover:underline"
                                style={{ color: "var(--sky-clr)" }}
                            >
                                Done ✓
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default FeaturesSelector;