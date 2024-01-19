import React from "react";
import { productData } from "../data";
import Link from "next/link";

const Products = () => {
  return (
    <>
      <section id="products" className="products">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Our Products</h2>
            <p>
              We distributes several brands of tires, such as GT Radial, Gajah
              Tunngal, and Giti. We also offer a wide range of quality car,
              truck, and off-road tires, such as TBR and OTR. For PCR, LTR, and
              TBR, it's done via company or retail stores across Jabodetabek.
            </p>
            <br />
            <p className="display-7">
              <strong>
                Click On The Product Icon To See More Details About The Product
              </strong>
            </p>
          </div>

          <div
            className="portfolio-isotope"
            data-portfolio-filter="*"
            data-portfolio-layout="masonry"
            data-portfolio-sort="original-order"
          >
            <ul
              className="product-filters"
              data-aos="fade-up"
              data-aos-delay="100"
            ></ul>

            <div
              className="row gy-4 product-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {productData.map((product, index) => (
                <div key={index} className={`col-lg-4 col-md-6 portfolio-item`}>
                  <Link href={`/products${product.link}`}>
                    <div className="product-content h-100">
                      <img
                        src={product.img.default.src}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
