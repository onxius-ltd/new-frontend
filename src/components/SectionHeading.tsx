// ─── Section Heading ──────────────────────────────────────────────────────────
"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "./ContactForm2";

const SectionHeading = ({ label, index }: { label: string; index: number }) => (
      <motion.div
            variants={fadeUp}
            custom={index}
            initial="hidden"
            animate="visible"
            className="col-span-2 flex items-center gap-2 mt-6 mb-0.5"
      >
            <div
                  className="w-1 h-5 rounded-full flex-shrink-0"
                  style={{ background: "var(--sky-clr)" }}
            />
            <span
                  className="text-lg font-semibold tracking-wide"
                  style={{ color: "var(--metalic-gray-clr)" }}
            >
                  {label}
            </span>
            {/* <span
                  className="h-px flex-1"
                  style={{ background: "var(--light-gray-clr)" }}
            /> */}
      </motion.div>
);

export default SectionHeading;