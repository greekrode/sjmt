import React from "react";
import { constructionData } from "../data";

const Constructions = () => {
  return (
    <>
      <section id="constructions" className="constructions">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Sales Distributions</h2>
            <p>
              Expanding Reach with Quality Tires: Comprehensive Distribution
              Across The Entire Region
            </p>
          </div>

          <div className="row gy-4">
            {constructionData.map((item, index) => (
              <div
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-delay={item.delay}
                key={index}
              >
                <div className="card-item">
                  <div className="row">
                    <div className="col-xl-5">
                      <div
                        className="card-bg"
                        style={{
                          backgroundImage: `url(${item.img.default.src})`,
                        }}
                      ></div>
                    </div>
                    <div className="col-xl-7 d-flex align-items-center">
                      <div className="card-body">
                        <h4 className="card-title">{item.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Constructions;
