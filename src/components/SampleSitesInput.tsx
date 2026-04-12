// ─── Sample Sites Multi-input ─────────────────────────────────────────────────
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Tooltip from "./Tooltip";
import { fadeUp } from "./ContactForm2";

const SampleSitesInput = ({
      value,
      onChange,
      index,
}: {
      value: string[];
      onChange: (v: string[]) => void;
      index: number;
}) => {
      const [input, setInput] = useState("");
      const add = () => {
            const t = input.trim();
            if (t && !value.includes(t)) onChange([...value, t]);
            setInput("");
      };
      const remove = (i: number) => onChange(value.filter((_, idx) => idx !== i));
      return (
            <motion.div
                  variants={fadeUp}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  className="col-span-2"
            >
                  <p
                        className="text-[11px] uppercase tracking-[0.18em] mb-1 font-semibold"
                        style={{ color: "var(--dark-grey-clr)" }}
                  >
                        Do you have any sample websites in mind?
                        <Tooltip text="Share any websites you like the look or feel of so we can understand your style and design preferences. This helps us design faster and closer to your vision. Example I like how amazon.co.uk displays products or I want a clean modern style like apple.com." />
                  </p>
                  <p className="text-[11px] mb-3" style={{ color: "var(--dark-grey-clr)", opacity: 0.6 }}>
                        Type a URL or site name then press Enter or tap +
                  </p>
                  <div
                        className="rounded-xl p-3"
                        style={{ background: "#f9f9f9", border: `1.5px solid var(--light-gray-clr)` }}
                  >
                        {value.length > 0 && (
                              <div className="flex flex-wrap gap-2 mb-3">
                                    {value.map((site, i) => (
                                          <span
                                                key={i}
                                                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                                                style={{
                                                      background: "rgba(241,128,39,0.08)",
                                                      color: "var(--sky-clr)",
                                                      border: "1px solid rgba(241,128,39,0.25)",
                                                }}
                                          >
                                                🌐 {site}
                                                <button
                                                      type="button"
                                                      onClick={() => remove(i)}
                                                      className="font-bold hover:opacity-60 transition-opacity"
                                                      style={{ color: "var(--sky-clr)" }}
                                                >
                                                      ×
                                                </button>
                                          </span>
                                    ))}
                              </div>
                        )}
                        <div className="flex gap-2 items-center">
                              <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => {
                                          if (e.key === "Enter") {
                                                e.preventDefault();
                                                add();
                                          }
                                    }}
                                    placeholder="e.g. https://apple.com or Airbnb style"
                                    className="flex-1 text-sm outline-none bg-transparent"
                                    style={{ color: "var(--metalic-gray-clr)" }}
                              />
                              <button
                                    type="button"
                                    onClick={add}
                                    className="px-3.5 py-1.5 rounded-lg text-sm font-bold transition-opacity hover:opacity-90"
                                    style={{ background: "var(--sky-clr)", color: "#fff" }}
                              >
                                    +
                              </button>
                        </div>
                  </div>
            </motion.div>
      );
};

export default SampleSitesInput;