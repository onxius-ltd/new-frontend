"use client";
import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert";


interface FormData {
      name: string;
      email: string;
      phone: string;
      project: string;
      budget: string;   // ✅ Added budget
      // subject: string;
      message: string;
}

const ContactForm: React.FC = () => {
      // ✅ Create a ref to control the ReCAPTCHA
      const recaptchaRef = useRef<ReCAPTCHA>(null);
      const [formData, setFormData] = useState<FormData>({
            name: "",
            email: "",
            phone: "",
            project: "",
            budget: "",
            // subject: "",
            message: "",
      });
      // const [status, setStatus] = useState<string>("");
      const [loading, setLoading] = useState<boolean>(false);
      const [captchaToken, setCaptchaToken] = useState<string | null>(null);


      const handleChange = (
            e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
      ) => {
            const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }));
      };

      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            if (!captchaToken) {
                  // setStatus("Please verify reCAPTCHA");
                  Swal("Oops!", "Please verify reCAPTCHA", "error");
                  return;
            }
            setLoading(true);
            // setStatus("");
            const data = { ...formData, captchaToken };

            try {
                  const res = await fetch("/api/send-email", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(data),
                  });

                  if (res.ok) {
                        Swal("Success", "Message sent successfully!", "success");

                        // setStatus("✅ Message sent successfully!");
                        setFormData({
                              name: "",
                              email: "",
                              phone: "",
                              project: "",
                              budget: "",
                              // subject: "",
                              message: "",
                        });
                        setCaptchaToken(null);
                        // ✅ Reset the ReCAPTCHA after submission
                        recaptchaRef.current?.reset();
                  } else {
                        // setStatus("❌ Failed to send message. Please try again.");
                        Swal("Oops!", "Failed to send message. Please try again.", "error");
                  }
            } catch (error) {
                  console.error(error);
                  // setStatus("❌ Something went wrong. Try again later.");
                  Swal("Oops!", "Something went wrong. Try again later.", "error");
            } finally {
                  setLoading(false);
            }
      };

      const fields = [
            { name: "name", label: "Your Name", type: "text" },
            { name: "email", label: "Your Email", type: "email" },
            { name: "phone", label: "Your Phone", type: "text" },
            { name: "project", label: "Your Project", type: "text" },
            { name: "budget", label: "Budget Range", type: "select" },
            // { name: "subject", label: "Subject", type: "text" },
      ];

      return (
            <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                        {fields.map((field) => (
                              <div
                                    key={field.name}
                                    className={
                                          // field.name !== "subject" &&
                                          field.name !== "budget"
                                                ? "col-lg-12 col-xl-6"
                                                : "col-12"
                                    }
                              >
                                    <div className="form-floating">
                                          {field.type === "select" ? (
                                                <select
                                                      name="budget"
                                                      value={formData.budget}
                                                      onChange={handleChange}
                                                      className="form-select"
                                                      id="budget"
                                                      required
                                                >
                                                      <option value="">Select Budget</option>
                                                      <option value="0-1000">£0 - £1,000</option>
                                                      <option value="1000-3000">£1,000 - £3,000</option>
                                                      <option value="3000-5000">£3,000 - £5,000</option>
                                                      <option value="5000-10000">£5,000 - £10,000</option>
                                                      <option value="10000+">£10,000+</option>
                                                </select>
                                          ) : (
                                                <input
                                                      type={field.type}
                                                      name={field.name}
                                                      value={formData[field.name as keyof FormData]}
                                                      onChange={handleChange}
                                                      className="form-control"
                                                      id={field.name}
                                                      placeholder={field.label}
                                                      required={
                                                            field.name !== "phone" &&
                                                            field.name !== "project"
                                                      }
                                                />
                                          )}
                                          <label htmlFor={field.name}>{field.label}</label>
                                    </div>
                              </div>
                        ))}

                        {/* Message */}
                        <div className="col-12">
                              <div className="form-floating">
                                    <textarea
                                          name="message"
                                          value={formData.message}
                                          onChange={handleChange}
                                          className="form-control"
                                          id="message"
                                          placeholder="Leave a message here"
                                          style={{ height: 160 }}
                                          required
                                    />
                                    <label htmlFor="message">Message</label>
                              </div>
                        </div>

                        <ReCAPTCHA
                              ref={recaptchaRef} // controlled via ref
                              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                              onChange={(token: string | null) => setCaptchaToken(token)}
                              onExpired={() => setCaptchaToken(null)} // reset token if it expires
                        />

                        {/* Submit Button */}
                        <div className="col-12">
                              <button
                                    type="submit"
                                    className="btn butn-custom w-100 py-3"
                                    disabled={loading}
                              >
                                    {loading ? "Sending..." : "Send Message"}
                              </button>
                        </div>

                        {/* {status && (
                              <div className="col-12 text-center mt-2">
                                    <p>{status}</p>
                              </div>
                        )} */}
                  </div>
            </form>
      );
};

export default ContactForm;
