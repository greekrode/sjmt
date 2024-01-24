import React from "react";
import bgImg from "../assets/img/breadcrumbs-bg.jpg";
import { careerData } from "../data";
import Link from "next/link";
import { Metadata } from "next";

const Page = () => {
  return (
    <>
      <div
        className="breadcrumbs d-flex align-items-center"
        style={{
          backgroundImage: `url(${bgImg.src})`,
        }}
      >
        <div
          className="container position-relative d-flex flex-column align-items-center"
          data-aos="fade"
        >
          <h2>Careers</h2>
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>Careers</li>
          </ol>
        </div>
      </div>

      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            {careerData.map((career, index) => (
              <div
                className="col-lg-6 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
                key={index}
              >
                <div className="service-item  position-relative">
                  <div className="icon">
                    <i className={`fa-solid ${career.icon}`}></i>
                  </div>
                  <h3>{career.name}</h3>
                  <p>
                    <i className="bi bi-buildings-fill mr-4"></i>
                    {career.team}
                  </p>
                  <p>
                    <i className="bi bi-clock-fill mr-4"></i>
                    {career.work_time}
                  </p>
                  <p>
                    <i className="bi bi-mortarboard-fill mr-4"></i>
                    {career.edu}
                  </p>
                  <p>
                    <i className="bi bi-briefcase-fill mr-4"></i>
                    {`${career.yoe} year of experience`}
                  </p>
                  <Link
                    href={`/career/${career.id}`}
                    className="readmore stretched-link"
                  >
                    Learn more <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;

export const metadata: Metadata = {
  title: "SJMT | Careers",
};
