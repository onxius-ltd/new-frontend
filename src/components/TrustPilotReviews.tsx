"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import reviews from "@/data/trustpilot-reviews.json";

type TrustpilotReview = {
  id: string;
  author: string;
  title: string;
  text: string;
  rating: number;
  date: string;
  sourceUrl: string;
};

const trustpilotReviews = reviews as TrustpilotReview[];

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase() ?? "").join("") || "U";
}

function renderStars(rating: number) {
  const safeRating = Math.max(0, Math.min(5, Math.round(rating)));
  return "★".repeat(safeRating) + "☆".repeat(5 - safeRating);
}

function getCardWidthClass(length: number) {
  if (length <= 1) return "basis-full";
  if (length === 2) return "basis-full md:basis-1/2";
  if (length === 3) return "basis-[88%] sm:basis-[70%] md:basis-1/2 xl:basis-1/3";
  return "basis-[88%] sm:basis-[68%] md:basis-1/2 xl:basis-1/4";
}

export default function TrustPilotReviews() {
  if (!trustpilotReviews.length) {
    return null;
  }

  const trackRef = useRef<HTMLDivElement | null>(null);
  const averageRating = (
    trustpilotReviews.reduce((sum, review) => sum + review.rating, 0) /
    trustpilotReviews.length
  ).toFixed(1);
  const cardWidthClass = getCardWidthClass(trustpilotReviews.length);

  const scrollTrack = (direction: "left" | "right") => {
    if (!trackRef.current) return;
    const amount = Math.max(trackRef.current.clientWidth * 0.8, 320);
    trackRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="container my-10">
      <div className="rounded-[22px] border border-slate-200 bg-gradient-to-b from-slate-50 to-slate-100 p-3 md:p-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
          <aside className="rounded-3xl bg-gradient-to-b from-emerald-500 to-emerald-700 p-5 text-white shadow-[0_18px_35px_rgba(6,95,70,0.35)] lg:w-[280px] lg:shrink-0">
            <p className="mb-2 text-sm font-semibold text-white/90">
              Trustpilot Snapshot
            </p>
            <h3 className="mb-1 text-3xl font-bold [text-shadow:0_2px_10px_rgba(0,0,0,0.25)]">
              Excellent
            </h3>
            <p className="mb-2 text-base">
              <span className="text-3xl font-bold">{averageRating}</span> out of 5
            </p>
            <p className="mb-3 text-xl tracking-[2px] [text-shadow:0_2px_10px_rgba(0,0,0,0.25)]">
              {renderStars(Number(averageRating))}
            </p>
            <p className="mb-4 text-sm text-white/90">
              Based on {trustpilotReviews.length} selected review
              {trustpilotReviews.length > 1 ? "s" : ""}
            </p>
            <a
              href="https://uk.trustpilot.com/review/www.onxius.com"
              target="_blank"
              rel="noreferrer"
              className="text-black inline-flex items-center rounded-lg bg-white px-3 py-2 text-sm font-semibold shadow-[var(--button-shadow-soft)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[var(--button-shadow-hover)] "
              // style={{ color: "var(--dark-blue-clr)" }}
            >
              View all reviews
            </a>
          </aside>

          <div className="relative min-w-0 flex-1">
            {trustpilotReviews.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => scrollTrack("left")}
                  aria-label="Previous reviews"
                  className="absolute -left-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-[var(--card-shadow-soft)] transition duration-200 hover:scale-105 hover:shadow-[var(--card-shadow-hover)] md:flex"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => scrollTrack("right")}
                  aria-label="Next reviews"
                  className="absolute -right-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-[var(--card-shadow-soft)] transition duration-200 hover:scale-105 hover:shadow-[var(--card-shadow-hover)] md:flex"
                >
                  ›
                </button>
              </>
            )}

            <div
              ref={trackRef}
              className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {trustpilotReviews.map((review, index) => (
                <motion.article
                  key={review.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className={`snap-start ${cardWidthClass} shrink-0 rounded-3xl border border-slate-200 bg-white p-4 md:p-5 transition duration-200 hover:-translate-y-0.5`}
                >
                  <div className="mb-3 flex items-center">
                    <div className="mr-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600">
                      {getInitials(review.author)}
                    </div>
                    <div>
                      <p className="mb-0 text-sm font-semibold text-slate-900">
                        {review.author}
                      </p>
                      <small className="text-xs text-slate-500">{review.date}</small>
                    </div>
                  </div>

                  <p className="mb-2 text-sm tracking-[2px] text-emerald-600">
                    {renderStars(review.rating)}
                  </p>
                  <h6 className="mb-2 text-lg font-semibold leading-snug text-slate-900 [text-shadow:0_1px_8px_rgba(15,23,42,0.08)]">
                    {review.title}
                  </h6>

                  <p
                    className="mb-4 min-h-[96px] text-sm leading-6 text-slate-600"
                    style={{ display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}
                  >
                    {review.text}
                  </p>
                  <a
                    href={review.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn butn-custom w-fit"
                    // className="inline-flex rounded-md px-2 py-1 text-sm font-semibold text-emerald-700 shadow-[var(--button-shadow-soft)] transition duration-200 hover:bg-emerald-50 hover:shadow-[var(--button-shadow-hover)]"
                  >
                    Read full review →
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}