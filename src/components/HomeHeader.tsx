"use client"; // 👈 add this if you plan to use interactivity (like mobile toggle)
import Link from "next/link";
import Image from "next/image";


export default function HomeHeader() {

      return (
            <div>
                  {/* Hero Header Start */}
                  <div className="hero-header overflow-hidden px-5">
                        {/* animated rotated image */}
                        <div className="rotate-img">
                              <Image src="/assets/img/sty-1.png" className="img-fluid w-100" alt="" fill />
                              <div className="rotate-sty-2" />
                        </div>
                        {/* header content */}
                        <div className="row gy-5 align-items-center">
                              {/* left side content */}
                              <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                                    <h1
                                          className="display-5 text-dark mb-4 wow fadeInUp"
                                          data-wow-delay="0.3s"
                                          style={{ fontWeight: 500 }}
                                    >
                                          We Build Scalable Web & SaaS Solutions for Growing Businesses
                                    </h1>
                                    <p className="fs-4 mb-4 wow fadeInUp" data-wow-delay="0.5s">
                                          Custom web development, SaaS platforms, and IT solutions designed to increase revenue and automate operations.
                                    </p>
                                    {/* cta button */}
                                    <div className="d-flex gap-3 flex-wrap">
                                          <Link
                                                href="/contact"
                                                className="btn butn-custom-outline rounded-pill py-3 px-5 wow fadeInUp"
                                                data-wow-delay="0.7s"
                                          >
                                                Get a Free Consultation &#x2799;
                                          </Link>
                                          <Link
                                                href="/portfolio"
                                                className="btn butn-custom rounded-pill py-3 px-5 wow fadeInUp"
                                                data-wow-delay="0.7s"
                                          >
                                                View Our Work &#x2799;
                                          </Link>
                                    </div>
                              </div>
                              {/* right side content */}
                              <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
                                    <Image src="/assets/images/businss-grow-next.png" className="img-fluid w-100 h-100" alt="onxius" width={500} height={500} />

                              </div>
                        </div>
                  </div>
                  {/* Hero Header End */}
            </div>
      );
}