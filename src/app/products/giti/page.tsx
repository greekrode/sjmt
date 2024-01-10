"use client";
import React, { useState, memo } from "react";
import bgImg from "../../assets/img/breadcrumbs-bg.jpg";
import { gitiFilterData, gitiProductData } from "../../data";
import Link from "next/link";
import Image from "next/image";

const ProductsList = memo(({ filter }: { filter: string }) => {
  const filteredProducts =
    filter === "*"
      ? gitiProductData
      : gitiProductData.filter((product) =>
          Array.isArray(product.type)
            ? product.type.includes(filter)
            : product.type === filter
        );

  return (
    <div
      className="row gy-4 product-container"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {filteredProducts.map((product) => (
        <div
          className="col-lg-4 col-md-6 portfolio-item"
          data-aos="fade-left"
          key={product.id}
        >
          <Link href="/products/giti/detail">
            <div className="product-content h-100">
              <h2
                className="text-center mb-4"
                style={{
                  color: "#000",
                  fontSize: "1.5rem",
                }}
              >
                {product.name}
              </h2>
              <Image
                src={product.img.default.src}
                alt={product.name}
                width={product.img.default.width}
                height={product.img.default.height}
                className="img-fluid"
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
});

const Page = () => {
  const [filter, setFilter] = useState("*");

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
          <h2>Products</h2>
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>Products</li>
            <li>GITI</li>
          </ol>
        </div>
      </div>

      <section id="projects" className="projects">
        <div className="container" data-aos="fade-up">
          <div>
            <ul
              className="product-flters"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <li
                onClick={() => setFilter("*")}
                className={filter === "*" ? "filter-active" : ""}
              >
                All
              </li>
              {gitiFilterData.map((filterItem) => (
                <li
                  key={filterItem.key}
                  onClick={() => setFilter(filterItem.key)}
                  className={filter === filterItem.key ? "filter-active" : ""}
                >
                  {filterItem.name}
                </li>
              ))}
            </ul>

            <ProductsList filter={filter} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
