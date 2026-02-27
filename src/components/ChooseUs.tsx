"use client"; // 👈 add this if you plan to use interactivity (like mobile toggle)
import Image from "next/image";


export default function ChooseUs() {

      return (
            <div className="py-5">
                  {/* <!-- Choose Us Start --> */}
                  <div className="container-fluid">
                        <div className="container">
                              <div className="flex justify-center lg:justify-between items-center gap-3 lg:gap-5 flex-col-reverse lg:flex-row">
                                    {/* image */}
                                    <div className="lg:w-1/2 wow fadeInUp" data-wow-delay="0.1s">
                                          <div className="">
                                                <Image src="/assets/images/why-choose-us.png" className="img-fluid w-100" alt="why choose onxius?" width={500} height={500} />
                                          </div>
                                    </div>
                                    {/* content */}
                                    <div className="lg:w-1/2 wow fadeInUp flex flex-col lg:pl-4" data-wow-delay="0.3s">
                                          <h4 className="mb-1 text-primary">Why Choose Us</h4>
                                          <h1 className="text-2xl">Experience Excellence With a Team That Truly Cares</h1>
                                          <ul className="text-gray-600 text-left list-disc list-inside">
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
                                          {/* <Link href="/contact" className="butn-custom rounded-pill py-3 px-5">Get a Free Quote &#x2799;</Link> */}
                                    </div>
                              </div>
                        </div>
                  </div>
                  {/* <!-- Choose Us End --> */}
            </div>
      );
}