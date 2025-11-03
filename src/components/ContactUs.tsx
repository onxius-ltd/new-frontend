"use client"; // 👈 add this if you plan to use interactivity (like mobile toggle)
import Link from "next/link";
import ContactForm from "./ContactForm";

export default function ContactUs() {

      return (
            <div>
                  {/* Contact Start */}
                  <div className="container-fluid contact py-3">
                        <div className="container">
                              {/* top heading */}
                              <div
                                    className="text-center mx-auto mb-5 wow fadeInUp"
                                    data-wow-delay="0.1s"
                                    style={{ maxWidth: 900 }}
                              >
                                    <h4 className="text-primary mb-4">Contact Us</h4>
                                    <h1 className="display-5 mb-4">Let’s Build Something Great Together</h1>
                                    <p className="mb-0">
                                          Have a question or an idea? The Onxius team is here to help you craft innovative digital solutions. Reach out today — we’d love to discuss your project and explore how we can make it succeed.
                                    </p>
                              </div>
                              <div className="row g-5 align-items-center">
                                    {/* left side contact form */}
                                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                                          {/* <h2 className="display-5 mb-2">Our Contact Form</h2>
                                                <p className="mb-4">
                                                      Use the form below to connect with us directly. Whether it’s a business inquiry, support request, or collaboration proposal, our team will get back to you as soon as possible.
                                                </p> */}
                                          {/* <form>
                                                      <div className="row g-3">
                                                            <div className="col-lg-12 col-xl-6">
                                                                  <div className="form-floating">
                                                                        <input
                                                                              type="text"
                                                                              className="form-control"
                                                                              id="name"
                                                                              placeholder="Your Name"
                                                                        />
                                                                        <label htmlFor="name">Your Name</label>
                                                                  </div>
                                                            </div>
                                                            <div className="col-lg-12 col-xl-6">
                                                                  <div className="form-floating">
                                                                        <input
                                                                              type="email"
                                                                              className="form-control"
                                                                              id="email"
                                                                              placeholder="Your Email"
                                                                        />
                                                                        <label htmlFor="email">Your Email</label>
                                                                  </div>
                                                            </div>
                                                            <div className="col-lg-12 col-xl-6">
                                                                  <div className="form-floating">
                                                                        <input
                                                                              type="phone"
                                                                              className="form-control"
                                                                              id="phone"
                                                                              placeholder="Phone"
                                                                        />
                                                                        <label htmlFor="phone">Your Phone</label>
                                                                  </div>
                                                            </div>
                                                            <div className="col-lg-12 col-xl-6">
                                                                  <div className="form-floating">
                                                                        <input
                                                                              type="text"
                                                                              className="form-control"
                                                                              id="project"
                                                                              placeholder="Project"
                                                                        />
                                                                        <label htmlFor="project">Your Project</label>
                                                                  </div>
                                                            </div>
                                                            <div className="col-12">
                                                                  <div className="form-floating">
                                                                        <input
                                                                              type="text"
                                                                              className="form-control"
                                                                              id="subject"
                                                                              placeholder="Subject"
                                                                        />
                                                                        <label htmlFor="subject">Subject</label>
                                                                  </div>
                                                            </div>
                                                            <div className="col-12">
                                                                  <div className="form-floating">
                                                                        <textarea
                                                                              className="form-control"
                                                                              placeholder="Leave a message here"
                                                                              id="message"
                                                                              style={{ height: 160 }}
                                                                              defaultValue={""}
                                                                        />
                                                                        <label htmlFor="message">Message</label>
                                                                  </div>
                                                            </div>
                                                            <div className="col-12">
                                                                  <button className="btn butn-custom w-100 py-3">
                                                                        Send Message
                                                                  </button>
                                                            </div>
                                                      </div>
                                                </form> */}
                                          <ContactForm />
                                    </div>
                                    {/* right side address info */}
                                    <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
                                          {/* address 1 */}
                                          {/* <div className="d-flex align-items-center mb-4">
                                                      <div
                                                            className="bg-light d-flex align-items-center justify-content-center mb-3"
                                                            style={{ width: 90, height: 90, borderRadius: 50 }}
                                                      >
                                                            <i className="fa fa-home fa-2x text-primary" />
                                                      </div>
                                                      <div className="ms-4">
                                                            <h4>Addresses</h4>
                                                            <p className="mb-0">123 ranking Street, New York, USA</p>
                                                      </div>
                                                </div> */}
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
                                                      <a
                                                            className="btn btn-lg-square butn-custom-outline rounded-circle me-2"
                                                            href=""
                                                      >
                                                            <i className="fab fa-facebook-f" />
                                                      </a>
                                                      <a
                                                            className="btn btn-lg-square butn-custom-outline rounded-circle mx-2"
                                                            href=""
                                                      >
                                                            <i className="fab fa-twitter" />
                                                      </a>
                                                      <a
                                                            className="btn btn-lg-square butn-custom-outline rounded-circle mx-2"
                                                            href=""
                                                      >
                                                            <i className="fab fa-instagram" />
                                                      </a>
                                                      <a
                                                            className="btn btn-lg-square butn-custom-outline rounded-circle mx-2"
                                                            href=""
                                                      >
                                                            <i className="fab fa-linkedin-in" />
                                                      </a>
                                                </div>
                                          </div>
                                    </div>
                                    {/* google map */}
                                    <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                                          <div className="rounded h-100">
                                                <iframe
                                                      className="rounded w-100"
                                                      style={{ height: 500 }}
                                                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.910750056003!2d-0.3874402244863501!3d51.4781525128409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487672d128c17069%3A0xdd8356537b12e8e6!2s15%20Shenley%20Rd%2C%20Hounslow%20TW5%200AD%2C%20UK!5e0!3m2!1sen!2s!4v1761359710732!5m2!1sen!2s"
                                                      loading="lazy"
                                                      referrerPolicy="no-referrer-when-downgrade"
                                                />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  {/* Contact End */}
            </div>
      );
}