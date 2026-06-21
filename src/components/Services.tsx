"use client"; // 👈 add this if you plan to use interactivity (like mobile toggle)
import Link from "next/link";
import Image from "next/image";

const services = [
      {
            icon: "/assets/images/Web Design  Development icon.webp",
            title: "Web Development",
            subtitle: "Stunning, High-Performance Websites",
            desc: "We create easy to use websites for your shop or business so customers can find you on Google and contact you."
      },
      {
            icon: "/assets/images/pwa-icon.webp",
            title: "Progressive Web Apps",
            subtitle: "Fast, App-Like Web Experiences",
            desc: "Mobile friendly website (works like an app on phone, no download needed)"
      },
      {
            icon: "/assets/images/Mobile App Development icon .webp",
            title: "Mobile Apps",
            subtitle: "Engaging iOS & Android Applications",
            desc: "We create mobile apps if your business needs online orders, bookings or customer accounts."
      },
      {
            icon: "/assets/images/WordPress  E-Commerce Solutions icon .webp",
            title: "WordPress & E-Commerce",
            subtitle: "Flexible, Growth-Ready Online Stores",
            desc: "Online shop (customers can order and pay on your website)"
      },
      {
            icon: "/assets/images/SEO and Digital Marketing icon .webp",
            title: "SEO & Marketing",
            subtitle: "Get Found, Ranked, and Recognized",
            desc: "We help your business appear on Google and Google Maps so nearby customers can find you."
      },
      {
            icon: "/assets/images/UI UX Design icon .webp",
            title: "UI/UX Design",
            subtitle: "Beautiful, User-Focused Experiences",
            desc: "Clean and intuitive interfaces that enhance usability and keep users engaged across platforms."
      },
      {
            icon: "/assets/images/Desktop App Development icon.webp",
            title: "Desktop Apps",
            subtitle: "Smart Cross-Platform Desktop Solutions",
            desc: "Secure and efficient desktop apps with offline capability built for productivity and performance."
      },
      {
            icon: "/assets/images/Maintenance and Support icon.webp",
            title: "Support & Maintenance",
            subtitle: "Reliable Care After Launch",
            desc: "Ongoing updates, monitoring, and support to keep your systems secure, stable, and optimized."
      }
];


export default function Services() {

      return (
            <div className="">
                  {/* <!-- Service Start --> */}
                  <div className="container-fluid service">
                        <div className="container">
                              {/* main content */}
                              <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
                                    <h4 className="mb-1 text-primary">Our Service</h4>
                                    <h1 className="display-5 mb-2">Want a Website Like This for Your Business?</h1>
                                    <p className="mb-0">Get in touch today for a free, no-obligation chat.
                                    </p>
                              </div>
                              {/* services */}
                              <div className="row g-4 justify-content-stretch align-items-stretch">
                                    {services?.length > 0 &&
                                          services.map((item, index) => {
                                                const timing = index / 10;
                                                return (
                                                      <div
                                                            key={index}
                                                            className="col-lg-6 col-xl-4 wow fadeInUp"
                                                            data-wow-delay={`${timing}s`}
                                                      >
                                                            {/* service item content */}
                                                            <div className="h-full service-item text-left rounded p-4 d-flex flex-column align-items-start">
                                                                  <div className="service-icon d-inline-block mb-4">
                                                                        {item.icon && <Image src={item.icon} className="img-fluid w-full mx-auto" alt={item.title} width={100} height={100} loading={"lazy"} />}
                                                                  </div>
                                                                  {/* description */}
                                                                  <div className="service-content flex-grow-1">
                                                                        <h2 className="mb-0.5 text-[var(--dark-blue-clr)] text-sm">{item.title}</h2>
                                                                        <h3 className="text-body-secondary text-base mb-2">{item.subtitle}</h3>
                                                                        <p className="mb-4">{item.desc}</p>
                                                                  </div>
                                                                  {/* link */}
                                                                  <div>
                                                                        <Link
                                                                              href="/get-free-quotation"
                                                                              className="butn-custom butn-custom-outline rounded-pill text-primary font-bold py-2 px-4 mt-auto"
                                                                        >
                                                                              Get a Free Quote &#x2799;
                                                                        </Link>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                );
                                          })}
                              </div>
                        </div>
                  </div>
                  {/* <!-- Service End --> */}
            </div >
      )
};