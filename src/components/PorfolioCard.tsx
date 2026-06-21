"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export type attributesType = {
      counting: string;
      label: string;
};

export type tagsType = {
      icon?: ReactNode;
      label: string;
      is_active?: boolean;
};

export type ItemProps = {
      id: number;
      title: string;
      description: string;
      list?: string[];
      image: string;
      tags: tagsType[];
      link: string;
      attributes: attributesType[];
      industry: string;
      role?: string;
      engagement?: string;
};

export interface PortfolioCardProps {
      data: ItemProps;
      delay?: number;
}

function CardImage({ image, title, link }: { image: string; title: string; link: string }) {
      const [imgError, setImgError] = useState(false);

      const img = !imgError ? (
            <Image
                  src={image}
                  alt={title ?? "Portfolio project"}
                  fill
                  className="object-fill"
                  loading="lazy"
                  onError={() => setImgError(true)}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={75}
            />
      ) : (
            <ImagePlaceholder title={title} />
      );

      return (
            <div className="relative w-full aspect-video bg-[#f0f0f0] overflow-hidden flex-shrink-0">
                  {link ? (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                              {img}
                        </a>
                  ) : (
                        img
                  )}
            </div>
      );
}

export default function PortfolioCard({ data, delay = 0 }: PortfolioCardProps) {
      const ref = useRef<HTMLDivElement>(null);
      const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });

      return (
            <motion.article
                  ref={ref}
                  initial={{ opacity: 0, y: 32 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                  transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white border border-[#e8e8e8] rounded-sm overflow-hidden flex flex-col h-full
                 transition-[box-shadow,transform] duration-200 ease-in-out
                 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] hover:-translate-y-0.5"
            >
                  {/* Image — clickable if link exists */}
                  <CardImage image={data.image} title={data.title} link={data.link} />

                  {/* Body */}
                  <div className="px-7 pt-7 flex flex-col gap-3 flex-1">

                        {/* Industry */}
                        <p className="m-0 text-[10px] font-bold tracking-[0.12em] uppercase text-[#9b9b9b]">
                              {data.industry}
                        </p>

                        {/* Title */}
                        <h3 className="m-0 text-[22px] font-extrabold text-[#111] leading-[1.15] tracking-[0.04em] ">
                              {/* font-['Bebas_Neue',cursive] */}
                              {data.title}
                        </h3>

                        {/* Engagement / tagline */}
                        {data.engagement && (
                              <p className="m-0 text-sm italic text-[#444] leading-[1.5] font-['Georgia'] font-semibold tracking-wider">
                                    {data.engagement}
                              </p>
                        )}

                        {/* Description */}
                        <p className="m-0 text-[13.5px] text-[#555] leading-[1.65]">
                              {data.description}
                        </p>

                        {/* Checklist */}
                        {data.list && data.list.length > 0 && (
                              <ul className="m-0 p-0 list-none flex flex-col gap-1.5">
                                    {data.list.map((li, i) => (
                                          <li key={i} className="text-[12.5px] text-[#333] leading-[1.55]">
                                                {li}
                                          </li>
                                    ))}
                              </ul>
                        )}

                  </div>

                  {/* Stats */}
                  {data.attributes && data.attributes.length > 0 && (
                        <div className="mx-7 mt-5 flex border-t border-b border-[#efefef]">
                              {data.attributes.map((attr, i) => (
                                    <div
                                          key={i}
                                          className={`flex-1 py-3.5 flex flex-col
                ${i < data.attributes.length - 1 ? "border-r border-[#efefef] pr-4" : ""}
                ${i > 0 ? "pl-4" : ""}`}
                                    >
                                          <span className="text-[20px] font-extrabold text-[#111] leading-none tracking-[0.03em] font-['Georgia']">
                                                {/* font-['Bebas_Neue',cursive] */}
                                                {attr.counting}
                                          </span>
                                          <span className="text-[9px] font-bold tracking-[0.1em] uppercase text-[#999] mt-1">
                                                {attr.label}
                                          </span>
                                    </div>
                              ))}
                        </div>
                  )}

                  {/* Tags + Visit link */}
                  <div className="px-7 pt-4 pb-4 flex items-center justify-between gap-3 flex-wrap">
                        <div className="flex flex-wrap gap-1.5 flex-1">
                              {data.tags.map((tag, i) => (
                                    <span
                                          key={i}
                                          className="inline-flex items-center gap-1 text-[11px]"
                                          style={{
                                                color: tag.is_active ? "#111" : "#666",
                                                fontWeight: tag.is_active ? 700 : 400,
                                          }}
                                    >
                                          {tag.icon && (
                                                <span className="flex items-center text-[#888]">{tag.icon}</span>
                                          )}
                                          {tag.label}
                                          {i < data.tags.length - 1 && (
                                                <span className="text-[#ccc] ml-0.5">·</span>
                                          )}
                                    </span>
                              ))}
                        </div>

                        {/* site link */}

                        {data.link && (
                              <Link
                                    href={data.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="visit-link flex-shrink-0 text-[11px] font-bold tracking-[0.08em] uppercase no-underline border-b border-[#111] pb-px"
                              >
                                    Visit →
                              </Link>
                        )}

                        {/* {data.link && (
                              <a
                                    href={data.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-shrink-0 text-[11px] font-bold tracking-[0.08em] uppercase text-[#111] no-underline border-b border-[#111] pb-px transition-opacity duration-150 hover:opacity-50" style={{ color: "var(--metalic-gray-clr) !important", }}
                              >
                                    Visit →
                              </a>
                        )} */}
                  </div>

                  {/* CTA */}
                  <div className="px-7 pb-6">
                        <Link
                              href="/get-free-quotation"
                              className="inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-wide  text-white bg-[#111] hover:bg-[var(--sky-clr)] transition-colors duration-200 rounded-lg px-4 py-2 no-underline"
                        >
                              Start a Project →
                              {/* Get a Free Quote → */}
                        </Link>
                  </div>
            </motion.article >
      );
}

// ─── Fallback when image fails to load ────────────────────────────────────
function ImagePlaceholder({ title }: { title: string }) {
      const initials = title
            .split(" ")
            .slice(0, 2)
            .map((w) => w[0])
            .join("");

      return (
            <div
                  className="w-full h-full flex items-center justify-center text-[3rem] font-extrabold tracking-[0.1em]"
                  style={{
                        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
                        color: "rgba(255,255,255,0.15)",
                        fontFamily: "'Bebas Neue', cursive",
                  }}
            >
                  {initials}
            </div>
      );
}
