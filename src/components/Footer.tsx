"use client"; // 👈 add this if you plan to use interactivity (like mobile toggle)
import Link from "next/link";
import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";


export default function Footer() {

      return (
            <div>
                  {/* Footer Start */}
                  <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
                        <div className="container py-5">
                              <div className="row g-5">
                                    <div className="col-md-6 col-lg-6 col-xl-3">
                                          <div className="footer-item d-flex flex-column">
                                                <Link href="/" className="navbar-brand p-0">
                                                      <Image src="/assets/logo/new-onxius-logo-without-bg.png" className="img-fluid w-100 h-100" alt="ONXIUS Logo" width={240} height={85} />
                                                </Link>
                                                <p className="ps-3 py-2">
                                                      Create modern, scalable, and user-friendly digital solutions that help businesses grow and succeed online.
                                                </p>
                                                <div className="d-flex align-items-center">
                                                      <i className="fas fa-share fa-2x text-secondary me-2" />
                                                      <Link
                                                            className="btn-square btn butn-custom-outline rounded-circle mx-1"
                                                            href=""
                                                      >
                                                            <i className="fab fa-facebook-f" />
                                                      </Link>
                                                      <Link
                                                            className="btn-square btn butn-custom-outline rounded-circle mx-1"
                                                            href=""
                                                      >
                                                            <i className="fab fa-twitter" />
                                                      </Link>
                                                      <Link
                                                            className="btn-square btn butn-custom-outline rounded-circle mx-1"
                                                            href=""
                                                      >
                                                            <i className="fab fa-instagram" />
                                                      </Link>
                                                      <Link
                                                            className="btn-square btn butn-custom-outline rounded-circle mx-1"
                                                            href=""
                                                      >
                                                            <i className="fab fa-linkedin-in" />
                                                      </Link>
                                                </div>
                                                {/* <h4 className="text-dark mb-4">Company</h4>
                                                <Link href=""> Why Mailler?</Link>
                                                <Link href=""> Our Features</Link>
                                                <Link href=""> Our Portfolio</Link>
                                                <Link href=""> About Us</Link>
                                                <Link href=""> Our Blog &amp; News</Link>
                                                <Link href=""> Get In Touch</Link> */}
                                          </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-3">
                                          <div className="footer-item d-flex flex-column">
                                                <h4 className="mb-4 text-dark">Quick Links</h4>
                                                <Link href="/"> Home</Link>
                                                <Link href="/services"> Services</Link>
                                                <Link href="/portfolio"> Portfolio</Link>
                                                <Link href="/about"> About</Link>
                                                <Link href="/contact"> Contact Us</Link>
                                                {/* <Link href=""> Privacy Policy</Link>
                                                <Link href=""> Terms &amp; Conditions</Link> */}
                                                {/* <Link href=""> Our Blog &amp; News</Link>
                                                <Link href=""> Our Team</Link> */}
                                          </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-3">
                                          <div className="footer-item d-flex flex-column">
                                                <h4 className="mb-4 text-dark">Services</h4>
                                                {/* <Link href=""> All Services</Link> */}
                                                <Link href=""> Web Design & Development</Link>
                                                <Link href=""> Progressive Web Apps (PWA)</Link>
                                                <Link href=""> Mobile App Development</Link>
                                                <Link href=""> E-Commerce Solutions</Link>
                                                <Link href=""> SEO & Digital Marketing</Link>
                                                <Link href=""> UI/UX Design</Link>
                                                <Link href=""> Desktop App Development</Link>
                                                <Link href=""> Maintenance & Support</Link>
                                          </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-3">
                                          <div className="footer-item d-flex flex-column">
                                                <h4 className="mb-4 text-dark">Contact Info</h4>
                                                <Link href="">
                                                      <i className="fa fa-map-marker-alt me-2" />
                                                      15 Shenley Road<br />
                                                      London TW5 0AD<br />
                                                      United Kingdom
                                                </Link>
                                                <Link href="mailto:info@onxius.com">
                                                      <i className="fas fa-envelope me-2" /> info@onxius.com
                                                </Link>
                                                <Link href="tel:+44 7723 819735">
                                                      <i className="fas fa-phone-alt me-2" /> +44 7723 819735
                                                </Link>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  {/* whatsapp me */}
                  <WhatsAppButton />
                  {/* Footer End */}
            </div>
      );
}