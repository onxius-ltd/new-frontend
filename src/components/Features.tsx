"use client"; // 👈 add this if you plan to use interactivity (like mobile toggle)

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AboutFearute from "./AboutFeature";

const features = [
      {
            icon: "/assets/images/Web Development Feature icon.png",
            title: "Web Development",
            subtitle: "Building Fast, Scalable, and Responsive Websites",
            desc: "We create high-performance and secure websites using modern technologies like React, Next.js, and Laravel. Every website is optimized for speed, scalability, and a seamless user experience."
      },
      {
            icon: "/assets/images/pwa feature icon.png",
            title: "Progressive Web Apps (PWA)",
            subtitle: "Delivering the Power of Web and Mobile in One Platform",
            desc: "Our Progressive Web Apps combine the reach of the web with the performance of mobile. They load instantly, work offline, and offer app-like experiences that keep users engaged anywhere, anytime."
      },
      {
            icon: "/assets/images/Mobile App Development icon.png",
            title: "Mobile App Development",
            subtitle: "Seamless Cross-Platform Experiences with React Native",
            desc: "We design and develop mobile applications that provide native-like performance on both Android and iOS, ensuring an engaging user experience with minimal development overhead."
      },
      {
            icon: "/assets/images/UI UX Design Feature icon.png",
            title: "UI/UX Design",
            subtitle: "Crafting Intuitive and Engaging Digital Experiences",
            desc: "Our design process focuses on usability and aesthetics, ensuring that every interface we create is both visually compelling and effortless to navigate for users."
      }
];



export default function Fearutes() {
      return (
            <>
                  {/* Feature Start */}
                  <div className="container-fluid feature overflow-hidden py-5">
                        <div className="container py-5">
                              {/* feature content */}
                              <div
                                    className="text-center mx-auto mb-5 wow fadeInUp"
                                    data-wow-delay="0.1s"
                                    style={{ maxWidth: 900 }}
                              >
                                    <h4 className="text-primary">Our Feature</h4>
                                    <h1 className="display-5 mb-4">
                                          Innovative Features That Power Digital Growth
                                    </h1>
                                    <p className="mb-0">
                                          At Onxius, we bring together creativity, technology, and innovation to deliver digital products that make a difference. Our core features focus on providing performance, scalability, and seamless user experiences — ensuring your business stands out in the modern digital landscape.
                                    </p>
                              </div>
                              {/* feature cards */}

                              <div className="row g-4 justify-content-center text-center mb-5">
                                    {features?.length > 0 &&
                                          features.map((item, index) => {
                                                let timing = index / 10;
                                                return (
                                                      <div
                                                            className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                                                            data-wow-delay="0.1s"
                                                      >
                                                            <div className="text-center p-4">
                                                                  <div className="d-inline-block rounded bg-light p-4 mb-4">
                                                                        {/* <i className="fas fa-envelope fa-5x text-secondary" /> */}
                                                                        <Image src={item.icon} className="img-fluid w-75 mx-auto" alt={item.title} width={100} height={100} />
                                                                  </div>
                                                                  <div className="feature-content">
                                                                        <h3 className="h4">
                                                                              {item.title}  <i className="fa fa-long-arrow-alt-right" />
                                                                        </h3>
                                                                        <p className="mt-4 mb-0">
                                                                              {item.desc}
                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                )
                                          })}
                                    {/* <div
                                          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                                          data-wow-delay="0.3s"
                                    >
                                          <div className="text-center p-4">
                                                <div className="d-inline-block rounded bg-light p-4 mb-4">
                                                      <i className="fas fa-mail-bulk fa-5x text-secondary" />
                                                </div>
                                                <div className="feature-content">
                                                      <a href="#" className="h4">
                                                            Email Builder <i className="fa fa-long-arrow-alt-right" />
                                                      </a>
                                                      <p className="mt-4 mb-0">
                                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                                            elit.consectetur adipisicing elit
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                                    <div
                                          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                                          data-wow-delay="0.5s"
                                    >
                                          <div className="text-center rounded p-4">
                                                <div className="d-inline-block rounded bg-light p-4 mb-4">
                                                      <i className="fas fa-sitemap fa-5x text-secondary" />
                                                </div>
                                                <div className="feature-content">
                                                      <a href="#" className="h4">
                                                            Customer Builder <i className="fa fa-long-arrow-alt-right" />
                                                      </a>
                                                      <p className="mt-4 mb-0">
                                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                                            elit.consectetur adipisicing elit
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                                    <div
                                          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                                          data-wow-delay="0.7s"
                                    >
                                          <div className="text-center rounded p-4">
                                                <div className="d-inline-block rounded bg-light p-4 mb-4">
                                                      <i className="fas fa-tasks fa-5x text-secondary" />
                                                </div>
                                                <div className="feature-content">
                                                      <a href="#" className="h4">
                                                            Campaign Manager <i className="fa fa-long-arrow-alt-right" />
                                                      </a>
                                                      <p className="mt-4 mb-0">
                                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                                            elit.consectetur adipisicing elit
                                                      </p>
                                                </div>
                                          </div>
                                    </div> */}
                                    <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                                          <div className="my-3">
                                                <a
                                                      href="#"
                                                      className="butn-custom d-inline rounded-pill px-5 py-3 font-bold"
                                                >
                                                      More Features
                                                </a>
                                          </div>
                                    </div>
                              </div>
                              {/* feature projects */}
                              <AboutFearute />
                        </div>
                  </div>
                  {/* Feature End */}
            </>
      );
}