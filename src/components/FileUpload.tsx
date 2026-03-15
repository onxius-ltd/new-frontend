// ─── File Upload ──────────────────────────────────────────────────────────────
"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "./ContactForm2";

const FileUpload = ({
      name,
      label,
      onChange,
      index,
}: {
      name: string;
      label: string;
      onChange: (name: string, file: File | null) => void;
      index: number;
}) => {
      const ref = useRef<HTMLInputElement>(null);
      const [fileName, setFileName] = useState<string | null>(null);
      return (
            <motion.div
                  variants={fadeUp}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  className="col-span-2"
            >
                  <p
                        className="text-[11px] uppercase tracking-[0.18em] mb-2 font-semibold"
                        style={{ color: "var(--dark-grey-clr)" }}
                  >
                        {label}
                  </p>
                  <button
                        type="button"
                        onClick={() => ref.current?.click()}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all w-full"
                        style={{
                              border: `1.5px dashed var(--light-gray-clr)`,
                              background: "#f9f9f9",
                              color: "var(--dark-grey-clr)",
                        }}
                        onMouseEnter={(e) => {
                              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--sky-clr)";
                              (e.currentTarget as HTMLButtonElement).style.color = "var(--sky-clr)";
                        }}
                        onMouseLeave={(e) => {
                              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--light-gray-clr)";
                              (e.currentTarget as HTMLButtonElement).style.color = "var(--dark-grey-clr)";
                        }}
                  >
                        <span className="text-xl">📎</span>
                        <span>{fileName ?? "Click to upload logo (PNG, JPG, SVG…)"}</span>
                  </button>
                  <input
                        ref={ref}
                        type="file"
                        name={name}
                        className="hidden"
                        accept="image/*,.svg,.pdf"
                        onChange={(e) => {
                              const file = e.target.files?.[0] ?? null;
                              setFileName(file?.name ?? null);
                              onChange(name, file);
                        }}
                  />
            </motion.div>
      );
};

export default FileUpload;