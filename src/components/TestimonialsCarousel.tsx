"use client"; // if using Next.js 13+ app directory

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Testimonial = {
      name: string;
      location: string;
      image: string;
      text: string;
      rating: number; // number of stars
};


const testimonials: Testimonial[] = [
      {
            name: "John Abraham",
            location: "New York, USA",
            image: "/assets/img/testimonial-img-1.jpg",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores nemo facilis tempora esse explicabo sed! Dignissimos quia ullam pariatur blanditiis sed voluptatum. Totam aut quidem laudantium tempora. Minima, saepe earum!",
            rating: 5,
      },
      {
            name: "Jane Doe",
            location: "Los Angeles, USA",
            image: "/assets/img/testimonial-img-2.jpg",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam aut quidem laudantium tempora.",
            rating: 5,
      },
      {
            name: "Michael Smith",
            location: "Chicago, USA",
            image: "/assets/img/testimonial-img-3.jpg",
            text: "Asperiores nemo facilis tempora esse explicabo sed! Dignissimos quia ullam pariatur blanditiis sed voluptatum.",
            rating: 5,
      },
];

export default function TestimonialsCarousel() {
      const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            customPaging: (i: number) => (
                  <Image
                        src={testimonials[i].image}
                        width={50}
                        height={50}
                        className="rounded-full border-2 border-primary"
                        alt={testimonials[i].name}
                  />
            ),
      };

      return (
            <div className="testimonial-carousel lg:w-2/3 m-auto">
                  <Slider {...settings}>
                        {testimonials.map((t, index) => (
                              <div key={index} className="testimonial-item p-5 text-center ">
                                    <div className=" ">
                                          <div className="flex items-center justify-center gap-4 mb-4">
                                                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary shadow-sm mb-3">
                                                      <Image src={t.image} width={100} height={100} alt={t.name} />
                                                </div>
                                                <div>
                                                      <h5 className="text-primary font-bold mb-1 text-left">{t.name}</h5>
                                                      <p className="text-gray-600 text-left">{t.location}</p>
                                                </div>
                                          </div>
                                          <p className="">{t.text}</p>
                                          <div className="flex justify-center gap-1">
                                                {Array.from({ length: t.rating }).map((_, i) => (
                                                      <i key={i} className="fas fa-star text-primary"></i>
                                                ))}
                                          </div>
                                    </div>
                              </div>
                        ))}
                  </Slider>
            </div>
      );
}