"use client";

import Image from "next/image";
import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export type attributesType = {
      counting: string;
      label: string;
};

export type tagsType = {
      icon?: ReactNode;
      label: string;
};

export type ItemProps = {
      id: number;
      title: string;
      description: string;
      image: string;
      tags: tagsType[];
      link: string;
      attributes: attributesType[];
      industry: string;
      role?: string;
      engagement?: string;
};

export interface PorfolioCardProps {
      data: ItemProps;
}

export default function PorfolioCard({ data }: PorfolioCardProps) {
      const ref = useRef<HTMLDivElement>(null);
      // ── FIX: use useInView with a ref instead of whileInView on motion.div.
      // whileInView triggers a re-render exactly when the element enters the
      // viewport on mobile scroll, which looks like a blink/flash. useInView
      // with once:true and a generous margin fires earlier so the animation
      // is already complete before the card is fully visible.
      const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });

      return (
            <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 32 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden h-full flex flex-col"
            >
                  {/* Image */}
                  <div className="relative w-full h-[250px] overflow-hidden flex-shrink-0">
                        <Image
                              src={data.image}
                              alt={data.title ?? "ONXIUS PROJECT"}
                              fill
                              className="object-fill transition-transform duration-700 hover:scale-105"
                              loading="lazy"
                        />
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-6 flex flex-col gap-2 flex-1">
                        {/* Industry */}
                        <span className="text-xs uppercase tracking-widest text-orange-500 font-semibold">
                              {data.industry}
                        </span>

                        {/* Title */}
                        <h3 className="text-xl font-semibold text-gray-900 leading-snug m-0">
                              {data.title}
                        </h3>
                        {/* Role & Engagement */}
                        {(data.role || data.engagement) && (
                              <p className="text-sm text-gray-500 m-0">
                                    {data.role}
                                    {data.role && data.engagement && " • "}
                                    {data.engagement}
                              </p>
                        )}
                        {/* Description */}
                        <p className="text-sm text-gray-600 leading-relaxed m-0">
                              {data.description}
                        </p>
                        {/* Attributes */}
                        {data.attributes?.length > 0 && (
                              <div className="flex flex-wrap gap-6 pt-1">
                                    {data.attributes.map((item, index) => (
                                          <div key={index} className="flex flex-col">
                                                <span className="text-lg font-semibold text-gray-900">
                                                      {item.counting}
                                                </span>
                                                <span className="text-xs text-gray-500 uppercase tracking-wide">
                                                      {item.label}
                                                </span>
                                          </div>
                                    ))}
                              </div>
                        )}
                        {/* Tags */}
                        {data.tags?.length > 0 && (
                              <div className="flex flex-wrap gap-1.5 pt-1 mt-auto">
                                    {data.tags.map((tag, index) => (
                                          <div
                                                key={index}
                                                className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700 flex items-center gap-1"
                                          >
                                                {tag.icon && <span>{tag.icon}</span>}
                                                <span>{tag.label}</span>
                                          </div>
                                    ))}
                              </div>
                        )}
                        {/* CTA */}
                        <div className="mt-4 text-shadow-2xs">
                              <Link href="/contact" className="butn-custom-outline border rounded-pill py-2 px-4">Get a Free Quote &#x2799;</Link>
                        </div>
                  </div>
            </motion.div>
      );
}
