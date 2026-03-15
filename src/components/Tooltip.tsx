// ─── Tooltip ──────────────────────────────────────────────────────────────────
"use client";
import React, { useState, useRef, ChangeEvent, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Tooltip = ({ text }: { text: string }) => {
      const [open, setOpen] = useState(false);
      return (
            <span className="relative inline-flex ml-1.5 align-middle">
                  <button
                        type="button"
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}
                        className="w-[17px] h-[17px] rounded-full text-[10px] leading-none flex items-center justify-center border transition-opacity hover:opacity-70"
                        style={{
                              borderColor: "var(--sky-clr)",
                              color: "var(--sky-clr)",
                              background: "#fff7f2",
                        }}
                  >
                        ?
                  </button>
                  <AnimatePresence>
                        {open && (
                              <motion.div
                                    initial={{ opacity: 0, y: 4, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 4, scale: 0.96 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 rounded-xl px-3 py-2.5 text-[11px] shadow-2xl z-50 pointer-events-none leading-relaxed"
                                    style={{ background: "var(--metalic-gray-clr)", color: "#fff" }}
                              >
                                    {text}
                                    <span
                                          className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent"
                                          style={{ borderTopColor: "var(--metalic-gray-clr)" }}
                                    />
                              </motion.div>
                        )}
                  </AnimatePresence>
            </span>
      );
};

export default Tooltip;