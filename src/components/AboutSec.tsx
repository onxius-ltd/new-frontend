"use client";
import Link from "next/link";
import Image from "next/image";


export default function AboutSec() {

      return (
            <div className="">
                  {/* <!-- About Start --> */}
                  <div className="container-fluid">
                        <div className="container">
                              <div className="row g-5">
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                          <div className="RotateMoveLeft">
                                                <Image src="/assets/images/about.png" className="img-fluid w-100" alt="about onxius" width={500} height={500} />
                                          </div>
                                    </div>
                                    <div className="col-lg-6 wow fadeInUp flex flex-col justify-center" data-wow-delay="0.3s">
                                          <h4 className="mb-1 text-primary">About Us</h4>
                                          <h1 className="display-5 mb-4">Discover Who We Are and What Inspires Our Passion</h1>
                                          <p className="pb-4">
                                                We are a passionate team of developers, designers, and creators dedicated to
                                                building exceptional digital experiences. Our mission is to craft modern,
                                                scalable, and user-friendly solutions that help businesses grow and succeed in
                                                today’s fast-paced world.
                                          </p>
                                          <div> <Link href="/contact" className="butn-custom rounded-pill py-3 px-5">Let&apos;s Talk &#x2799;</Link></div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  {/* <!-- About End --> */}
            </div>
      );
}