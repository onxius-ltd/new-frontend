"use client"; // 👈 add this if you plan to use interactivity (like mobile toggle)

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

const services = [
      {
            icon: "/assets/images/Web Design  Development icon.png",
            title: "Web Design & Development",
            subtitle: "Crafting Stunning, High-Performance Websites",
            desc: "We specialize in creating responsive, user-friendly, and visually appealing websites that help your business stand out. Using modern frameworks like React, Next.js, and Laravel, we deliver custom solutions that combine creativity with functionality."
      },
      {
            icon: "/assets/images/pwa-icon.png",
            title: "Progressive Web Apps (PWA)",
            subtitle: "Delivering App-Like Experiences on the Web",
            desc: "We develop Progressive Web Apps that combine the best of web and mobile technologies. Our PWAs are fast, reliable, installable, and capable of working offline — giving users a seamless and engaging experience across all devices."
      },
      {
            icon: "/assets/images/Mobile App Development icon .png",
            title: "Mobile App Development",
            subtitle: "Engaging Mobile Experiences for Every Platform",
            desc: "Using React Native, we develop high-performance mobile applications for Android and iOS. Our apps deliver intuitive interfaces and real-time functionality designed to keep users engaged."
      },
      {
            icon: "/assets/images/WordPress  E-Commerce Solutions icon .png",
            title: "WordPress & E-Commerce Solutions",
            subtitle: "Flexible, Manageable, and Growth-Ready Websites",
            desc: "We design and develop professional WordPress websites, from portfolios to full-featured e-commerce stores using WooCommerce. Every site is optimized for performance, SEO, and easy content management."
      },
      {
            icon: "/assets/images/SEO and Digital Marketing icon .png",
            title: "SEO & Digital Marketing",
            subtitle: "Helping You Get Found, Ranked, and Recognized",
            desc: "Our SEO and marketing services ensure your business reaches the right audience. We optimize your website for search engines, improve page rankings, and enhance visibility through keyword research and content strategy."
      },
      {
            icon: "/assets/images/UI UX Design icon .png",
            title: "UI/UX Design",
            subtitle: "Designs That Blend Creativity With Usability",
            desc: "We focus on creating seamless user experiences through intuitive and engaging designs. Every interface we craft is visually appealing, user-friendly, and responsive across all devices."
      },
      {
            icon: "/assets/images/Desktop App Development icon.png",
            title: "Desktop App Development",
            subtitle: "Smart Desktop Solutions With Electron.js",
            desc: "We build powerful and efficient desktop applications using Electron.js, enabling cross-platform compatibility and offline functionality — perfect for internal business tools and productivity apps."
      },
      {
            icon: "/assets/images/Maintenance & Support icon.png",
            title: "Maintenance & Support",
            subtitle: "Reliable Post-Launch Assistance",
            desc: "Our relationship doesn’t end after project delivery. We offer continuous technical support, performance monitoring, and maintenance to ensure your website or application remains secure and up to date."
      }
];



export default function Services() {

      return (
            <>
                  {/* <!-- Service Start --> */}
                  <div className="container-fluid service py-5">
                        <div className="container py-5">
                              {/* main content */}
                              <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "900px" }}>
                                    <h4 className="mb-1 text-primary">Our Service</h4>
                                    <h1 className="display-5 mb-4">What We Can Do For You</h1>
                                    <p className="mb-0">Dolor sit amet consectetur, adipisicing elit. Ipsam, beatae maxime. Vel animi eveniet doloremque reiciendis soluta iste provident non rerum illum perferendis earum est architecto dolores vitae quia vero quod incidunt culpa corporis, porro doloribus. Voluptates nemo doloremque cum.
                                    </p>
                              </div>
                              {/* services */}
                              <div className="row g-4 justify-content-start align-items-stretch">
                                    {services?.length > 0 &&
                                          services.map((item, index) => {
                                                let timing = index / 10;
                                                return (
                                                      <div
                                                            key={index}
                                                            className="col-lg-6 col-xl-4 wow fadeInUp h-100"
                                                            data-wow-delay={`${timing}s`}
                                                      >
                                                            <div className="service-item text-center rounded p-4 h-100 d-flex flex-column">
                                                                  <div className="service-icon d-inline-block rounded p-4 mb-4">
                                                                        {/* <i className="fas fa-mail-bulk fa-5x text-secondary"></i> */}
                                                                        <Image src={item.icon} className="img-fluid w-75 mx-auto" alt={item.title} width={100} height={100} />
                                                                  </div>
                                                                  <div className="service-content flex-grow-1">
                                                                        <h3 className="mb-1 text-body-secondary">{item.title}</h3>
                                                                        <p className="mb-4">{item.desc}</p>
                                                                  </div>
                                                                  <Link
                                                                        href="/contact"
                                                                        className="butn-custom butn-custom-outline rounded-pill text-primary font-bold py-2 px-4 mt-auto"
                                                                  >
                                                                        Get Started &#x2799;
                                                                  </Link>
                                                            </div>
                                                      </div>
                                                );
                                          })}
                                    {/* <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                                          <div className="service-item text-center rounded p-4">
                                                <div className="service-icon d-inline-block rounded p-4 mb-4"><i className="fas fa-mail-bulk fa-5x text-secondary"></i></div>
                                                <div className="service-content">
                                                      <h4 className="mb-4">Email Newsletters</h4>
                                                      <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit
                                                      </p>
                                                      <a href="#" className="butn-custom butn-custom-outline rounded-pill text-primary font-bold py-2 px-4">Read More</a>
                                                </div>
                                          </div>
                                    </div> */}
                                    {/* <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.25s">
                                          <div className="service-item text-center rounded p-4">
                                                <div className="service-icon d-inline-block rounded p-4 mb-4"><i className="fas fa-mail-bulk fa-5x text-secondary"></i></div>
                                                <div className="service-content">
                                                      <h4 className="mb-4">Email Newsletters</h4>
                                                      <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit
                                                      </p>
                                                      <a href="#" className="butn-custom butn-custom-outline rounded-pill text-primary font-bold py-2 px-4">Read More</a>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                                          <div className="service-item text-center rounded p-4">
                                                <div className="service-icon d-inline-block rounded p-4 mb-4"><i className="fas fa-mail-bulk fa-5x text-secondary"></i></div>
                                                <div className="service-content">
                                                      <h4 className="mb-4">Email Newsletters</h4>
                                                      <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit
                                                      </p>
                                                      <a href="#" className="butn-custom butn-custom-outline rounded-pill text-primary font-bold py-2 px-4">Read More</a>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.75s">
                                          <div className="service-item text-center rounded p-4">
                                                <div className="service-icon d-inline-block rounded p-4 mb-4"><i className="fas fa-mail-bulk fa-5x text-secondary"></i></div>
                                                <div className="service-content">
                                                      <h4 className="mb-4">Email Newsletters</h4>
                                                      <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit
                                                      </p>
                                                      <a href="#" className="butn-custom butn-custom-outline rounded-pill text-primary font-bold py-2 px-4">Read More</a>
                                                </div>
                                          </div>
                                    </div> */}
                                    {/* <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                                          <div className="service-item text-center rounded p-4">
                                                <div className="service-icon d-inline-block bg-light rounded p-4 mb-4"><i className="fas fa-thumbs-up fa-5x text-secondary"></i></div>
                                                <div className="service-content">
                                                      <h4 className="mb-4">Acquistion Emails </h4>
                                                      <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit
                                                      </p>
                                                      <a href="#" className="btn btn-light rounded-pill text-primary py-2 px-4">Read More</a>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                                          <div className="service-item text-center rounded p-4">
                                                <div className="service-icon d-inline-block bg-light rounded p-4 mb-4"><i className="fa fa-subway fa-5x text-secondary"></i></div>
                                                <div className="service-content">
                                                      <h4 className="mb-4">Retention Emails</h4>
                                                      <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit
                                                      </p>
                                                      <a href="#" className="btn btn-light rounded-pill text-primary py-2 px-4">Read More</a>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                                          <div className="service-item text-center rounded p-4">
                                                <div className="service-icon d-inline-block bg-light rounded p-4 mb-4"><i className="fas fa-sitemap fa-5x text-secondary"></i></div>
                                                <div className="service-content">
                                                      <h4 className="mb-4">Promotional Emails</h4>
                                                      <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit
                                                      </p>
                                                      <a href="#" className="btn btn-light rounded-pill text-primary py-2 px-4">Read More</a>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                                          <div className="service-item text-center rounded p-4">
                                                <div className="service-icon d-inline-block bg-light rounded p-4 mb-4"><i className="fas fa-mail-bulk fa-5x text-secondary"></i></div>
                                                <div className="service-content">
                                                      <h4 className="mb-4">Email Newsletters</h4>
                                                      <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit
                                                      </p>
                                                      <a href="#" className="btn btn-light rounded-pill text-primary py-2 px-4">Read More</a>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                                          <div className="service-item text-center rounded p-4">
                                                <div className="service-icon d-inline-block bg-light rounded p-4 mb-4"><i className="fas fa-thumbs-up fa-5x text-secondary"></i></div>
                                                <div className="service-content">
                                                      <h4 className="mb-4">Acquistion Emails </h4>
                                                      <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit
                                                      </p>
                                                      <a href="#" className="btn btn-light rounded-pill text-primary py-2 px-4">Read More</a>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
                                          <div className="service-item text-center rounded p-4">
                                                <div className="service-icon d-inline-block bg-light rounded p-4 mb-4"><i className="fa fa-subway fa-5x text-secondary"></i></div>
                                                <div className="service-content">
                                                      <h4 className="mb-4">Retention Emails</h4>
                                                      <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit
                                                      </p>
                                                      <a href="#" className="btn btn-light rounded-pill text-primary py-2 px-4">Read More</a>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
                                          <div className="service-item text-center rounded p-4">
                                                <div className="service-icon d-inline-block bg-light rounded p-4 mb-4"><i className="fas fa-sitemap fa-5x text-secondary"></i></div>
                                                <div className="service-content">
                                                      <h4 className="mb-4">Promotional Emails</h4>
                                                      <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit
                                                      </p>
                                                      <a href="#" className="btn btn-light rounded-pill text-primary py-2 px-4">Read More</a>
                                                </div>
                                          </div>
                                    </div> */}
                              </div>
                        </div>
                  </div>
                  {/* <!-- Service End --> */}
            </>
      )
};