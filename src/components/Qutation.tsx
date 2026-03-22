"use client"; // 👈 add this if you plan to use interactivity (like mobile toggle)
import GoogleMap from "./GoogleMap";
import ContactForm2 from "./ContactForm2";

export default function Qutation() {

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
                                    <h4 className="text-primary mb-4">Customer Enquiry</h4>
                                    <h1 className="display-5 mb-4">Get Free Quotation</h1>
                                    <p className="mb-0">
                                          Have a question or an idea? The Onxius team is here to help you craft innovative digital solutions. Reach out today, we'd love to discuss your project.
                                    </p>
                              </div>
                              {/* contact form 2 */}
                              <div className="row g-5 align-items-center">
                                    <ContactForm2 />
                              </div>
                        </div>
                  </div>
                  {/* google map */}
                  <GoogleMap />
                  {/* Contact End */}
            </div >
      );
}