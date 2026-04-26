"use client";
import React, { useState, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "./ContactForm2";
import countryData from '../json/countries.json'; // Direct import

// ─── Country codes ────────────────────────────────────────────────────────────
// export const COUNTRY_CODES = [
//     { name: "United States", code: "+1", flag: "🇺🇸", minLen: 10, maxLen: 10 },
//     { name: "Canada", code: "+1", flag: "🇨🇦", minLen: 10, maxLen: 10 },
//     { name: "United Kingdom", code: "+44", flag: "🇬🇧", minLen: 10, maxLen: 10 },
//     { name: "Pakistan", code: "+92", flag: "🇵🇰", minLen: 10, maxLen: 10 },
//     { name: "India", code: "+91", flag: "🇮🇳", minLen: 10, maxLen: 10 },
//     { name: "United Arab Emirates", code: "+971", flag: "🇦🇪", minLen: 9, maxLen: 9 },
//     { name: "Saudi Arabia", code: "+966", flag: "🇸🇦", minLen: 9, maxLen: 9 },
//     { name: "Qatar", code: "+974", flag: "🇶🇦", minLen: 8, maxLen: 8 },
//     { name: "Australia", code: "+61", flag: "🇦🇺", minLen: 9, maxLen: 9 },
//     { name: "Germany", code: "+49", flag: "🇩🇪", minLen: 10, maxLen: 11 },
//     { name: "France", code: "+33", flag: "🇫🇷", minLen: 9, maxLen: 9 },
//     { name: "China", code: "+86", flag: "🇨🇳", minLen: 11, maxLen: 11 },
//     { name: "Japan", code: "+81", flag: "🇯🇵", minLen: 10, maxLen: 10 },
//     { name: "Turkey", code: "+90", flag: "🇹🇷", minLen: 10, maxLen: 10 },
//     { name: "Singapore", code: "+65", flag: "🇸🇬", minLen: 8, maxLen: 8 },
//     { name: "Malaysia", code: "+60", flag: "🇲🇾", minLen: 9, maxLen: 10 },
//     { name: "South Africa", code: "+27", flag: "🇿🇦", minLen: 9, maxLen: 9 },
//     { name: "Brazil", code: "+55", flag: "🇧🇷", minLen: 10, maxLen: 11 },
//     { name: "Netherlands", code: "+31", flag: "🇳🇱", minLen: 9, maxLen: 9 },
//     { name: "Bangladesh", code: "+880", flag: "🇧🇩", minLen: 10, maxLen: 10 },
//     { name: "Kuwait", code: "+965", flag: "🇰🇼", minLen: 8, maxLen: 8 },
//     { name: "Oman", code: "+968", flag: "🇴🇲", minLen: 8, maxLen: 8 },
//     { name: "Bahrain", code: "+973", flag: "🇧🇭", minLen: 8, maxLen: 8 },
//     { name: "Italy", code: "+39", flag: "🇮🇹", minLen: 10, maxLen: 10 },
//     { name: "Spain", code: "+34", flag: "🇪🇸", minLen: 9, maxLen: 9 },
//     { name: "Ireland", code: "+353", flag: "🇮🇪", minLen: 7, maxLen: 9 },
//     { name: "New Zealand", code: "+64", flag: "🇳🇿", minLen: 8, maxLen: 10 },
//     { name: "Hong Kong", code: "+852", flag: "🇭🇰", minLen: 8, maxLen: 8 },
//     { name: "Sri Lanka", code: "+94", flag: "🇱🇰", minLen: 9, maxLen: 9 },
//     { name: "Egypt", code: "+20", flag: "🇪🇬", minLen: 10, maxLen: 10 }
// ];

export const COUNTRY_CODES = countryData

// ─── Props ────────────────────────────────────────────────────────────────────
interface PhoneInputProps {
      name: string;
      label: string;
      value: string;
      onChange: (e: ChangeEvent<HTMLInputElement>) => void;
      /** Called with the new country-code string whenever the user changes it */
      onCountryCodeChange: (code: string) => void;
      countryCode: string;
      required?: boolean;
      index: number;
}

// ─── Component ────────────────────────────────────────────────────────────────
const PhoneInput: React.FC<PhoneInputProps> = ({
      name,
      label,
      value,
      onChange,
      onCountryCodeChange,
      countryCode,
      required = false,
      index,
}) => {
      const [focused, setFocused] = useState(false);
      const active = focused || value !== "";

      const borderColor = focused ? "var(--sky-clr)" : "var(--light-gray-clr)";
      const boxShadow = focused ? "0 0 0 3px rgba(241,128,39,0.12)" : "none";

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
                        style={{ background: "#f9f9f9", border: `1.5px solid ${borderColor}`, boxShadow }}
                  >
                        {/* ── Country code selector ── */}
                        <div
                              className="flex items-center shrink-0 border-r px-1 sm:px-3"
                              style={{ borderColor: "var(--light-gray-clr)" }}
                        >
                              <select
                                    name="country_code"
                                    id="country_code"
                                    value={countryCode}
                                    onChange={(e) => onCountryCodeChange(e.target.value)}
                                    onFocus={() => setFocused(true)}
                                    onBlur={() => setFocused(false)}
                                    className="bg-transparent outline-none text-sm cursor-pointer"
                                    style={{ color: "var(--metalic-gray-clr)" }}
                              >
                                    <option value="" disabled>🌐 +--</option>
                                    {COUNTRY_CODES.map((c) => (
                                          <option key={c.code} value={c.code}>
                                                {c.flag} {c.code}
                                          </option>
                                    ))}
                              </select>
                        </div>

                        {/* ── Phone number input ── */}
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