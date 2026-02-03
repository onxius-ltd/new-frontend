"use client";

import RightAngel from "@/icons/RightAngel";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export type attributesType = {
      counting: string;
      label: string;
}

export type tagsType = {
      icon?: ReactNode;
      label: string;
}

// export type ItemProps = {
//       id: number;
//       title: string;
//       description: string;
//       image: string;
//       tags: tagsType[];
//       link: string;
//       attributes: attributesType[];
// }

export type ItemProps = {
      id: number;
      title: string;
      description: string;
      image: string;
      tags: tagsType[];
      link: string;
      attributes: attributesType[];
      industry: string; // New
      role?: string;        // NEW
      engagement?: string;  // NEW
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
                  viewport={{ once: true }}
                  className="rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden h-full"
            >
                  {/* Image */}
                  <div className="relative w-full h-[220px] overflow-hidden border-slate-50">
                        <Image
                              src={data.image}
                              alt={data.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between h-full gap-3">

                        {/* Top Section */}
                        <div className="flex flex-col gap-2">

                              {/* Industry Label */}
                              <span className="text-xs uppercase tracking-widest text-orange-500 font-semibold">
                                    {data.industry}
                              </span>

                              {/* Title */}
                              <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                                    {data.title}
                              </h3>

                              {/* Role & Engagement */}
                              {(data.role || data.engagement) && (
                                    <p className="text-sm text-gray-500">
                                          {data.role} • {data.engagement}
                                    </p>
                              )}

                              {/* Description */}
                              <p className="text-sm text-gray-600 leading-relaxed">
                                    {data.description}
                              </p>

                              {/* Attributes */}
                              {data.attributes?.length > 0 && (
                                    <div className="flex flex-wrap gap-6 pt-2">
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
                              <div className="flex flex-wrap gap-2 pt-2">
                                    {data.tags?.map((tag, index) => (
                                          <div
                                                key={index}
                                                className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700 flex items-center gap-1"
                                          >
                                                {tag.icon && <span>{tag.icon}</span>}
                                                <span>{tag.label}</span>
                                          </div>
                                    ))}
                              </div>

                        </div>
                        {/* Footer */}
                        {/* <div className="pt-4 border-t border-gray-200">
                              <Link
                                    href={data.link}
                                    target="_blank"
                                    className="flex justify-between items-center text-sm font-medium text-gray-900 hover:text-[var(--sky-clr)] transition-colors"
                              >
                                    View Case Study
                                    <RightAngel />
                              </Link>
                        </div> */}
                  </div>
            </motion.div>
      );
}


// export default function PorfolioCard({ data }: PorfolioCardProps) {
//       return (
//             <motion.div
//                   key={data.id}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   // whileHover={{ scale: 1.2, rotateX: 4, rotateY: -3 }}
//                   // transition={{ type: "spring", stiffness: 100, damping: 15 }}
//                   viewport={{ once: true }}
//                   className="rounded-xl bg-white/10 dark:bg-white/5 border border-white/20  shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] transition-all duration-500 overflow-hidden group"
//             >
//                   {/* 3D Glow Border */}
//                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600"></div>

//                   {/* Content */}
//                   <div className="flex flex-col items-stretch justify-stretch h-full">
//                         {/* header image */}
//                         <div className="w-full h-auto flex-shrink-0">
//                               <Image
//                                     src={data?.image}
//                                     alt={data?.title}
//                                     // fill
//                                     width={300}
//                                     height={200}
//                                     // className="object-fill rounded-t-xl"
//                                     className="object-fill w-full h-[200px] rounded-t-xl border border-[#abadb0]"
//                               />
//                         </div>
//                         {/* content */}
//                         <div className="p-6 flex flex-col items-between justify-between flex-grow gap-3">
//                               {/* upper content */}
//                               <div className="flex flex-col items-stretch justify-stretch gap-3">
//                                     {/* title */}
//                                     <h3 className="text-lg font-medium text-[var(--dark-blue-clr)] text-shadow m-0 p-0">
//                                           {data.title}
//                                     </h3>
//                                     {/* attributes */}
//                                     <div className="flex justify-start items-stretch group min-h-[40px]">
//                                           {
//                                                 data?.attributes?.length > 0 && data?.attributes?.map((item, index) => (
//                                                       <div
//                                                             key={index}
//                                                             className="flex justify-start items-stretch gap-1 flex-col border-r last:border-r-0 border-gray-300 pr-8 last:ps-8 first:ps-0 last:pr-0 text-left min-w-[100px] capitalize"
//                                                       >
//                                                             {/* counter */}
//                                                             <h4 className="text-base font-medium mb-0 leading-tight">{item?.counting}</h4>
//                                                             {/* label */}
//                                                             <span className="text-sm font-normal mb-0 text-gray-700 leading-tight">{item?.label}</span>
//                                                       </div>
//                                                 ))
//                                           }
//                                     </div>
//                                     {/* description */}
//                                     <p className="text-gray-500 text-sm m-0 p-0">
//                                           {data?.description}
//                                     </p>
//                                     {/* tags */}
//                                     <div className="flex flex-wrap gap-1.5">
//                                           {data?.tags && data?.tags?.length > 0 && data?.tags?.map((tag, index) => (
//                                                 <div
//                                                       key={index}
//                                                       className="text-xs font-medium px-2 py-1 rounded-full bg-gray-200 flex justify-center items-center gap-0.5"

//                                                 >
//                                                       <span>{tag?.icon}</span>
//                                                       <span>{tag.label}</span>
//                                                 </div>
//                                           ))}
//                                     </div>
//                               </div>
//                               {/* read more */}
//                               <div className="flex flex-col gap-3">
//                                     <hr className="m-0" style={{color: "#abadb0"}} />
//                                     {/* link */}
//                                     <Link
//                                           href={data?.link}
//                                           target="_blank"
//                                           className="text-base font-normal transition-opacity text-black flex justify-between items-center gap-2"
//                                     >
//                                           View Live → <span><RightAngel /></span>
//                                     </Link>
//                               </div>
//                         </div>
//                   </div>
//             </motion.div>
//       );
// }