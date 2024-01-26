import React from "react";
import bgImg from "../assets/img/alt-services.jpg";
import { servicesData } from "../data";

const Services = () => {
  return (
    <>
      <section id="alt-services" className="alt-services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-around gy-4">
            <div
              className="col-lg-6 img-bg"
              style={{
                backgroundImage: `url(${bgImg.src})`,
              }}
              data-aos="zoom-in"
              data-aos-delay="100"
            ></div>

            <div className="col-lg-5 d-flex flex-column justify-content-center p-3">
              <h3>Why Us?</h3>
              <p></p>

              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className="icon-box d-flex position-relative"
                  data-aos="fade-up"
                  data-aos-delay={service.delay}
                >
                  <i className={service.icon + " flex-shrink-0"}></i>
                  <div>
                    <h4>
                      <a href="" className="stretched-link">
                        {service.title}
                      </a>
                    </h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
