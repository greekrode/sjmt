import React from "react";
import bgImg from "../assets/img/breadcrumbs-bg.jpg";
import aboutImg from "../assets/img/about.jpg";
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
          <h2>About</h2>
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>About</li>
          </ol>
        </div>
      </div>

      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row position-relative">
            <div
              className="col-lg-7 about-img"
              style={{
                backgroundImage: `url(${aboutImg.src})`,
              }}
            ></div>

            <div className="col-lg-7">
              <h2>Suryajaya Muliatama (SJMT)</h2>
              <div className="our-story">
                <h4>Est 2018</h4>
                <h3>Our Story</h3>
                <p>
                  We are a company that's growing rapidly in car spare parts
                  sales trading. In the beginning, our company only has one
                  distribution warehouse for Jabodetabek area.
                </p>
                <p>
                  As the company grows, we have expanded our passenger and
                  commercial tires market.
                </p>
                <p>
                  In 2020, we again expanded our business line by developing our
                  infrastrucure, such as warehouses, employees and fleets.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i>{" "}
                    <span>
                      More than 50 employees, with 15 fleets and 7 warehouses.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{" "}
                    <span>
                      Commitment to provide the best quality to our customers.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{" "}
                    <span>
                      Working hard to expand our business and to give efficient
                      solution to our customers.
                    </span>
                  </li>
                </ul>
                <div className="watch-video d-flex align-items-center position-relative">
                  <i className="bi bi-play-circle"></i>
                  <Link
                    href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                    className="glightbox stretched-link"
                    target="_blank"
                  >
                    Watch Video
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-comp-cards" className="about-comp-cards section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div
              className="col-lg-6 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <h3>Service Commitment</h3>
              <p>
                For <strong>PT. Surya Jaya Muliatama</strong>,
                customers/partners are one of our top priorities. The company
                was established on the basis of a commitment to service
                excellence. We strive to understand the needs of customers and
                respond to every request proactively.
              </p>
              <br />
              <p>
                By prioritizing customer satisfaction, we ensure customers
                receive quality products and the best service.
              </p>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h3>Connected and Trustworthy</h3>
              <p>
                Connected and Trustworthy are two main goals of PT. Surya Jaya
                Muliatama to become a leading company in the automotive
                industry. Our commitment to quality and service is the
                foundation for building a tradition of excellence and providing
                added value for customers.
              </p>
              <br />
              <p>
                SJMT believes, to realize this, hard work and relentless effort
                are required. For that, over the years we have continued to
                develop a reputation as a company that prioritizes quality and
                the best service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;

export const metadata: Metadata = {
  title: "SJMT | About",
};
