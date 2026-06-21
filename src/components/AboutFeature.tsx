"use client"; // 👈 add this if you plan to use interactivity (like mobile toggle)
import Link from "next/link";
import Image from "next/image";

export default function AboutFearute() {
      return (
            <div className="">
                  {/* feature projects */}
                  <div className="row g-5" >
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                              <div
                                    className="feature-img RotateMoveLeft h-100"
                                    style={{ objectFit: "cover" }}
                              >
                                    <Image src="/assets/images/Feature-side-image.webp" className="img-fluid w-100 h-100" alt="Features" width={500} height={500} />
                              </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.1s">
                              <h4 className="text-primary">Our Solutions</h4>
                              <h1 className="display-5 mb-4">
                                    Turn Your Visitors Into Happy Customers
                              </h1>
                              <p className="mb-4">
                                    At Onxius, we design powerful features that transform casual visitors into loyal customers. Our tools help you engage, convert, and retain your audience with seamless digital experiences. From intuitive interfaces to smart automation, every feature is crafted to enhance growth, boost conversions, and deliver measurable success for your business.
                              </p>
                              <div className="row g-4">
                                    <div className="col-6">
                                          <div className="d-flex">
                                                <i className="fas fa-newspaper fa-4x text-secondary" />
                                                <div className="d-flex flex-column ms-3">
                                                      <h2 className="mb-0 fw-bold">50+</h2>
                                                      <small className="text-dark">Created Projects</small>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-6">
                                          <div className="d-flex">
                                                <i className="fas fa-users fa-4x text-secondary" />
                                                <div className="d-flex flex-column ms-3">
                                                      <h2 className="mb-0 fw-bold">15+</h2>
                                                      <small className="text-dark">Happy Clients</small>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className="py-8">
                                    <Link href="/get-free-quotation" className="butn-custom rounded-pill py-3 px-5">Get a Free Quote &#x2799;</Link>
                              </div>
                        </div>
                  </div>
            </div>
      );
}