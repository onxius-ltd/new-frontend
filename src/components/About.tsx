"use client"; // 👈 add this if you plan to use interactivity (like mobile toggle)

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";


export default function About() {

      return (
            <>
                  {/* <!-- About Start --> */}
                  <div className="container-fluid py-2 sm:py-3 lg:py-5" style={{ marginTop: "6rem" }}>
                        <div className="container">
                              <div className="row g-5">
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                          <div className="RotateMoveLeft">
                                                <Image src="/assets/images/about.png" className="img-fluid w-100" alt="about onxius" width={500} height={500} />
                                          </div>
                                    </div>
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                                          <h4 className="mb-1 text-primary">About Us</h4>
                                          <h1 className="display-5 mb-4">Discover Who We Are and What Inspires Our Passion</h1>
                                          <p className="pb-4">
                                                We are a passionate team of developers, designers, and creators dedicated to
                                                building exceptional digital experiences. Our mission is to craft modern,
                                                scalable, and user-friendly solutions that help businesses grow and succeed in
                                                today’s fast-paced world.
                                          </p>
                                          <Link href="/contact" className="butn-custom rounded-pill py-3 px-5">Let's Talk &#x2799;</Link>
                                    </div>
                              </div>
                        </div>
                  </div>
                  {/* <!-- About End --> */}
            </>
      );
}