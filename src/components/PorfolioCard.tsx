"use client";

import RightAngel from "@/icons/RightAngel";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export type arrtibutesType = {
      counting: string;
      label: string;
}

export type tagsType = {
      icon?: ReactNode;
      label: string;
}

export type ItemProps = {
      id: number;
      title: string;
      description: string;
      image: string;
      tags: tagsType[];
      link: string;
      arrtibutes: arrtibutesType[];
}

export interface PorfolioCardProps {
      data: ItemProps;
}

export default function PorfolioCard({ data }: PorfolioCardProps) {
      return (
            <motion.div
                  key={data.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  // whileHover={{ scale: 1.2, rotateX: 4, rotateY: -3 }}
                  // transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  viewport={{ once: true }}
                  className="rounded-xl bg-white/10 dark:bg-white/5 border border-white/20  shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] transition-all duration-500 overflow-hidden group"
            >
                  {/* 3D Glow Border */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600"></div>

                  {/* Content */}
                  <div className="flex flex-col items-stretch justify-stretch h-full">
                        {/* header image */}
                        <div className="w-full h-auto flex-shrink-0">
                              <Image
                                    src={data?.image}
                                    alt={data?.title}
                                    // fill
                                    width={300}
                                    height={200}
                                    // className="object-fill rounded-t-xl"
                                    className="object-fill w-full h-[200px] rounded-t-xl"
                              />
                        </div>
                        {/* content */}
                        <div className="p-6 flex flex-col items-between justify-between flex-grow gap-3">
                              {/* upper content */}
                              <div className="flex flex-col items-stretch justify-stretch gap-3">
                                    {/* title */}
                                    <h3 className="text-lg font-medium text-[var(--dark-blue-clr)] text-shadow m-0 p-0">
                                          {data.title}
                                    </h3>
                                    {/* attributes */}
                                    <div className="flex justify-start items-stretch group min-h-[40px]">
                                          {
                                                data?.arrtibutes?.length > 0 && data?.arrtibutes?.map((item, index) => (
                                                      <div
                                                            key={index}
                                                            className="flex justify-start items-stretch gap-1 flex-col border-r last:border-r-0 border-gray-300 pr-8 last:ps-8 first:ps-0 last:pr-0 text-left min-w-[100px] capitalize"
                                                      >
                                                            {/* counter */}
                                                            <h4 className="text-base font-medium mb-0 leading-tight">{item?.counting}</h4>
                                                            {/* label */}
                                                            <span className="text-sm font-normal mb-0 text-gray-700 leading-tight">{item?.label}</span>
                                                      </div>
                                                ))
                                          }
                                    </div>
                                    {/* description */}
                                    <p className="text-gray-500 text-sm m-0 p-0">
                                          {data?.description}
                                    </p>
                                    {/* tags */}
                                    <div className="flex flex-wrap gap-1.5">
                                          {data?.tags && data?.tags?.length > 0 && data?.tags?.map((tag, index) => (
                                                <div
                                                      key={index}
                                                      className="text-xs font-medium px-2 py-1 rounded-full bg-gray-200 flex justify-center items-center gap-0.5"

                                                >
                                                      <span>{tag?.icon}</span>
                                                      <span>{tag.label}</span>
                                                </div>
                                          ))}
                                    </div>
                              </div>
                              {/* read more */}
                              <div className="flex flex-col gap-3">
                                    <hr className="m-0" />
                                    {/* link */}
                                    <Link
                                          href={data?.link}
                                          target="_blank"
                                          className="text-base font-normal transition-opacity text-black flex justify-between items-center gap-2"
                                    >
                                          View Case Study → <span><RightAngel /></span>
                                    </Link>
                              </div>
                        </div>
                  </div>
            </motion.div>
      );
}