// ─── Website Features Dropdown ────────────────────────────────────────────────
"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tooltip from "./Tooltip";
import { fadeUp } from "./ContactForm2";

const WebsiteFeatureGroups = [
      {
            group: "Core Features",
            features: [
                  "Booking System",
                  "Services Showcase",
                  "E-Commerce",
                  "Contact Form",
                  "SEO Optimisation",
                  "Google Map Integration",
                  "Analytics Tools Integration",
            ],
      },
      {
            group: "User & Authentication",
            features: [
                  "User Registration",
                  "Authentication (Login / Logout)",
                  "User Roles & Permissions",
                  "Email Verification",
                  "Two-Factor Authentication (2FA)",
            ],
      },
      {
            group: "Content",
            features: ["Blog / Articles", "Categories & Tags", "Comments System"],
      },
      {
            group: "E-Commerce",
            features: [
                  "Product Filter & Search",
                  "Shopping Cart",
                  "Checkout",
                  "Coupon Codes",
                  "Reviews & Ratings",
                  "Order Tracking",
                  "Inventory Management",
            ],
      },
      {
            group: "Security",
            features: [
                  "SSL Certificate",
                  "Data Encryption",
                  "reCAPTCHA",
                  "Firewall",
                  "Backup System",
                  "Login Attempt Limits",
                  "Brute Force Attack Alerts",
            ],
      },
      {
            group: "Marketing",
            features: ["Referral System", "Affiliate Marketing", "Email Marketing", "Social Sharing"],
      },
      {
            group: "Advanced",
            features: [
                  "Live Chat Support",
                  "AI Chatbot",
                  "Multi-Language Support",
                  "Progressive Web App (PWA)",
                  "Real-Time Notifications",
            ],
      },
];

const FeaturesSelector = ({
      value,
      onChange,
      index,
}: {
      value: string[];
      onChange: (v: string[]) => void;
      index: number;
}) => {
      const [open, setOpen] = useState(false);
      const ref = useRef<HTMLDivElement>(null);

      const toggle = (f: string) =>
            onChange(value.includes(f) ? value.filter((v) => v !== f) : [...value, f]);

      useEffect(() => {
            const handler = (e: MouseEvent) => {
                  if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
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
                  <p
                        className="text-[11px] uppercase tracking-[0.18em] mb-1 font-semibold"
                        style={{ color: "var(--dark-grey-clr)" }}
                  >
                        Website / App Features
                        <Tooltip text="Select all features you'd like included. Don't worry if you're unsure — our team will advise you during the discovery call." />
                  </p>
                  <p className="text-[11px] mb-3" style={{ color: "var(--dark-grey-clr)", opacity: 0.6 }}>
                        {value.length > 0
                              ? `${value.length} feature${value.length !== 1 ? "s" : ""} selected`
                              : "Select all that apply"}
                  </p>

                  {/* Selected pill tags */}
                  {value.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-3">
                              {value.map((f) => (
                                    <span
                                          key={f}
                                          className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium"
                                          style={{
                                                background: "rgba(241,128,39,0.08)",
                                                color: "var(--sky-clr)",
                                                border: "1px solid rgba(241,128,39,0.25)",
                                          }}
                                    >
                                          {f}
                                          <button
                                                type="button"
                                                onClick={() => toggle(f)}
                                                className="hover:opacity-60 font-bold ml-0.5"
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
                              ▾
                        </span>
                  </button>

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
                                          border: `1.5px solid var(--light-gray-clr)`,
                                    }}
                              >
                                    <div className="max-h-80 overflow-y-auto p-4 space-y-5">
                                          {WebsiteFeatureGroups.map((grp) => (
                                                <div key={grp.group}>
                                                      <p
                                                            className="text-[10px] uppercase tracking-widest font-bold mb-2"
                                                            style={{ color: "var(--sky-clr)" }}
                                                      >
                                                            {grp.group}
                                                      </p>
                                                      <div className="flex flex-wrap gap-1.5">
                                                            {grp.features.map((f) => {
                                                                  const sel = value.includes(f);
                                                                  return (
                                                                        <button
                                                                              key={f}
                                                                              type="button"
                                                                              onClick={() => toggle(f)}
                                                                              className="px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all"
                                                                              style={{
                                                                                    border: `1.5px solid ${sel ? "var(--sky-clr)" : "var(--light-gray-clr)"}`,
                                                                                    background: sel ? "rgba(241,128,39,0.08)" : "#f9f9f9",
                                                                                    color: sel ? "var(--sky-clr)" : "var(--dark-grey-clr)",
                                                                              }}
                                                                        >
                                                                              {sel && "✓ "}
                                                                              {f}
                                                                        </button>
                                                                  );
                                                            })}
                                                      </div>
                                                </div>
                                          ))}
                                    </div>
                                    {/* Footer */}
                                    <div
                                          className="px-4 py-2.5 flex justify-between items-center"
                                          style={{ borderTop: `1px solid var(--light-gray-clr)`, background: "#f9f9f9" }}
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