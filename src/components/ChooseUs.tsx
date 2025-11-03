"use client"; // 👈 add this if you plan to use interactivity (like mobile toggle)
import Image from "next/image";


export default function ChooseUs() {

      return (
            <div>
                  {/* <!-- Choose Us Start --> */}
                  <div className="container-fluid py-2 sm:py-3 lg:py-5" style={{ marginTop: "6rem" }}>
                        <div className="container">
                              <div className="row flex-row-reverse g-5">
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                          <div className="RotateMoveLeft">
                                                <Image src="/assets/images/choose-us.png" className="img-fluid w-100" alt="why choose onxius?" width={500} height={500} />
                                          </div>
                                    </div>
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                                          <h4 className="mb-1 text-primary">Why Choose Us</h4>
                                          <h1 className="display-5 mb-4">Experience Excellence With a Team That Truly Cares</h1>
                                          <ul className="max-w-2xl mx-auto text-gray-600 text-left list-disc list-inside space-y-2 pb-4">
                                                <li>
                                                      Experienced and dedicated team of professionals
                                                </li>
                                                <li>
                                                      Tailored solutions designed around your business goals
                                                </li>
                                                <li>
                                                      Transparent communication and reliable project support
                                                </li>
                                                <li>Commitment to quality, transparency, and innovation</li>
                                                <li>
                                                      Strong focus on long-term client relationships
                                                </li>
                                          </ul>
                                          {/* <Link href="/contact" className="butn-custom rounded-pill py-3 px-5">Let&apos;s Talk &#x2799;</Link> */}
                                    </div>
                              </div>
                        </div>
                  </div>
                  {/* <!-- Choose Us End --> */}
            </div>
      );
}