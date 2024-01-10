import React from "react";
import bgImg from "../assets/img/breadcrumbs-bg.jpg";
import aboutImg from "../assets/img/about.jpg";

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
                  <a
                    href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                    className="glightbox stretched-link"
                  >
                    Watch Video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
