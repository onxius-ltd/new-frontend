"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
      name: string;
      email: string;
      phone: string;
      project: string;
      subject: string;
      message: string;
}

const ContactForm: React.FC = () => {
      const [formData, setFormData] = useState<FormData>({
            name: "",
            email: "",
            phone: "",
            project: "",
            subject: "",
            message: "",
      });

      const [status, setStatus] = useState<string>("");
      const [loading, setLoading] = useState<boolean>(false);

      const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }));
      };

      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setLoading(true);
            setStatus("");

            try {
                  const res = await fetch("/api/send-email", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(formData),
                  });

                  if (res.ok) {
                        setStatus("✅ Message sent successfully!");
                        setFormData({
                              name: "",
                              email: "",
                              phone: "",
                              project: "",
                              subject: "",
                              message: "",
                        });
                  } else {
                        setStatus("❌ Failed to send message. Please try again.");
                  }
            } catch (error) {
                  console.error(error);
                  setStatus("❌ Something went wrong. Try again later.");
            } finally {
                  setLoading(false);
            }
      };

      return (
            <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                        {[
                              { name: "name", label: "Your Name", type: "text" },
                              { name: "email", label: "Your Email", type: "email" },
                              { name: "phone", label: "Your Phone", type: "text" },
                              { name: "project", label: "Your Project", type: "text" },
                              { name: "subject", label: "Subject", type: "text" },
                        ].map((field) => (
                              <div key={field.name} className={field.name !== "subject" ? "col-lg-12 col-xl-6" : "col-12"}>
                                    <div className="form-floating">
                                          <input
                                                type={field.type}
                                                name={field.name}
                                                // value={(formData as any)[field.name]}
                                                value={formData[field.name as keyof FormData]}
                                                onChange={handleChange}
                                                className="form-control"
                                                id={field.name}
                                                placeholder={field.label}
                                                required={field.name !== "phone" && field.name !== "project"}
                                          />
                                          <label htmlFor={field.name}>{field.label}</label>
                                    </div>
                              </div>
                        ))}

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

                        <div className="col-12">
                              <button
                                    type="submit"
                                    className="btn butn-custom w-100 py-3"
                                    disabled={loading}
                              >
                                    {loading ? "Sending..." : "Send Message"}
                              </button>
                        </div>

                        {status && (
                              <div className="col-12 text-center mt-2">
                                    <p>{status}</p>
                              </div>
                        )}
                  </div>
            </form>
      );
};

export default ContactForm;
