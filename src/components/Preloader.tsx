"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Preloader() {
      const pathname = usePathname();
      const [loading, setLoading] = useState(true);

      useEffect(() => {
            // ── Show preloader on every route change.
            // On the very first load we also respect window.load so all assets
            // are ready. On subsequent client-side navigations document.readyState
            // is already "complete", so we just show a brief branded delay.
            setLoading(true);

            let hideTimer: ReturnType<typeof setTimeout>;

            const scheduleHide = () => {
                  // 600ms is enough to see the brand — not long enough to annoy
                  hideTimer = setTimeout(() => setLoading(false), 600);
            };

            if (document.readyState === "complete") {
                  scheduleHide();
            } else {
                  // Initial hard load — wait for window load event
                  const onLoad = () => scheduleHide();
                  window.addEventListener("load", onLoad);

                  // Safety fallback: never block longer than 3s
                  const fallback = setTimeout(() => setLoading(false), 3000);

                  return () => {
                        window.removeEventListener("load", onLoad);
                        clearTimeout(fallback);
                        clearTimeout(hideTimer);
                  };
            }

            return () => clearTimeout(hideTimer);
      }, [pathname]); // ← this is the key fix: re-runs on every page change

      if (!loading) return null;

      return (
            <div
                  id="preloader"
                  role="status"
                  aria-label="Loading page"
                  style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 9999,
                        background: "#ffffff",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1.5rem",
                  }}
            >
                  {/* ── Brand Logo ── */}
                  <div
                        style={{
                              fontSize: "2.2rem",
                              fontWeight: 700,
                              letterSpacing: "2px",
                              background: "linear-gradient(90deg, #F4622A, #D4307A, #7B2FBE)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                        }}
                  >
                        ONXIUS
                  </div>

                  {/* ── Dual-ring spinner ── */}
                  <SpinnerRing />

                  {/* ── Tagline ── */}
                  <p
                        style={{
                              fontSize: "0.75rem",
                              color: "#9ca3af",
                              margin: 0,
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                        }}
                  >
                        Preparing your experience…
                  </p>

                  {/* ── Bottom progress bar ── */}
                  <ProgressBar />

                  <span className="visually-hidden">Loading Onxius, please wait…</span>
            </div>
      );
}

/* ─── Dual-ring spinner in brand colors ─────────────────────────────────── */
function SpinnerRing() {
      return (
            <>
                  <style>{`
        @keyframes _onxius_cw  { to { transform: rotate(360deg);  } }
        @keyframes _onxius_ccw { to { transform: rotate(-360deg); } }
        ._onxius_outer {
          position: absolute; inset: 0; border-radius: 50%;
          border: 3px solid transparent;
          border-top-color: #F4622A;
          border-right-color: #D4307A;
          animation: _onxius_cw 0.9s linear infinite;
        }
        ._onxius_inner {
          position: absolute; inset: 10px; border-radius: 50%;
          border: 3px solid transparent;
          border-bottom-color: #7B2FBE;
          border-left-color: #D4307A;
          animation: _onxius_ccw 0.7s linear infinite;
        }
      `}</style>
                  <div style={{ position: "relative", width: 52, height: 52 }}>
                        <div className="_onxius_outer" />
                        <div className="_onxius_inner" />
                  </div>
            </>
      );
}

/* ─── Indeterminate progress bar ────────────────────────────────────────── */
function ProgressBar() {
      return (
            <>
                  <style>{`
        @keyframes _onxius_bar {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(250%);  }
        }
        ._onxius_bar_fill {
          height: 100%; width: 40%;
          background: linear-gradient(90deg, #F4622A, #D4307A, #7B2FBE);
          animation: _onxius_bar 1.2s ease-in-out infinite;
          border-radius: 0 2px 2px 0;
        }
      `}</style>
                  <div
                        style={{
                              position: "absolute",
                              bottom: 0, left: 0, right: 0,
                              height: 3,
                              background: "#f3f4f6",
                              overflow: "hidden",
                        }}
                  >
                        <div className="_onxius_bar_fill" />
                  </div>
            </>
      );
}
