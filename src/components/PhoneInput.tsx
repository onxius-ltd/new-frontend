"use client";
import React, { useState, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "./ContactForm2";

const COUNTRY_CODES = [
      { code: "+1", flag: "🇺🇸", minLen: 10, maxLen: 10 },
      { code: "+44", flag: "🇬🇧", minLen: 10, maxLen: 10 },
      { code: "+92", flag: "🇵🇰", minLen: 10, maxLen: 10 },
      { code: "+91", flag: "🇮🇳", minLen: 10, maxLen: 10 },
      { code: "+971", flag: "🇦🇪", minLen: 9, maxLen: 9 },
      { code: "+966", flag: "🇸🇦", minLen: 9, maxLen: 9 },
      { code: "+61", flag: "🇦🇺", minLen: 9, maxLen: 9 },
      { code: "+49", flag: "🇩🇪", minLen: 10, maxLen: 11 },
      { code: "+33", flag: "🇫🇷", minLen: 9, maxLen: 9 },
      { code: "+86", flag: "🇨🇳", minLen: 11, maxLen: 11 },
];

export { COUNTRY_CODES };

const PhoneInput = ({
      name,
      label,
      value,
      onChange,
      onCountryChange,
      countryCode,
      required = false,
      index,
}: {
      name: string;
      label: string;
      value: string;
      onChange: (e: ChangeEvent<HTMLInputElement>) => void;
      onCountryChange: (code: string) => void;
      countryCode: string;
      required?: boolean;
      index: number;
}) => {
      const [focused, setFocused] = useState(false);
      const active = focused || value !== "";

      return (
            <motion.div
                  variants={fadeUp}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  className="relative"
            >
                  <div
                        className="flex w-full rounded-xl transition-all"
                        style={{
                              background: "#f9f9f9",
                              border: `1.5px solid ${focused ? "var(--sky-clr)" : "var(--light-gray-clr)"}`,
                              boxShadow: focused ? "0 0 0 3px rgba(241,128,39,0.12)" : "none",
                        }}
                  >
                        {/* ── Country Code ── */}
                        <div
                              className="flex items-center shrink-0 border-r px-1 sm:px-3 w-fit"
                              style={{ borderColor: "var(--light-gray-clr)" }}
                        >
                              <select
                                    value={countryCode}
                                    onChange={(e) => onCountryChange(e.target.value)}
                                    onFocus={() => setFocused(true)}
                                    onBlur={() => setFocused(false)}
                                    className="bg-transparent outline-none text-sm cursor-pointer"
                                    style={{ color: "var(--metalic-gray-clr)" }}
                                    name="country_code"
                                    id="country_code"
                              >
                                    <option value="" disabled>🌐 +--</option>  {/* ← placeholder */}
                                    {COUNTRY_CODES.map((c) => (
                                          <option key={c.code} value={c.code}>
                                                {c.flag} {c.code}
                                          </option>
                                    ))}
                              </select>
                        </div>

                        {/* ── Phone Input ── */}
                        <div className="relative flex-1">
                              <input
                                    id={name}
                                    name={name}
                                    type="tel"
                                    value={value}
                                    onChange={onChange}
                                    onFocus={() => setFocused(true)}
                                    onBlur={() => setFocused(false)}
                                    required={required}
                                    placeholder=" "
                                    className="w-full bg-transparent px-2.5 sm:px-4 pt-6 pb-2.5 text-sm outline-none"
                                    style={{ color: "var(--metalic-gray-clr)" }}
                              />
                              <label
                                    htmlFor={name}
                                    className="absolute left-4 transition-all duration-200 pointer-events-none select-none"
                                    style={{
                                          color: active ? "var(--sky-clr)" : "var(--dark-grey-clr)",
                                          top: active ? "8px" : "50%",
                                          transform: active ? "none" : "translateY(-50%)",
                                          fontSize: active ? "10px" : "14px",
                                          fontWeight: active ? 600 : 400,
                                          letterSpacing: active ? "0.04em" : "normal",
                                    }}
                              >
                                    {label}
                              </label>
                        </div>
                  </div>

                  {/* Focus underline */}
                  <motion.span
                        animate={{ scaleX: focused ? 1 : 0 }}
                        className="absolute bottom-0 left-4 right-4 h-[1.5px] origin-left rounded-full"
                        style={{ background: "var(--sky-clr)" }}
                  />
            </motion.div>
      );
};

export default PhoneInput;