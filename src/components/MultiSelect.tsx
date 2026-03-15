// ─── Multi-select tag pills ───────────────────────────────────────────────────
"use client";
import React from "react";
import { motion } from "framer-motion";
import Tooltip from "./Tooltip";
import { fadeUp } from "./ContactForm2";

const MultiSelect = ({
      name,
      label,
      options,
      value,
      onChange,
      index,
      tooltip,
}: {
      name: string;
      label: string;
      options: string[];
      value: string[];
      onChange: (name: string, values: string[]) => void;
      index: number;
      tooltip?: string;
}) => {
      const toggle = (opt: string) => {
            const next = value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt];
            onChange(name, next);
      };
      return (
            <motion.div
                  variants={fadeUp}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  className="col-span-2"
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
                              const sel = value.includes(opt);
                              return (
                                    <button
                                          key={opt}
                                          type="button"
                                          onClick={() => toggle(opt)}
                                          className="px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
                                          style={{
                                                border: `1.5px solid ${sel ? "var(--sky-clr)" : "var(--light-gray-clr)"}`,
                                                background: sel ? "rgba(241,128,39,0.08)" : "#f9f9f9",
                                                color: sel ? "var(--sky-clr)" : "var(--dark-grey-clr)",
                                          }}
                                    >
                                          {sel && "✓ "}
                                          {opt}
                                    </button>
                              );
                        })}
                  </div>
            </motion.div>
      );
};

export default MultiSelect;