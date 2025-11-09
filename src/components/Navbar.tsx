"use client"; // 👈 add this if you plan to use interactivity (like mobile toggle)
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import HomeHeader from "./HomeHeader";
import { usePathname } from "next/navigation";
import Header from "./Header";


export default function Navbar() {
      const pathname = usePathname();
      const [isOpen, setIsOpen] = useState(false);
      const menus = [
            {
                  label: "Home",
                  href: "/"
            },
            {
                  label: "Services",
                  href: "/services"
            },
            {
                  label: "Portfolio",
                  href: "/portfolio"
            },
            {
                  label: "About",
                  href: "/about"
            },
            {
                  label: "Contact Us",
                  href: "/contact"
            }
      ]

      return (
            <div>
                  {/* Navbar & Hero Start */}
                  <div className="container-fluid header position-relative overflow-hidden p-0">
                        {/* navbar */}
                        <nav className="navbar navbar-expand-lg fixed-top navbar-light px-4 px-lg-5 py-3 py-lg-0 d-flex justify-content-between align-items-cetner gap-2 w-full">
                              {/* nav logo */}
                              <Link href="/" className="navbar-brand p-0">
                                    <Image src="/assets/logo/new-onxius-logo-without-bg.png" className="img-fluid w-100 h-100" alt="ONXIUS Logo" width={240} height={85} />
                              </Link>
                              {/* nav toggler */}
                              <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarCollapse"
                                    onClick={() => setIsOpen(!isOpen)}
                              >
                                    <span className="fa fa-bars" />
                              </button>
                              {/* menus */}
                              <div className={`navbar ${isOpen ? "show" : ""}`} id="navbarCollapse">
                                    <div className="navbar-nav ms-auto py-0">
                                          {
                                                menus?.length > 0 && menus?.map((item, index) =>
                                                      <Link href={item.href} className={`nav-item nav-link ${index == 0 ? "active" : ""}`} key={index}>
                                                            {item.label}
                                                      </Link>
                                                )
                                          }
                                    </div>
                                    <Link
                                          href="/contact"
                                          className="btn butn-custom rounded-pill py-2 px-4"
                                    >
                                          Let&apos;s Talk &#x2799;
                                    </Link>
                              </div>
                        </nav>
                        {/* Hero Header Start */}
                        {pathname === "/" ? <HomeHeader /> : <Header />}
                        {/* Hero Header End */}
                  </div>
                  {/* Navbar & Hero End */}
            </div>
      );
}
