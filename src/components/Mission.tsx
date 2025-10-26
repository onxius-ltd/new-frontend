"use client"; // 👈 add this if you plan to use interactivity (like mobile toggle)

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";


export default function OurMission() {

      return (
            <>

                  {/* <!-- Our Mission Start --> */}
                  <div className="container-fluid py-2 sm:py-3 lg:py-5" style={{ marginTop: "6rem" }}>
                        <div className="container">
                              <div className="row g-5">
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                          <div className="RotateMoveLeft">
                                                <Image src="/assets/images/mission.png" className="img-fluid w-100" alt="onxius mission" width={500} height={500} />
                                          </div>
                                    </div>
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                                          <h4 className="mb-1 text-primary">Our Mission</h4>
                                          <h1 className="display-5 mb-4">Empowering Businesses Through Innovation and Simplicity
                                          </h1>
                                          <p className="pb-4">
                                                Our mission is to empower organizations with scalable, modern, and user-friendly digital solutions. We aim to transform ideas into technology-driven success stories by focusing on collaboration, transparency, and long-term growth.
                                                <br />
                                                <strong className="text-lg py-1">Shaping the Future With Technology That Inspires Progress</strong>
                                                <br />
                                                We envision a world where innovation bridges every gap and helps businesses reach new heights. Our vision is to lead this change — guiding brands toward digital excellence and sustainable success in an ever-evolving marketplace.
                                          </p>
                                          <Link href="/contact" className="butn-custom rounded-pill py-3 px-5">Let's Talk &#x2799;</Link>
                                    </div>
                              </div>
                        </div>
                  </div>
                  {/* <!-- Our Mission End --> */}
            </>
      );
}