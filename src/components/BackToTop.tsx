"use client"; // 👈 add this if you plan to use interactivity (like mobile toggle)
import Link from "next/link";

export default function BackToTop() {

      return (
            <div>
                  {/* Back to Top */}
                  <Link href="#" className="btn butn-custom btn-lg-square back-to-top">
                        <i className="fa fa-arrow-up" />
                  </Link>
            </div>

      );
}