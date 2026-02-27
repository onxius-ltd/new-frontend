"use client"; // 👈 add this if you plan to use interactivity (like mobile toggle)
import Link from "next/link";
import Image from "next/image";

// const services = [
//       {
//             icon: "/assets/images/Web Design  Development icon.png",
//             title: "Web Design & Development",
//             subtitle: "Crafting Stunning, High-Performance Websites",
//             desc: "We specialize in creating responsive, user-friendly, and visually appealing websites that help your business stand out. Using modern frameworks like React, Next.js, and Laravel, we deliver custom solutions that combine creativity with functionality."
//       },
//       {
//             icon: "/assets/images/pwa-icon.png",
//             title: "Progressive Web Apps (PWA)",
//             subtitle: "Delivering App-Like Experiences on the Web",
//             desc: "We develop Progressive Web Apps that combine the best of web and mobile technologies. Our PWAs are fast, reliable, installable, and capable of working offline — giving users a seamless and engaging experience across all devices."
//       },
//       {
//             icon: "/assets/images/Mobile App Development icon .png",
//             title: "Mobile App Development",
//             subtitle: "Engaging Mobile Experiences for Every Platform",
//             desc: "Using React Native, we develop high-performance mobile applications for Android and iOS. Our apps deliver intuitive interfaces and real-time functionality designed to keep users engaged."
//       },
//       {
//             icon: "/assets/images/WordPress  E-Commerce Solutions icon .png",
//             title: "WordPress & E-Commerce Solutions",
//             subtitle: "Flexible, Manageable, and Growth-Ready Websites",
//             desc: "We design and develop professional WordPress websites, from portfolios to full-featured e-commerce stores using WooCommerce. Every site is optimized for performance, SEO, and easy content management."
//       },
//       {
//             icon: "/assets/images/SEO and Digital Marketing icon .png",
//             title: "SEO & Digital Marketing",
//             subtitle: "Helping You Get Found, Ranked, and Recognized",
//             desc: "Our SEO and marketing services ensure your business reaches the right audience. We optimize your website for search engines, improve page rankings, and enhance visibility through keyword research and content strategy."
//       },
//       {
//             icon: "/assets/images/UI UX Design icon .png",
//             title: "UI/UX Design",
//             subtitle: "Designs That Blend Creativity With Usability",
//             desc: "We focus on creating seamless user experiences through intuitive and engaging designs. Every interface we craft is visually appealing, user-friendly, and responsive across all devices."
//       },
//       {
//             icon: "/assets/images/Desktop App Development icon.png",
//             title: "Desktop App Development",
//             subtitle: "Smart Desktop Solutions With Electron.js",
//             desc: "We build powerful and efficient desktop applications using Electron.js, enabling cross-platform compatibility and offline functionality — perfect for internal business tools and productivity apps."
//       },
//       {
//             icon: "/assets/images/Maintenance & Support icon.png",
//             title: "Maintenance & Support",
//             subtitle: "Reliable Post-Launch Assistance",
//             desc: "Our relationship doesn’t end after project delivery. We offer continuous technical support, performance monitoring, and maintenance to ensure your website or application remains secure and up to date."
//       }
// ];


const services = [
      {
            icon: "/assets/images/Web Design  Development icon.png",
            title: "Web Development",
            subtitle: "Stunning, High-Performance Websites",
            desc: "We create easy to use websites for your shop or business so customers can find you on Google and contact you."
      },
      {
            icon: "/assets/images/pwa-icon.png",
            title: "Progressive Web Apps",
            subtitle: "Fast, App-Like Web Experiences",
            desc: "Mobile friendly website (works like an app on phone, no download needed)"
      },
      {
            icon: "/assets/images/Mobile App Development icon .png",
            title: "Mobile Apps",
            subtitle: "Engaging iOS & Android Applications",
            desc: "We create mobile apps if your business needs online orders, bookings or customer accounts."
      },
      {
            icon: "/assets/images/WordPress  E-Commerce Solutions icon .png",
            title: "WordPress & E-Commerce",
            subtitle: "Flexible, Growth-Ready Online Stores",
            desc: "Online shop (customers can order and pay on your website)"
      },
      {
            icon: "/assets/images/SEO and Digital Marketing icon .png",
            title: "SEO & Marketing",
            subtitle: "Get Found, Ranked, and Recognized",
            desc: "We help your business appear on Google and Google Maps so nearby customers can find you."
      },
      {
            icon: "/assets/images/UI UX Design icon .png",
            title: "UI/UX Design",
            subtitle: "Beautiful, User-Focused Experiences",
            desc: "Clean and intuitive interfaces that enhance usability and keep users engaged across platforms."
      },
      {
            icon: "/assets/images/Desktop App Development icon.png",
            title: "Desktop Apps",
            subtitle: "Smart Cross-Platform Desktop Solutions",
            desc: "Secure and efficient desktop apps with offline capability built for productivity and performance."
      },
      {
            icon: "/assets/images/Maintenance and Support icon.png",
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
                                    <h1 className="display-5 mb-2">What We Can Do For You</h1>
                                    <p className="mb-0">We build reliable, secure, and scalable digital experiences that empower your business to thrive in a competitive digital landscape.
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
                                                                        {item.icon && <Image src={item.icon} className="img-fluid w-full mx-auto" alt={item.title} width={100} height={100} />}
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
                                                                              href="/contact"
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