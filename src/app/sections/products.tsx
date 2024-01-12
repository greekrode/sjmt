import React from "react";
import { productData } from "../data";
import Link from "next/link";

const Products = () => {
  return (
    <>
      <section id="projects" className="projects">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Our Products</h2>
            <p>
              PT. Gajah Tunggal Tbk manufactures and distributes high-quality
              tires for passenger cars, SUVs/light trucks, off-road vehicles,
              and industrial applications. PT. Gajah Tunggal Tbk also produces
              and distributes other related rubber products such as synthetic
              rubber, tire cord, inner tubes, flaps, and O-rings.
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
              className="product-flters"
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
