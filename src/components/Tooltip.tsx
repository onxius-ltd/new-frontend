// ─── Tooltip ──────────────────────────────────────────────────────────────────
"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Tooltip = ({ text }: { text: string }) => {
      const [open, setOpen] = useState(false);
      const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

      function handleMouseEnter() {
            if (hideTimer.current) clearTimeout(hideTimer.current);
            setOpen(true);
      }

      function handleMouseLeave() {
            hideTimer.current = setTimeout(() => setOpen(false), 1000);
      }

      return (
            <span className="relative inline-flex ml-1.5 align-middle">
                  <span
                        // type="button"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="w-[17px] h-[17px] rounded-full text-[10px] leading-none flex items-center justify-center border transition-opacity hover:opacity-70"
                        style={{ borderColor: "var(--sky-clr)", color: "var(--sky-clr)", background: "#fff7f2" }}
                  >
                        ?
                  </span>
                  <AnimatePresence>
                        {open && (
                              <motion.div
                                    initial={{ opacity: 0, y: 4, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 4, scale: 0.96 }}
                                    transition={{ duration: 0.15 }}
                                    onMouseEnter={handleMouseEnter}   // hovering tooltip itself cancels the timer
                                    onMouseLeave={handleMouseLeave}
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 rounded-xl px-2.5 py-2 text-xs shadow-lg z-50 normal-case font-normal leading-normal tracking-wide"
                                    style={{ background: "var(--metalic-gray-clr)", color: "#fff", fontFamily: "var(--bs-body-font-family) !important" }}
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