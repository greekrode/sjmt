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
          <h2>Contact</h2>
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>Contact</li>
          </ol>
        </div>
      </div>

      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="info-item  d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-map"></i>
                <h3>Our Address</h3>
                <p>
                  Jl. KH Zainul Arifin, Komp. Ketapang Indah Blok B2 No. 6-77,
                  Jakarta Barat, 11140
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-item d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-envelope"></i>
                <h3>Email Us</h3>
                <p>contact@sjmt.com</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="info-item  d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-telephone"></i>
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
          </div>

          <div className="row gy-4 mt-1">
            <div className="col-lg-6 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.782672780099!2d106.81436837608531!3d-6.159854560374621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7e90b7e8c05%3A0x60b6a0b986f1d729!2sPT%20Surya%20Jaya%20Muliatama!5e0!3m2!1sen!2sid!4v1705071403700!5m2!1sen!2sid"
                style={{
                  border: 0,
                  width: "100%",
                  height: "384px",
                }}
                allowFullScreen
              ></iframe>
            </div>

            <div className="col-lg-6">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row gy-4">
                  <div className="col-lg-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-lg-6 form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
