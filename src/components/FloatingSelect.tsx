// ─── Floating Select ──────────────────────────────────────────────────────────
"use client";
import React, { useState, ChangeEvent } from "react";
import { motion } from "framer-motion";
import Tooltip from "./Tooltip";
import { fadeUp } from "./ContactForm2";

const FloatingSelect = ({
      name,
      label,
      options,
      value,
      onChange,
      required = false,
      index,
      tooltip,
      fullWidth = false,
}: {
      name: string;
      label: string;
      options: string[];
      value: string;
      onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
      required?: boolean;
      index: number;
      tooltip?: string;
      fullWidth?: boolean;
}) => {
      const [focused, setFocused] = useState(false);
      const active = focused || value !== "";
      return (
            <motion.div
                  variants={fadeUp}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  className={`relative ${fullWidth ? "col-span-2" : ""}`}
            >
                  <select
                        id={name}
                        name={name}
                        value={value}
                        onChange={onChange}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        required={required}
                        className="w-full rounded-xl px-4 pt-6 pb-2.5 text-sm outline-none transition-all appearance-none cursor-pointer"
                        style={{
                              background: "#f9f9f9",
                              border: `1.5px solid ${focused ? "var(--sky-clr)" : "var(--light-gray-clr)"}`,
                              color: value ? "var(--metalic-gray-clr)" : "transparent",
                              boxShadow: focused ? "0 0 0 3px rgba(241,128,39,0.12)" : "none",
                        }}
                  >
                        <option value="" />
                        {options.map((opt) => (
                              <option key={opt} value={opt} style={{ color: "var(--metalic-gray-clr)" }}>
                                    {opt}
                              </option>
                        ))}
                  </select>
                  <label
                        htmlFor={name}
                        className="absolute left-4 transition-all duration-200 pointer-events-auto select-none"
                        style={{
                              color: active ? "var(--sky-clr)" : "var(--dark-grey-clr)",
                              top: active ? "8px" : "16px",
                              fontSize: active ? "10px" : "14px",
                              fontWeight: active ? 600 : 400,
                              letterSpacing: active ? "0.04em" : "normal",
                        }}
                  >
                        {label}
                        {tooltip && <Tooltip text={tooltip} />}
                  </label>
                  <span
                        className="absolute right-4 pointer-events-none text-base transition-transform duration-200"
                        style={{
                              color: "var(--dark-grey-clr)",
                              top: "50%",
                              transform: active ? "translateY(-50%) rotate(180deg)" : "translateY(-50%) rotate(0deg)",
                        }}
                  >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor" className="w-4 h-4">
                              <path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z" />
                        </svg>
                  </span>
                  <motion.span
                        animate={{ scaleX: focused ? 1 : 0 }}
                        className="absolute bottom-0 left-4 right-4 h-[1.5px] origin-left rounded-full"
                        style={{ background: "var(--sky-clr)" }}
                  />
            </motion.div>
      );
};

export default FloatingSelect;