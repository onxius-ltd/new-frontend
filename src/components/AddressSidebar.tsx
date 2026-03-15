"use client";
import Link from "next/link";

// 👈 add this if you plan to use interactivity (like mobile toggle)


export default function AddressSidebar() {

      return (
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
                  <div className="d-flex align-items-center mb-4">
                        <div
                              className="bg-light d-flex align-items-center justify-content-center mb-3"
                              style={{ width: 90, height: 90, borderRadius: 50 }}
                        >
                              <i className="fa fa-map-marker-alt fa-2x text-primary" />
                        </div>
                        <div className="ms-4">
                              <h4>Addresses</h4>
                              <p className="mb-0">
                                    15 Shenley Road<br />
                                    London TW5 0AD<br />
                                    United Kingdom
                              </p>
                        </div>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                        <div
                              className="bg-light d-flex align-items-center justify-content-center mb-3"
                              style={{ width: 90, height: 90, borderRadius: 50 }}
                        >
                              <i className="fa fa-phone-alt fa-2x text-primary" />
                        </div>
                        <div className="ms-4">
                              <h4>Mobile</h4>
                              <Link href="tel:+44 7723 819735" className="text-black">
                                    +44 7723 819735
                              </Link>
                        </div>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                        <div
                              className="bg-light d-flex align-items-center justify-content-center mb-3"
                              style={{ width: 90, height: 90, borderRadius: 50 }}
                        >
                              <i className="fa fa-envelope-open fa-2x text-primary" />
                        </div>
                        <div className="ms-4">
                              <h4>Email</h4>
                              <Link href="mailto:info@onxius.com" className="text-black">
                                    info@onxius.com
                              </Link>
                        </div>
                  </div>
                  <div className="d-flex align-items-center">
                        <div className="me-4">
                              <div
                                    className="bg-light d-flex align-items-center justify-content-center"
                                    style={{ width: 90, height: 90, borderRadius: 50 }}
                              >
                                    <i className="fas fa-share fa-2x text-primary" />
                              </div>
                        </div>
                        <div className="d-flex">
                              <Link
                                    className="btn btn-lg-square butn-custom-outline rounded-circle me-2"
                                    href="#"
                              >
                                    <i className="fab fa-facebook-f" />
                              </Link>
                              <Link
                                    className="btn btn-lg-square butn-custom-outline rounded-circle mx-2"
                                    href=""
                              >
                                    <i className="fab fa-twitter" />
                              </Link>
                              <Link
                                    className="btn btn-lg-square butn-custom-outline rounded-circle mx-2"
                                    href=""
                              >
                                    <i className="fab fa-instagram" />
                              </Link>
                              <Link
                                    className="btn btn-lg-square butn-custom-outline rounded-circle mx-2"
                                    href=""
                              >
                                    <i className="fab fa-linkedin-in" />
                              </Link>
                        </div>
                  </div>
            </div>
      )
}