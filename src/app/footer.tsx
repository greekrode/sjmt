import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-content position-relative">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-info">
                  <h3>PT Suryajaya Muliatama</h3>
                  <p>
                    Jl. KH Zainul Arifin
                    <br />
                    Komp. Ketapang Indah Blok B2 No. 6-77
                    <br />
                    Jakarta Barat, 11140
                    <br />
                    <br />
                    <strong>Phone:</strong> +6221 2263 1485
                    <br />
                    <strong>Phone:</strong> +6221 2263 6685
                    <br />
                    <strong>Whatsapp:</strong> +62818 0280 3970
                    <br />
                    <strong>Email:</strong> contact@sjmt.com
                    <br />
                  </p>
                  <div className="social-links d-flex mt-3">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About us</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-3 footer-links">
                <h4>Products</h4>
                <ul>
                  <li>
                    <a href="/products/giti">GITI</a>
                  </li>
                  <li>
                    <a href="/products/gt">GT</a>
                  </li>
                  <li>
                    <a href="/products/gtradial">GT Radial</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-legal text-center position-relative">
          <div className="container">
            <div className="copyright">
              Copyright &copy; 2024{" "}
              <strong>
                <span>Suryajaya Muliatama (SJMT)</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
