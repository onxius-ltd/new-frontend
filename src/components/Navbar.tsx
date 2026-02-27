"use client"; // 👈 add this if you plan to use interactivity (like mobile toggle)
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import HomeHeader from "./HomeHeader";
import { usePathname } from "next/navigation";
import Header from "./Header";

type menuItem = { label: string; href: string };

const menus: menuItem[] = [
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

export default function Navbar() {
      const pathname = usePathname();
      const [isOpen, setIsOpen] = useState<boolean>(false);
      // const [width, setWidth] = useState<number>(0)

      // useEffect(() => {
      //       if (typeof window == undefined) {
      //             return;
      //       }
      //       setWidth(window.innerWidth)
      // }, []);

      // console.log("isopend = ", (!isOpen && width < 992 ? "none !important" : "block !important"))

      return (
            <div>
                  {/* Navbar & Hero Start */}
                  <div className="container-fluid header overflow-hidden p-0 sticky-top">
                        {/* navbar */}
                        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-2 py-lg-0 d-flex justify-content-between align-items-cetner gap-2 w-full">
                              {/* nav logo */}
                              <Link href="/" className="navbar-brand p-0">
                                    <Image src="/assets/logo/new-onxius-logo-without-bg.png" className="img-fluid w-auto h-40 sm:h-100" alt="ONXIUS Logo" width={220} height={65} />
                              </Link>
                              {/* nav toggler */}
                              <button
                                    // className="navbar-toggler"
                                    type="button"
                                    // data-bs-toggle="collapse"
                                    // data-bs-target="#navbarCollapse"
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="md:hidden text-[var(--dark-blue-clr)] border-[var(--dark-blue-clr)] text-2xl"
                              // style={{ color: "var(--dark-blue-clr)] !important", borderColor: "var(--dark-blue-clr)] !important" }}
                              >
                                    {/* {isOpen ? "X" : "open"} */}
                                    {isOpen ? "X" : <span className="fa fa-bars text-2xl" />}
                              </button>
                              {/* menus */}
                              <div className={`flex flex-column md:flex-row justify-content-center md:justify-content-end align-items-center flex-1 toggleNav ${isOpen ? "show" : "hide"}`}>
                                    {/* menus */}
                                    <div className="navbar-nav ms-auto py-0 align-items-center">
                                          {/* menu options */}
                                          {
                                                menus?.length > 0 && menus?.map((item, index) =>
                                                      <Link href={item.href} className={`nav-item nav-link ${index == 0 ? "active" : ""}`} key={index} onClick={() => setIsOpen(false)}>
                                                            {item.label}
                                                      </Link>
                                                )
                                          }
                                          {/* let's connect button */}
                                          {/* <div className="border talk-button"> */}
                                          <Link
                                                href="/contact"
                                                className="nav-item nav-link btn butn-custom rounded-pill py-2 px-4 talk-button" style={{ color: "white !important" }} onClick={() => setIsOpen(false)}
                                          >
                                                Get a Free Quote &#x2799;
                                          </Link>
                                          {/* </div> */}
                                    </div>
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
