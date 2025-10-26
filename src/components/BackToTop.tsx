"use client"; // 👈 add this if you plan to use interactivity (like mobile toggle)

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";


export default function BackToTop() {

      return (
            <>
                  {/* Back to Top */}
                  <a href="#" className="btn butn-custom btn-lg-square back-to-top">
                        <i className="fa fa-arrow-up" />
                  </a>
            </>

      );
}