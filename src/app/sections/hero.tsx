import React from "react";
import HeroCarousel1 from "../assets/img/hero-carousel/hero-carousel-1.jpg";

const Hero = () => {
  return (
    <>
      <section id="hero" className="hero">
        <div className="info d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <h2 data-aos="fade-down">Tire Excellence Unleashed</h2>
                <p data-aos="fade-up">
                  Championing tire distribution with top brands GT. RADIAL,
                  GAJAH TUNGGAL, and GITI. We offer a wide range of quality car,
                  truck, and off-road tires, such as TBR and OTR. For PCR, LTR,
                  and TBR, it&apos;s done via company or retail stores across
                  Jabodetabek.
                </p>
                <a
                  data-aos="fade-up"
                  data-aos-delay="200"
                  href="#warehouses"
                  className="btn-get-started"
                >
                  Want to Know More?
                </a>
                <a
                  data-aos="fade-up"
                  data-aos-delay="200"
                  href="#products"
                  className="btn-get-started"
                >
                  Our Products
                </a>
                <a
                  data-aos="fade-up"
                  data-aos-delay="200"
                  href="/contact"
                  className="btn-get-started"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="hero-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div
            className="carousel-item active"
            style={{ backgroundImage: `url(${HeroCarousel1.src})` }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
