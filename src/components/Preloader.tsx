"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
      const [loading, setLoading] = useState(true);

      useEffect(() => {
            const timer = setTimeout(() => setLoading(false), 1500); // fake delay
            return () => clearTimeout(timer);
      }, []);

      if (!loading) return null;

      return (
            // < !--Spinner Start-- >
            <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                  <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
                        <span className="sr-only">Loading...</span>
                  </div>
            </div>
            //   <!--Spinner End-- >
      )
}