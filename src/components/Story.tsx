"use client"; // 👈 add this if you plan to use interactivity (like mobile toggle)
import Link from "next/link";
import Image from "next/image";


export default function OurStory() {

      return (
            <div>
                  {/* <!-- Our Story Start --> */}
                  <div className="container-fluid py-2 sm:py-3 lg:py-5" style={{ marginTop: "6rem" }}>
                        <div className="container">
                              <div className="row flex-row-reverse g-5">
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                          <div className="RotateMoveLeft">
                                                <Image src="/assets/images/story.png" className="img-fluid w-100" alt="onxius story" width={500} height={500} />
                                          </div>
                                    </div>
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                                          <h4 className="mb-1 text-primary">Our Story</h4>
                                          <h1 className="display-5 mb-4">From a Small Vision to a Trusted Digital Partner</h1>
                                          <p className="pb-4">
                                                Our journey began with a simple idea — to make technology meaningful and accessible for everyone. What started as a small group of creative thinkers has grown into a full-service digital agency trusted by clients across diverse industries. Through dedication and innovation, we’ve built long-term partnerships grounded in trust and quality.
                                          </p>
                                          <Link href="/get-free-quotation" className="butn-custom rounded-pill py-3 px-5">Get a Free Quote &#x2799;</Link>
                                    </div>
                              </div>
                        </div>
                  </div>
                  {/* <!-- Our Story End --> */}
            </div>
      );
}