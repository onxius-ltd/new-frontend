"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import HomeHeader from "./HomeHeader";
import { usePathname } from "next/navigation";
import Header from "./Header";

type menuItem = { label: string; href: string };

const menus: menuItem[] = [
  { label: "Home",       href: "/"         },
  { label: "Services",   href: "/services"  },
  { label: "Portfolio",  href: "/portfolio" },
  { label: "About",      href: "/about"     },
  { label: "Contact Us", href: "/contact"   },
];

// Returns true if this menu item should be considered active.
// Exact match for "/" to avoid it matching every route.
function isActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <div className="container-fluid header overflow-hidden p-0 sticky-top">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-2 py-lg-0 d-flex justify-content-between align-items-center gap-2 w-full">

          {/* Logo */}
          <Link href="/" className="navbar-brand p-0">
            <Image
              src="/assets/logo/new-onxius-logo-without-bg.png"
              className="img-fluid w-auto h-40 sm:h-100"
              alt="ONXIUS Logo"
              width={220}
              height={65}
            />
          </Link>

          {/* Mobile toggler */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[var(--dark-blue-clr)] border-[var(--dark-blue-clr)] text-2xl"
          >
            {isOpen ? "X" : <span className="fa fa-bars text-2xl" />}
          </button>

          {/* Menu */}
          <div
            className={`flex flex-column md:flex-row justify-content-center md:justify-content-end align-items-center flex-1 toggleNav ${
              isOpen ? "show" : "hide"
            }`}
          >
            <div className="navbar-nav ms-auto py-0 align-items-center">
              {menus.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  // ── FIX: compare href against live pathname instead of index
                  className={`nav-item nav-link ${
                    isActive(item.href, pathname) ? "active" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* CTA */}
              <Link
                href="/contact"
                className="nav-item nav-link btn butn-custom rounded-pill py-2 px-4 talk-button"
                onClick={() => setIsOpen(false)}
              >
                <span style={{ color: "white !important" }}>Get a Free Quote &#x2799;</span>
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero / Page Header */}
        {pathname === "/" ? <HomeHeader /> : <Header />}
      </div>
    </div>
  );
}
