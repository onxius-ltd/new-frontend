"use client"; // 👈 add this if you plan to use interactivity (like mobile toggle)
// import { useEffect } from "react";
// import TestimonialsCarousel from "./TestimonialsCarousel";


export default function Testimonial() {

      // useEffect(() => {
      //       if (typeof window !== "undefined" && (window as any).jQuery) {
      //             const $ = (window as any).jQuery;
      //             if ($.fn.owlCarousel) {
      //                   $(".testimonial-carousel").owlCarousel({
      //                         items: 1,
      //                         loop: true,
      //                         autoplay: true,
      //                         autoplayTimeout: 4000,
      //                         autoplayHoverPause: true,
      //                         dots: true,
      //                         nav: false,
      //                         smartSpeed: 1000,
      //                   });
      //             }
      //       }
      // }, []);

      return (
            <div>
                  {/* Testimonial Start */}
                  <div className="container-fluid testimonial py-5 bg-white">
                        <div className="container py-5">
                              {/* testimonials content */}
                              <div
                                    className="text-center mx-auto mb-5 wow fadeInUp"
                                    data-wow-delay="0.1s"
                                    style={{ maxWidth: 900 }}
                              >
                                    <h4 className="text-primary">Testimonial</h4>
                                    <h1 className="display-5 mb-4">What Our Client Say About Us</h1>
                                    <p className="mb-0">
                                          Dolor sit amet consectetur, adipisicing elit. Ipsam, beatae maxime.
                                          Vel animi eveniet doloremque reiciendis soluta iste provident non
                                          rerum illum perferendis earum est architecto dolores vitae quia vero
                                          quod incidunt culpa corporis, porro doloribus. Voluptates nemo
                                          doloremque cum.
                                    </p>
                              </div>
                              {/* testimonial carousel */}
                              {/* <TestimonialsCarousel /> */}
                        </div>
                  </div>
                  {/* Testimonial End */}
            </div>
      );
}