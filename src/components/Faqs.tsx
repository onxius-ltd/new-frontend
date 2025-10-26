"use client"; // 👈 add this if you plan to use interactivity (like mobile toggle)

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

const faqs = [
      {
            "id": 1,
            "title": "What is Onxius?",
            "description": "Onxius is a digital solutions company that specializes in creating modern, scalable, and user-friendly websites and applications. Our goal is to help businesses grow through innovative design and technology."
      },
      {
            "id": 2,
            "title": "What services does Onxius offer?",
            "description": "We provide a wide range of services including web development, UI/UX design, digital strategy, branding, and custom software solutions — all tailored to meet your business needs."
      },
      {
            "id": 3,
            "title": "How does Onxius ensure quality in its projects?",
            "description": "Our team follows a structured process that includes research, design, testing, and optimization. We ensure every product we deliver is fast, secure, and optimized for the best user experience."
      },
      {
            "id": 4,
            "title": "Can Onxius help my business grow online?",
            "description": "Yes! Onxius focuses on creating digital experiences that attract, engage, and convert your audience — helping you increase traffic, build trust, and boost sales."
      },
      {
            "id": 5,
            "title": "How can I start a project with Onxius?",
            "description": "Getting started is easy. Simply contact us through our website or email us with your project details. Our team will reach out to discuss your goals, timeline, and how we can bring your vision to life."
      }
]


export default function Faqs() {

      return (
            <>
                  <>
                        {/* FAQ Start */}
                        <div className="container-fluid FAQ bg-light overflow-hidden py-5">
                              <div className="container py-5">
                                    <div className="row g-5 align-items-center">
                                          {/* left side faqs */}
                                          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                                                <div className="accordion" id="accordionExample">
                                                      <div className="accordion" id="accordionExample">
                                                            {faqs?.length > 0 && faqs.map((item, index) => {
                                                                  const isFirst = index === 0; // only first open

                                                                  return (
                                                                        <div className="accordion-item border-0 mb-4" key={index}>
                                                                              <h2 className="accordion-header" id={`heading-${index}`}>
                                                                                    <button
                                                                                          className={`accordion-button rounded-top ${!isFirst ? 'collapsed' : ''}`}
                                                                                          type="button"
                                                                                          data-bs-toggle="collapse"
                                                                                          data-bs-target={`#collapse-${index}`}
                                                                                          aria-expanded={isFirst ? 'true' : 'false'}
                                                                                          aria-controls={`collapse-${index}`}
                                                                                    >
                                                                                          {item.title}
                                                                                    </button>
                                                                              </h2>

                                                                              <div
                                                                                    id={`collapse-${index}`}
                                                                                    className={`accordion-collapse collapse ${isFirst ? 'show' : ''}`}
                                                                                    aria-labelledby={`heading-${index}`}
                                                                                    data-bs-parent="#accordionExample"
                                                                              >
                                                                                    <div className="accordion-body my-2">
                                                                                          <p>{item.description}</p>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                  );
                                                            })}
                                                      </div>
                                                      {/* <div className="accordion-item border-0 mb-4">
                                                            <h2 className="accordion-header" id="headingOne">
                                                                  <button
                                                                        className="accordion-button rounded-top"
                                                                        type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#collapseOne"
                                                                        aria-expanded="true"
                                                                        aria-controls="collapseTOne"
                                                                  >
                                                                        Why did you choose Our Email Services?
                                                                  </button>
                                                            </h2>
                                                            <div
                                                                  id="collapseOne"
                                                                  className="accordion-collapse collapse show"
                                                                  aria-labelledby="headingOne"
                                                                  data-bs-parent="#accordionExample"
                                                            >
                                                                  <div className="accordion-body my-2">
                                                                        <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                                                                        <p>
                                                                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                                                                              nemo impedit, sapiente quis illo quia nulla atque maxime
                                                                              fuga minima ipsa quae cum consequatur, sit, delectus
                                                                              exercitationem odit officiis maiores! Neque, quidem corrupti
                                                                              modi architecto eos saepe incidunt dignissimos rerum.
                                                                        </p>
                                                                        <p>
                                                                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                              Dicta distinctio hic fuga odio excepturi ducimus sequi at.
                                                                              Doloribus, non aspernatur.
                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="accordion-item border-0 mb-4">
                                                            <h2 className="accordion-header" id="headingTwo">
                                                                  <button
                                                                        className="accordion-button collapsed rounded-top"
                                                                        type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#collapseTwo"
                                                                        aria-expanded="false"
                                                                        aria-controls="collapseTwo"
                                                                  >
                                                                        Are there any hidden charges?
                                                                  </button>
                                                            </h2>
                                                            <div
                                                                  id="collapseTwo"
                                                                  className="accordion-collapse collapse"
                                                                  aria-labelledby="headingTwo"
                                                                  data-bs-parent="#accordionExample"
                                                            >
                                                                  <div className="accordion-body my-2">
                                                                        <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                                                                        <p>
                                                                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                                                                              nemo impedit, sapiente quis illo quia nulla atque maxime
                                                                              fuga minima ipsa quae cum consequatur, sit, delectus
                                                                              exercitationem odit officiis maiores! Neque, quidem corrupti
                                                                              modi architecto eos saepe incidunt dignissimos rerum.
                                                                        </p>
                                                                        <p>
                                                                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                              Dicta distinctio hic fuga odio excepturi ducimus sequi at.
                                                                              Doloribus, non aspernatur.
                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="accordion-item border-0">
                                                            <h2 className="accordion-header" id="headingThree">
                                                                  <button
                                                                        className="accordion-button collapsed rounded-top"
                                                                        type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#collapseThree"
                                                                        aria-expanded="false"
                                                                        aria-controls="collapseThree"
                                                                  >
                                                                        What are the key challenges of email marketing?
                                                                  </button>
                                                            </h2>
                                                            <div
                                                                  id="collapseThree"
                                                                  className="accordion-collapse collapse"
                                                                  aria-labelledby="headingThree"
                                                                  data-bs-parent="#accordionExample"
                                                            >
                                                                  <div className="accordion-body my-2">
                                                                        <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                                                                        <p>
                                                                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                                                                              nemo impedit, sapiente quis illo quia nulla atque maxime
                                                                              fuga minima ipsa quae cum consequatur, sit, delectus
                                                                              exercitationem odit officiis maiores! Neque, quidem corrupti
                                                                              modi architecto eos saepe incidunt dignissimos rerum.
                                                                        </p>
                                                                        <p>
                                                                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                              Dicta distinctio hic fuga odio excepturi ducimus sequi at.
                                                                              Doloribus, non aspernatur.
                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </div> */}
                                                </div>
                                          </div>
                                          {/* right side image */}
                                          <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
                                                <div className="FAQ-img RotateMoveRight rounded">

                                                      <Image src="/assets/images/faqs-onxius.png" className="img-fluid w-100 h-100" alt="ONXIUS FAQs" width={500} height={500} />
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        {/* FAQ End */}
                  </>

            </>
      );
}