// ─── Floating Textarea ────────────────────────────────────────────────────────
"use client";
import React, { useState, ChangeEvent } from "react";
import { motion } from "framer-motion";
import Tooltip from "./Tooltip";
import { fadeUp } from "./ContactForm2";


const FloatingTextarea = ({
      name,
      label,
      value,
      onChange,
      required = false,
      index,
      tooltip,
}: {
      name: string;
      label: string;
      value: string;
      onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
      required?: boolean;
      index: number;
      tooltip?: string;
}) => {
      const [focused, setFocused] = useState(false);
      const active = focused || value !== "";
      return (
            <motion.div
                  variants={fadeUp}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  className="col-span-2 relative"
            >
                  <textarea
                        id={name}
                        name={name}
                        value={value}
                        onChange={onChange}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        required={required}
                        rows={4}
                        placeholder={label}
                        className="w-full rounded-xl px-4 pt-8 pb-3 text-sm outline-none transition-all resize-none placeholder-transparent"
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
                              top: active ? "10px" : "16px",
                              fontSize: active ? "10px" : "14px",
                              fontWeight: active ? 600 : 400,
                              letterSpacing: active ? "0.04em" : "normal",
                        }}
                  >
                        {label}
                        {tooltip && <Tooltip text={tooltip} />}
                  </label>
            </motion.div>
      );
};

export default FloatingTextarea;