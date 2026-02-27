"use client"; // 👈 add this if you plan to use interactivity (like mobile toggle)
import Image from "next/image";

const faqs = [
      {
            "id": 1,
            "title": "1. How much does a website cost?",
            "description": "   Our basic business website starts from £299. The final price depends on how many pages and features you need. We will always give you a clear quote before starting."
      },
      {
            "id": 2,
            "title": "2. How long does it take to make a website?",
            "description": " It takes normally 5 to 10 working days for a basic website. Larger projects like online shops may take 2 to 3 weeks or longer time."
      },
      {
            "id": 3,
            "title": "3. Do I need technical knowledge?",
            "description": "   No. We set everything up for you. You can simply use WhatsApp or email us for any changes."
      },
      {
            "id": 4,
            "title": "4. Will my business appear on Google?",
            "description": "Yes. We set up Google Business Profile and basic SEO so customers can find your business on Google and Google Maps."
      },
      {
            "id": 5,
            "title": "5. Can customers message me directly?",
            "description": "Yes. We can connect your website to WhatsApp so customers can message you instantly."
      },
      {
            "id": 6,
            "title": "6. Do you provide support after the website is finished?",
            "description": "Yes. We provide on-going support and updates. Monthly support plans start from £39 per month."
      },
      {
            "id": 7,
            "title": "7. Can I sell products online?",
            "description": "Yes. We can create an online shop where customers can order and pay online."
      }
      ,
      {
            "id": 8,
            "title": "8. What information do you need from me?",
            "description": "Your business name, services, contact number, address and photos. We help you with everything else."
      },
      {
            "id": 9,
            "title": "9. Do I need hosting and domain?",
            "description": "We can arrange domain and hosting for you, or we can use your existing one."
      },
      {
            "id": 10,
            "title": "10. Can you update my old website?",
            "description": "Yes. We can fix, improve or redesign your existing website."
      }
]


export default function Faqs() {

      return (
            <div>
                  {/* FAQ Start */}
                  <div className="container-fluid FAQ bg-light overflow-hidden">
                        <div className="container ">
                              <div className="row g-5 align-items-center py-5">
                                    {/* left side faqs */}
                                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                                          <div className="accordion" id="accordionExample">
                                                <div className="accordion" id="accordionExample">
                                                      {faqs?.length > 0 && faqs.map((item, index) => {
                                                            const isFirst = index === 0; // only first open

                                                            return (
                                                                  <div className="accordion-item border-0 mb-4" key={index}>
                                                                        <h2 className="accordion-header" id={`heading-${index}`}>
                                                                              <button
                                                                                    className={`accordion-button rounded-top ${!isFirst ? 'collapsed' : ''}`}
                                                                                    type="button"
                                                                                    data-bs-toggle="collapse"
                                                                                    data-bs-target={`#collapse-${index}`}
                                                                                    aria-expanded={isFirst ? 'true' : 'false'}
                                                                                    aria-controls={`collapse-${index}`}
                                                                              >
                                                                                    {item.title}
                                                                              </button>
                                                                        </h2>

                                                                        <div
                                                                              id={`collapse-${index}`}
                                                                              className={`accordion-collapse collapse ${isFirst ? 'show' : ''}`}
                                                                              aria-labelledby={`heading-${index}`}
                                                                              data-bs-parent="#accordionExample"
                                                                        >
                                                                              <div className="accordion-body my-2">
                                                                                    <p>{item.description}</p>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            );
                                                      })}
                                                </div>
                                                {/* <div className="accordion-item border-0 mb-4">
                                                            <h2 className="accordion-header" id="headingOne">
                                                                  <button
                                                                        className="accordion-button rounded-top"
                                                                        type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#collapseOne"
                                                                        aria-expanded="true"
                                                                        aria-controls="collapseTOne"
                                                                  >
                                                                        Why did you choose Our Email Services?
                                                                  </button>
                                                            </h2>
                                                            <div
                                                                  id="collapseOne"
                                                                  className="accordion-collapse collapse show"
                                                                  aria-labelledby="headingOne"
                                                                  data-bs-parent="#accordionExample"
                                                            >
                                                                  <div className="accordion-body my-2">
                                                                        <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                                                                        <p>
                                                                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                                                                              nemo impedit, sapiente quis illo quia nulla atque maxime
                                                                              fuga minima ipsa quae cum consequatur, sit, delectus
                                                                              exercitationem odit officiis maiores! Neque, quidem corrupti
                                                                              modi architecto eos saepe incidunt dignissimos rerum.
                                                                        </p>
                                                                        <p>
                                                                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                              Dicta distinctio hic fuga odio excepturi ducimus sequi at.
                                                                              Doloribus, non aspernatur.
                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="accordion-item border-0 mb-4">
                                                            <h2 className="accordion-header" id="headingTwo">
                                                                  <button
                                                                        className="accordion-button collapsed rounded-top"
                                                                        type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#collapseTwo"
                                                                        aria-expanded="false"
                                                                        aria-controls="collapseTwo"
                                                                  >
                                                                        Are there any hidden charges?
                                                                  </button>
                                                            </h2>
                                                            <div
                                                                  id="collapseTwo"
                                                                  className="accordion-collapse collapse"
                                                                  aria-labelledby="headingTwo"
                                                                  data-bs-parent="#accordionExample"
                                                            >
                                                                  <div className="accordion-body my-2">
                                                                        <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                                                                        <p>
                                                                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                                                                              nemo impedit, sapiente quis illo quia nulla atque maxime
                                                                              fuga minima ipsa quae cum consequatur, sit, delectus
                                                                              exercitationem odit officiis maiores! Neque, quidem corrupti
                                                                              modi architecto eos saepe incidunt dignissimos rerum.
                                                                        </p>
                                                                        <p>
                                                                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                              Dicta distinctio hic fuga odio excepturi ducimus sequi at.
                                                                              Doloribus, non aspernatur.
                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="accordion-item border-0">
                                                            <h2 className="accordion-header" id="headingThree">
                                                                  <button
                                                                        className="accordion-button collapsed rounded-top"
                                                                        type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#collapseThree"
                                                                        aria-expanded="false"
                                                                        aria-controls="collapseThree"
                                                                  >
                                                                        What are the key challenges of email marketing?
                                                                  </button>
                                                            </h2>
                                                            <div
                                                                  id="collapseThree"
                                                                  className="accordion-collapse collapse"
                                                                  aria-labelledby="headingThree"
                                                                  data-bs-parent="#accordionExample"
                                                            >
                                                                  <div className="accordion-body my-2">
                                                                        <h5>Dolor sit amet consectetur adipisicing elit.</h5>
                                                                        <p>
                                                                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                                                                              nemo impedit, sapiente quis illo quia nulla atque maxime
                                                                              fuga minima ipsa quae cum consequatur, sit, delectus
                                                                              exercitationem odit officiis maiores! Neque, quidem corrupti
                                                                              modi architecto eos saepe incidunt dignissimos rerum.
                                                                        </p>
                                                                        <p>
                                                                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                              Dicta distinctio hic fuga odio excepturi ducimus sequi at.
                                                                              Doloribus, non aspernatur.
                                                                        </p>
                                                                  </div>
                                                            </div>
                                                      </div> */}
                                          </div>
                                    </div>
                                    {/* right side image */}
                                    <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
                                          <div className="FAQ-img RotateMoveRight rounded">

                                                <Image src="/assets/images/faqs-onxius.png" className="img-fluid w-100 h-100" alt="ONXIUS FAQs" width={500} height={500} />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  {/* FAQ End */}
            </div>
      );
}