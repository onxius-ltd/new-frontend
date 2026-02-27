"use client";

import { CSSProperties, useRef } from "react";
import {
      motion,
      useScroll,
      useTransform,
      useInView,
      useSpring,
} from "framer-motion";

/**
 * Onxius Brand Color System (extracted from logo)
 * ─────────────────────────────────────────────────
 * Background  : #0D0D0D  (near-black)
 * Orange      : #F4622A  (logo swirl start)
 * Pink/Magenta: #D4307A  (logo swirl mid)
 * Purple      : #7B2FBE  (logo swirl end)
 * Card surface: rgba(255,255,255,0.03)
 * Card border : rgba(255,255,255,0.07)
 * Text primary: #FFFFFF
 * Text muted  : rgba(255,255,255,0.45)
 */

// Brand gradient stops — used everywhere
const G = "linear-gradient(135deg, #F4622A 0%, #D4307A 50%, #7B2FBE 100%)";
const G_H = "linear-gradient(135deg, #F4622A 0%, #D4307A 100%)"; // orange→pink
const G_M = "linear-gradient(135deg, #D4307A 0%, #7B2FBE 100%)"; // pink→purple
const G_FULL = "linear-gradient(90deg, #F4622A, #D4307A, #7B2FBE)";

type FeatureItem = {
      id: number;
      label: string;
      gradient: string;
      glowColor: string;
      delay: number;
      svgContent: React.ReactNode
}

const features: FeatureItem[] = [
      {
            id: 1,
            label: "Customers find you on Google",
            gradient: G_H,
            glowColor: "rgba(244,98,42,0.5)",
            delay: 0,
            svgContent: (
                  <div className="relative flex items-center justify-center w-full h-full">
                        <span className="text-4xl drop-shadow-lg select-none">🗺️</span>
                        <span className="absolute -top-1 -right-1 text-xl select-none">🔍</span>
                  </div>
            ),
      },
      {
            id: 2,
            label: "Customers message you on WhatsApp",
            gradient: G,
            glowColor: "rgba(212,48,122,0.5)",
            delay: 0.08,
            svgContent: (
                  <div className="relative flex items-center justify-center w-full h-full">
                        <span className="text-4xl drop-shadow-lg select-none">📱</span>
                        <span className="absolute -top-1 -right-1 text-2xl select-none">💬</span>
                  </div>
            ),
      },
      {
            id: 3,
            label: "Customers book online",
            gradient: G_M,
            glowColor: "rgba(123,47,190,0.5)",
            delay: 0.16,
            svgContent: (
                  <div className="relative flex items-center justify-center w-full h-full">
                        <span className="text-4xl drop-shadow-lg select-none">📅</span>
                        <span className="absolute -bottom-1 -right-1 text-xl select-none">✅</span>
                  </div>
            ),
      },
      {
            id: 4,
            label: "Customers order online",
            gradient: G_H,
            glowColor: "rgba(244,98,42,0.5)",
            delay: 0.24,
            svgContent: (
                  <div className="relative flex items-center justify-center w-full h-full">
                        <span className="text-4xl drop-shadow-lg select-none">🛍️</span>
                        <span className="absolute -bottom-1 -right-1 text-xl select-none">📦</span>
                  </div>
            ),
      },
      {
            id: 5,
            label: "You don't miss calls",
            gradient: G,
            glowColor: "rgba(212,48,122,0.5)",
            delay: 0.32,
            svgContent: (
                  <div className="relative flex items-center justify-center w-full h-full">
                        <span className="text-4xl drop-shadow-lg select-none">📞</span>
                        <span className="absolute -top-1 -right-1 text-xl select-none">🔔</span>
                  </div>
            ),
      },
      {
            id: 6,
            label: "You look professional",
            gradient: G_M,
            glowColor: "rgba(123,47,190,0.5)",
            delay: 0.40,
            svgContent: (
                  <div className="relative flex items-center justify-center w-full h-full">
                        <span className="text-4xl drop-shadow-lg select-none">💼</span>
                        <span className="absolute -top-1 -right-1 text-xl select-none">⭐</span>
                  </div>
            ),
      },
];

/* ─── Card ─────────────────────────────────────────── */
function FeatureCard({ feature }: { feature: FeatureItem }) {
      const ref = useRef(null);
      const inView = useInView(ref, { once: true, margin: "-60px" });

      return (
            <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 48 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.65, delay: feature.delay, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8, scale: 1.025 }}
                  className="relative group cursor-pointer h-full"
            >
                  {/* Hover glow — matches card's gradient stop */}
                  <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        style={{
                              background: feature.glowColor,
                              filter: "blur(28px)",
                              transform: "scale(0.8) translateY(16px)",
                        }}
                  />

                  {/* Glass card */}
                  <div
                        className="relative h-full rounded-2xl flex flex-col items-center gap-6 p-7 overflow-hidden"
                        style={{
                              background: "rgba(255,255,255,0.03)",
                              border: "1px solid rgba(255,255,255,0.07)",
                              backdropFilter: "blur(16px)",
                              WebkitBackdropFilter: "blur(16px)",
                        }}
                  >
                        {/* Top accent bar — brand gradient */}
                        <div
                              className="absolute top-0 left-0 right-0 h-[2px]"
                              style={{ background: feature.gradient }}
                        />

                        {/* Icon box */}
                        <motion.div
                              whileHover={{ rotate: [0, -6, 6, -3, 0] }}
                              transition={{ duration: 0.45 }}
                              className="relative w-[88px] h-[88px] rounded-xl flex items-center justify-center flex-shrink-0"
                              style={{
                                    background: feature.gradient,
                                    boxShadow: `0 8px 32px ${feature.glowColor}`,
                              }}
                        >
                              {/* Inner shine */}
                              <div
                                    className="absolute inset-0 rounded-xl opacity-30"
                                    style={{
                                          background:
                                                "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 55%)",
                                    }}
                              />
                              <div className="relative w-14 h-14">{feature.svgContent}</div>
                        </motion.div>

                        {/* Label */}
                        <p
                              className="text-center font-semibold text-[15px] leading-snug"
                              style={{ color: "rgba(255,255,255,0.88)" }}
                        >
                              {feature.label}
                        </p>

                        {/* Card hover shimmer */}
                        <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                              style={{
                                    background:
                                          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 45%, rgba(255,255,255,0.02) 100%)",
                              }}
                        />
                  </div>
            </motion.div>
      );
}

interface OrbProps {
      style: CSSProperties;
      delay?: number;
}

/* ─── Floating ambient orb ─────────────────────────── */
function Orb({ style, delay = 0 }: OrbProps) {
      return (
            <motion.div
                  className="absolute rounded-full pointer-events-none"
                  style={{ filter: "blur(72px)", ...style }}
                  animate={{ y: [0, -22, 0], x: [0, 10, 0] }}
                  transition={{ duration: 10 + delay, repeat: Infinity, ease: "easeInOut", delay }}
            />
      );
}

/* ─── Main Section ──────────────────────────────────── */
export default function WeHelpsToGrow() {
      const sectionRef = useRef(null);
      const { scrollYProgress } = useScroll({
            target: sectionRef,
            offset: ["start end", "end start"],
      });
      const smooth = useSpring(scrollYProgress, { stiffness: 70, damping: 22 });

      // Parallax transforms
      const bgY = useTransform(smooth, [0, 1], ["0%", "-15%"]);
      const orbsY = useTransform(smooth, [0, 1], ["0%", "-25%"]);
      const gridY = useTransform(smooth, [0, 1], ["0%", "-20%"]);
      const headerY = useTransform(smooth, [0, 0.6], ["0%", "-10%"]);
      const headerOp = useTransform(smooth, [0, 0.75], [1, 0.65]);

      const titleRef = useRef(null);
      const titleInView = useInView(titleRef, { once: true });

      return (
            <section
                  ref={sectionRef}
                  className="relative min-h-screen overflow-hidden flex flex-col"
                  style={{ background: "#0D0D0D", fontFamily: "'Sora', 'DM Sans', sans-serif" }}
            >

                  {/* ══ LAYER 0 — deep background gradient bloom ══ */}
                  <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 pointer-events-none">
                        {/* Top bloom: pink bleeding from top-centre */}
                        <div
                              className="absolute inset-0"
                              style={{
                                    background:
                                          "radial-gradient(ellipse 90% 50% at 50% -10%, rgba(212,48,122,0.20) 0%, rgba(123,47,190,0.10) 50%, transparent 80%)",
                              }}
                        />
                        {/* Bottom-left: warm orange breath */}
                        <div
                              className="absolute"
                              style={{
                                    bottom: 0, left: 0,
                                    width: "60%", height: "50%",
                                    background:
                                          "radial-gradient(ellipse at 10% 100%, rgba(244,98,42,0.14) 0%, transparent 65%)",
                              }}
                        />
                        {/* Bottom-right: purple echo */}
                        <div
                              className="absolute"
                              style={{
                                    bottom: 0, right: 0,
                                    width: "50%", height: "45%",
                                    background:
                                          "radial-gradient(ellipse at 90% 100%, rgba(123,47,190,0.12) 0%, transparent 65%)",
                              }}
                        />
                  </motion.div>

                  {/* ══ LAYER 1 — floating ambient orbs ══ */}
                  <motion.div style={{ y: orbsY }} className="absolute inset-0 z-10 pointer-events-none">
                        <Orb delay={0} style={{ top: "-2%", left: "-4%", width: 360, height: 360, background: "rgba(244,98,42,0.18)" }} />
                        <Orb delay={2} style={{ top: "8%", right: "-6%", width: 400, height: 400, background: "rgba(123,47,190,0.16)" }} />
                        <Orb delay={4} style={{ top: "55%", left: "2%", width: 280, height: 280, background: "rgba(212,48,122,0.14)" }} />
                        <Orb delay={1.5} style={{ top: "40%", right: "4%", width: 220, height: 220, background: "rgba(244,98,42,0.12)" }} />
                  </motion.div>

                  {/* ══ LAYER 2 — subtle dot-grid texture ══ */}
                  <motion.div style={{ y: gridY }} className="absolute inset-0 z-10 pointer-events-none" aria-hidden>
                        <svg width="100%" height="100%">
                              <defs>
                                    <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                                          <circle cx="1" cy="1" r="1" fill="white" opacity="0.12" />
                                    </pattern>
                              </defs>
                              <rect width="100%" height="100%" fill="url(#dots)" />
                        </svg>
                  </motion.div>

                  {/* ══ CONTENT ══ */}
                  <div className="relative z-20 flex flex-col items-center px-6 pt-20 pb-0">

                        {/* Title */}
                        <motion.div
                              ref={titleRef}
                              style={{ y: headerY, opacity: headerOp }}
                              className="text-center mb-14 max-w-3xl w-full"
                        >
                              {/* Badge pill */}
                              <motion.div
                                    initial={{ opacity: 0, scale: 0.85 }}
                                    animate={titleInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.5 }}
                                    className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                                    style={{
                                          background: "rgba(212,48,122,0.12)",
                                          border: "1px solid rgba(212,48,122,0.25)",
                                          color: "#D4307A",
                                    }}
                              >
                                    <span
                                          className="w-1.5 h-1.5 rounded-full"
                                          style={{ background: G_FULL }}
                                    />
                                    Grow Your Business Effortlessly
                              </motion.div>

                              {/* Heading */}
                              <motion.h2
                                    initial={{ opacity: 0, y: 28 }}
                                    animate={titleInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-0"
                                    style={{ color: "#FFFFFF" }}
                              >
                                    How{" "}
                                    {/* "Onxius" — exact logo gradient */}
                                    <span className="relative inline-block">
                                          <span
                                                style={{
                                                      background: G_FULL,
                                                      WebkitBackgroundClip: "text",
                                                      WebkitTextFillColor: "transparent",
                                                      backgroundClip: "text",
                                                      filter: "drop-shadow(0 0 20px rgba(212,48,122,0.35))",
                                                }}
                                          >
                                                Onxius
                                          </span>
                                          {/* Animated underline — brand gradient */}
                                          <motion.span
                                                className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full block"
                                                style={{ background: G_FULL, transformOrigin: "left" }}
                                                initial={{ scaleX: 0 }}
                                                animate={titleInView ? { scaleX: 1 } : {}}
                                                transition={{ duration: 0.75, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                          />
                                    </span>
                                    {" "}Helps Your{" "}
                                    {/* "Business" — lighter tinted white */}
                                    <span style={{ color: "rgba(255,255,255,0.75)" }}>Business</span>
                              </motion.h2>

                              {/* Divider */}
                              <motion.div
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    animate={titleInView ? { scaleX: 1, opacity: 1 } : {}}
                                    transition={{ duration: 0.9, delay: 0.35 }}
                                    className="mt-7 mx-auto rounded-full"
                                    style={{
                                          height: 1,
                                          width: 180,
                                          background:
                                                "linear-gradient(90deg, transparent 0%, #F4622A 20%, #D4307A 50%, #7B2FBE 80%, transparent 100%)",
                                          transformOrigin: "center",
                                    }}
                              />
                        </motion.div>

                        {/* ── Feature Grid ── */}
                        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-24">
                              {features?.length > 0 && features.map((feature) => (
                                    <FeatureCard key={feature.id} feature={feature} />
                              ))}
                        </div>
                  </div>

                  {/* ══ LAYER 3 — brand-colored sparkle particles ══ */}
                  <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden" aria-hidden>
                        {Array.from({ length: 30 }).map((_, i) => {
                              const colors = ["#F4622A", "#D4307A", "#7B2FBE"];
                              const color = colors[i % 3];
                              const size = i % 5 === 0 ? 2.5 : 1.5;
                              return (
                                    <motion.div
                                          key={i}
                                          className="absolute rounded-full"
                                          style={{
                                                width: size,
                                                height: size,
                                                left: `${(i * 3.33 + 1.5) % 100}%`,
                                                top: `${(i * 4.07 + 2.5) % 88}%`,
                                                background: color,
                                                boxShadow: `0 0 4px ${color}`,
                                          }}
                                          animate={{
                                                opacity: [0.08, 0.9, 0.08],
                                                scale: [1, 2, 1],
                                          }}
                                          transition={{
                                                duration: 2.2 + (i % 5) * 0.55,
                                                repeat: Infinity,
                                                delay: (i * 0.25) % 5.5,
                                                ease: "easeInOut",
                                          }}
                                    />
                              );
                        })}
                  </div>

            </section>
      );
}
