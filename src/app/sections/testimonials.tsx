"use client";

import React from "react";
import { testimonialData } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const Testimonials = () => {
  return (
    <>
      <section id="testimonials" className="testimonials">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Testimonials</h2>
            <p>
              Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum
              nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{
              clickable: true,
            }}
            speed={800}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            slidesPerView="auto"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            {testimonialData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <Image
                      src={testimonial.img.default.src}
                      width={testimonial.img.default.width}
                      height={testimonial.img.default.height}
                      className="testimonial-img"
                      alt={testimonial.name}
                    />

                    <h3>{testimonial.name}</h3>
                    <h4>{testimonial.position}</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      {testimonial.quote}
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
