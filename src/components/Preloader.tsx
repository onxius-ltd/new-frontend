// "use client";
// import { useEffect, useState } from "react";

// export default function Preloader() {
//       const [loading, setLoading] = useState(true);

//       useEffect(() => {
//             const timer = setTimeout(() => setLoading(false), 1500); // fake delay
//             return () => clearTimeout(timer);
//       }, []);

//       if (!loading) return null;

//       return (
//             // < !--Spinner Start-- >
//             <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
//                   <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
//                         <span className="sr-only">Loading...</span>
//                   </div>
//             </div>
//             //   <!--Spinner End-- >
//       )
// }

"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
      const [loading, setLoading] = useState(true);

      useEffect(() => {
            // Check if page is already loaded
            if (document.readyState === "complete") {
                  setLoading(false);
                  return;
            }

            const handleLoad = () => {
                  // Optional: minimum display time for branding (500ms is enough)
                  setTimeout(() => setLoading(false), 500);
            };

            window.addEventListener("load", handleLoad);

            // Fallback timeout in case load event doesn't fire
            const fallbackTimer = setTimeout(() => {
                  setLoading(false);
            }, 3000); // Maximum 3 seconds

            return () => {
                  window.removeEventListener("load", handleLoad);
                  clearTimeout(fallbackTimer);
            };
      }, []);

      if (!loading) return null;

      return (
            <div
                  id="preloader"
                  className="preloader show bg-white position-fixed w-100 vh-100 top-0 start-0 d-flex flex-column align-items-center justify-content-center z-1050"
                  aria-live="polite"
                  aria-label="Loading website"
            >
                  {/* Option 1: Logo + Spinner (Professional) */}
                  <div className="preloader-content text-center">
                        {/* Your Logo */}
                        <div className="logo mb-4">
                              {/* Replace with your actual logo */}
                              <div className="brand-logo" style={{
                                    fontSize: "2.5rem",
                                    fontWeight: "700",
                                    color: "var(--sky-clr)",
                                    letterSpacing: "1px"
                              }}>
                                    ONXIUS
                              </div>
                              {/* Or use Image component for logo */}
                              {/* <Image 
            src="/logo.png" 
            alt="Onxius Logo" 
            width={120} 
            height={40}
            priority
          /> */}
                        </div>

                        {/* Animated Spinner */}
                        <div className="spinner-container position-relative">
                              {/* Modern dual-ring spinner */}
                              <div className="dual-ring-spinner">
                                    <div className="ring ring-1"></div>
                                    <div className="ring ring-2"></div>
                              </div>

                              {/* Loading percentage (optional) */}
                              <div className="loading-text mt-3 text-muted small">
                                    Preparing your digital experience...
                              </div>
                        </div>
                  </div>

                  {/* Progress Bar (Optional, adds sophistication) */}
                  <div className="progress-container position-absolute bottom-0 w-100" style={{ height: "3px" }}>
                        <div
                              className="progress-bar bg-primary"
                              style={{
                                    width: "0%",
                                    height: "100%",
                                    transition: "width 0.3s ease"
                              }}
                              id="preloader-progress"
                        />
                  </div>

                  {/* Screen reader announcement */}
                  <span className="visually-hidden">Loading Onxius website, please wait...</span>
            </div>
      );
}