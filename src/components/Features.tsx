"use client"; // 👈 add this if you plan to use interactivity (like mobile toggle)

import Image from "next/image";
import AboutFearute from "./AboutFeature";

const process = [
      {
            icon: "/assets/icons/Discover-and-Plan 2.png",
            title: "Discover & Plan",
            subtitle: "Understanding Goals & Strategy",
            desc: "We start by understanding your business objectives, target audience, and project requirements to create a clear roadmap for success."
      },
      {
            icon: "/assets/icons/design-icon.png",
            title: "Design & Prototype",
            subtitle: "Creating Intuitive Experiences",
            desc: "Our team crafts wireframes and interactive prototypes to visualize the user journey and design seamless interfaces."
      },
      {
            icon: "/assets/icons/development-icon.png",
            title: "Develop & Build",
            subtitle: "Turning Ideas into Reality",
            desc: "We develop high-quality, scalable, and secure solutions using modern technologies, ensuring performance and reliability."
      },
      {
            icon: "/assets/icons/launch-icon.png",
            title: "Launch & Optimize",
            subtitle: "Deploy, Monitor & Improve",
            desc: "After deployment, we monitor performance, optimize for speed, and provide continuous support to ensure your solution thrives."
      },
      {
            icon: "/assets/icons/support-icon.png",
            title: "Support & Scale",
            subtitle: "Ongoing Maintenance & Growth",
            desc: "We provide ongoing maintenance, updates, and scaling strategies to help your digital product grow alongside your business."
      }
];


export default function Fearutes() {
      return (
            <div className="">
                  {/* process Start */}
                  <div className="container-fluid feature overflow-hidden">
                        <div className="container">
                              {/* process content */}
                              <div
                                    className="text-center mx-auto wow fadeInUp"
                                    data-wow-delay="0.1s"
                                    style={{ maxWidth: 900 }}
                              >
                                    <h4 className="text-primary">How We Work</h4>
                                    <h1 className="display-4 mb-2">
                                          Our Proven Process for Digital Success
                                    </h1>
                                    <p className="mb-0">
                                          At Onxius, we follow a structured approach that turns ideas into high-impact digital solutions. From understanding your goals to designing, developing, and optimizing your product, our process ensures efficiency, quality, and measurable results. Every step is focused on delivering scalable, user-friendly solutions that drive your business forward.
                                    </p>
                              </div>
                              {/* process cards */}
                              <div className="row g-4 justify-content-start items-stretch mb-5">
                                    {process?.length > 0 &&
                                          process.map((item, index) => {
                                                const delay = index * 0.1; // fade-in delay
                                                return (
                                                      <div
                                                            className="col-12 col-sm-6 col-lg-4 wow fadeInUp"
                                                            data-wow-delay={`${delay}s`}
                                                            key={index}
                                                      >
                                                            <div className="p-2.5 h-100 d-flex flex-column align-items-start">
                                                                  <div className="d-inline-block">
                                                                        <Image
                                                                              src={item.icon}
                                                                              alt={item.title}
                                                                              width={160}
                                                                              height={160}
                                                                              className="img-fluid w-full h-auto"
                                                                        />
                                                                  </div>
                                                                  <h5 className="fw-bold mb-1.5 text-primary">{item.title}</h5>
                                                                  <h6 className="text-muted mb-2.5">{item.subtitle}</h6>
                                                                  <p className="mb-0">{item.desc}</p>
                                                            </div>
                                                      </div>
                                                );
                                          })}
                              </div>
                              {/* process projects */}
                              <AboutFearute />
                        </div>
                  </div>
                  {/* process End */}
            </div>
      );
}