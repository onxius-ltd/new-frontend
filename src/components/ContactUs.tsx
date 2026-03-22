"use client"; // 👈 add this if you plan to use interactivity (like mobile toggle)
import ContactForm from "./ContactForm";
import GoogleMap from "./GoogleMap";
import AddressSidebar from "./AddressSidebar";

export default function ContactUs() {

      return (
            <div>
                  {/* Contact Start */}
                  <div className="container-fluid contact bg-transparent mb-5">
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
                                          Have a question or an idea? The Onxius team is here to help you craft innovative digital solutions. Reach out today, we’d love to discuss your project and explore how we can make it succeed.
                                    </p>
                              </div>
                              <div className="row g-5 align-items-center">
                                    {/* left side contact form */}
                                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                                          <ContactForm />
                                    </div>
                                    {/* right side address info */}
                                    <AddressSidebar />
                              </div>
                        </div>
                  </div>
                  {/* google map */}
                  <GoogleMap />
                  {/* Contact End */}
            </div>
      );
}