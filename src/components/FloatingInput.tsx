// ─── Floating Input ───────────────────────────────────────────────────────────
"use client";
import React, { useState, ChangeEvent } from "react";
import { motion } from "framer-motion";
import Tooltip from "./Tooltip";
import { fadeUp } from "./ContactForm2";


const FloatingInput = ({
      name,
      label,
      type = "text",
      value,
      onChange,
      required = false,
      index,
      tooltip,
      fullWidth = false,
}: {
      name: string;
      label: string;
      type?: string;
      value: string;
      onChange: (e: ChangeEvent<HTMLInputElement>) => void;
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
                  <input
                        id={name}
                        name={name}
                        type={type}
                        value={value}
                        onChange={onChange}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        required={required}
                        placeholder={label}
                        className="w-full rounded-xl px-4 pt-6 pb-2.5 text-sm outline-none transition-all placeholder-transparent"
                        style={{
                              background: "#f9f9f9",
                              border: `1.5px solid ${focused ? "var(--sky-clr)" : "var(--light-gray-clr)"}`,
                              color: "var(--metalic-gray-clr)",
                              boxShadow: focused ? "0 0 0 3px rgba(241,128,39,0.12)" : "none",
                        }}
                  />
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
                  {/* focus underline */}
                  <motion.span
                        animate={{ scaleX: focused ? 1 : 0 }}
                        className="absolute bottom-0 left-4 right-4 h-[1.5px] origin-left rounded-full"
                        style={{ background: "var(--sky-clr)" }}
                  />
            </motion.div>
      );
};

export default FloatingInput;