"use client";

import Image from "next/image";
import { useState } from "react";

const faqs = [
      {
            id: 1,
            title: "1. How much does a website cost?",
            description:
                  "Our basic business website starts from £299. The final price depends on how many pages and features you need. We will always give you a clear quote before starting.",
      },
      {
            id: 2,
            title: "2. How long does it take to make a website?",
            description:
                  "It takes normally 5 to 10 working days for a basic website. Larger projects like online shops may take 2 to 3 weeks or longer time.",
      },
      {
            id: 3,
            title: "3. Do I need technical knowledge?",
            description:
                  "No. We set everything up for you. You can simply use WhatsApp or email us for any changes.",
      },
      {
            id: 4,
            title: "4. Will my business appear on Google?",
            description:
                  "Yes. We set up Google Business Profile and basic SEO so customers can find your business on Google and Google Maps.",
      },
      {
            id: 5,
            title: "5. Can customers message me directly?",
            description:
                  "Yes. We can connect your website to WhatsApp so customers can message you instantly.",
      },
      {
            id: 6,
            title: "6. Do you provide support after the website is finished?",
            description:
                  "Yes. We provide on-going support and updates. Monthly support plans start from £39 per month.",
      },
      {
            id: 7,
            title: "7. Can I sell products online?",
            description:
                  "Yes. We can create an online shop where customers can order and pay online.",
      },
      {
            id: 8,
            title: "8. What information do you need from me?",
            description:
                  "Your business name, services, contact number, address and photos. We help you with everything else.",
      },
      {
            id: 9,
            title: "9. Do I need hosting and domain?",
            description:
                  "We can arrange domain and hosting for you, or we can use your existing one.",
      },
      {
            id: 10,
            title: "10. Can you update my old website?",
            description: "Yes. We can fix, improve or redesign your existing website.",
      },
];

export default function Faqs({ isPortfolioPage }: { isPortfolioPage?: boolean }) {
      const [openId, setOpenId] = useState<number | null>(1); // First one open by default

      const toggleFaq = (id: number) => {
            setOpenId(openId === id ? null : id);
      };

      return (
            <div className="">
                  {/* FAQ Start */}
                  <div
                        className={
                              isPortfolioPage
                                    ? "relative z-2"
                                    : "bg-light container-fluid FAQ overflow-hidden"
                        }
                  >
                        <div className="container">
                              <div className="row g-5 align-items-center py-5">
                                    {/* left side faqs */}
                                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                                          <div className="space-y-4">
                                                {faqs?.length > 0 &&
                                                      faqs.map((item) => {
                                                            const isOpen = openId === item.id;

                                                            return (
                                                                  <div
                                                                        key={item.id}
                                                                        className="border border-gray-200 rounded-lg overflow-hidden"
                                                                  >
                                                                        <button
                                                                              onClick={() => toggleFaq(item.id)}
                                                                              className="w-full px-4 py-4 text-left font-medium bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                                                                        >
                                                                              <span>{item.title}</span>
                                                                              <span
                                                                                    className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                                                                          }`}
                                                                              >
                                                                                    ▼
                                                                              </span>
                                                                        </button>

                                                                        {isOpen && (
                                                                              <div className="px-4 py-4 bg-white border-t border-gray-200">
                                                                                    <p className="text-gray-700 leading-relaxed">
                                                                                          {item.description}
                                                                                    </p>
                                                                              </div>
                                                                        )}
                                                                  </div>
                                                            );
                                                      })}
                                          </div>
                                    </div>

                                    {/* right side image */}
                                    <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
                                          <div className="FAQ-img RotateMoveRight rounded">
                                                <Image
                                                      src="/assets/images/faqs-onxius.png"
                                                      className="img-fluid w-100 h-100"
                                                      alt="ONXIUS FAQs"
                                                      width={500}
                                                      height={500}
                                                />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  {/* FAQ End */}
            </div>
      );
}