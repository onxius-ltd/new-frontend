// ─── Radio Group ──────────────────────────────────────────────────────────────
"use client";
import React from "react";
import { motion } from "framer-motion";
import Tooltip from "./Tooltip";
import { fadeUp } from "./ContactForm2";

const RadioGroup = ({
      name,
      label,
      options,
      value,
      onChange,
      index,
      tooltip,
      fullWidth = false,
}: {
      name: string;
      label: string;
      options: string[];
      value: string;
      onChange: (name: string, val: string) => void;
      index: number;
      tooltip?: string;
      fullWidth?: boolean;
}) => (
      <motion.div
            variants={fadeUp}
            custom={index}
            initial="hidden"
            animate="visible"
            className={fullWidth ? "col-span-2" : ""}
      >
            <p
                  className="text-[11px] uppercase tracking-[0.18em] mb-3 font-semibold"
                  style={{ color: "var(--dark-grey-clr)" }}
            >
                  {label}
                  {tooltip && <Tooltip text={tooltip} />}
            </p>
            <div className="flex flex-wrap gap-2">
                  {options.map((opt) => {
                        const sel = value === opt;
                        return (
                              <button
                                    key={opt}
                                    type="button"
                                    onClick={() => onChange(name, opt)}
                                    className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                                    style={{
                                          border: `1.5px solid ${sel ? "var(--sky-clr)" : "var(--light-gray-clr)"}`,
                                          background: sel ? "rgba(241,128,39,0.08)" : "#f9f9f9",
                                          color: sel ? "var(--sky-clr)" : "var(--dark-grey-clr)",
                                    }}
                              >
                                    {opt}
                              </button>
                        );
                  })}
            </div>
      </motion.div>
);

export default RadioGroup;