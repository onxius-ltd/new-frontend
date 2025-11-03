"use client"; // 👈 add this if you plan to use interactivity (like mobile toggle)
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Header() {
      const pathname = usePathname(); // e.g. "/", "/about", "/contact"
      const segments = pathname.split("/").filter(Boolean); // remove empty strings

      // Capitalize the last part as the title
      const title =
            segments.length === 0
                  ? "Home"
                  : segments[segments.length - 1].replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

      return (
            <>
                  {/* Header Start */}
                  <div className="container-fluid bg-breadcrumb">
                        <ul className="breadcrumb-animation">
                              <li />
                              <li />
                              <li />
                              <li />
                              <li />
                              <li />
                              <li />
                              <li />
                              <li />
                              <li />
                        </ul>
                        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                              <h3 className="display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">
                                    {title}
                              </h3>
                              <ol
                                    className="breadcrumb justify-content-center mb-0 wow fadeInDown"
                                    data-wow-delay="0.3s"
                              >
                                    {/* <li className="breadcrumb-item">
                                          <a href="index.html">Home</a>
                                    </li>
                                    <li className="breadcrumb-item">
                                          <a href="#">Pages</a>
                                    </li>
                                    <li className="breadcrumb-item active text-primary">Contact</li> */}
                                    <li className="breadcrumb-item">
                                          <Link href="/">Home</Link>
                                    </li>

                                    {segments.length > 0 && (
                                          <>
                                                {segments.map((segment, index) => {
                                                      const path = "/" + segments.slice(0, index + 1).join("/");
                                                      const isLast = index === segments.length - 1;
                                                      const label = segment
                                                            .replace(/-/g, " ")
                                                            .replace(/\b\w/g, (l) => l.toUpperCase());

                                                      return (
                                                            <li
                                                                  key={path}
                                                                  className={`breadcrumb-item ${isLast ? "active text-primary" : ""}`}
                                                            >
                                                                  {isLast ? (
                                                                        label
                                                                  ) : (
                                                                        <Link href={path}>{label}</Link>
                                                                  )}
                                                            </li>
                                                      );
                                                })}
                                          </>
                                    )}
                              </ol>
                        </div>
                  </div>
                  {/* Header End */}
            </>
      );
}