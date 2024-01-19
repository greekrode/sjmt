"use client";
import React, { useState, memo } from "react";
import bgImg from "../../assets/img/breadcrumbs-bg.jpg";
import {
  gitiFilterData,
  gitiProductData,
  gtFilterData,
  gtProductData,
  gtrFilterData,
  gtrProductData,
} from "../../data";
import Link from "next/link";
import Image from "next/image";

type ProductName = "giti" | "gt" | "gtradial";

const productNameMap: Record<ProductName, string> = {
  giti: "GITI",
  gt: "GT",
  gtradial: "GT RADIAL",
};

const productDataMap: Record<ProductName, typeof gitiProductData> = {
  giti: gitiProductData,
  gt: gtProductData,
  gtradial: gtrProductData,
};

const filterDataMap: Record<ProductName, typeof gitiFilterData> = {
  giti: gitiFilterData,
  gt: gtFilterData,
  gtradial: gtrFilterData,
};

const ProductsList = memo(
  ({ filter, productName }: { filter: string; productName: string }) => {
    const productData = productDataMap[productName as ProductName] || [];

    const filteredProducts =
      filter === "*"
        ? productData
        : productData.filter((product) =>
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
            <Link href={`/products/${productName}/${product.id}`}>
              <div className="product-content h-100">
                <h2 className="text-center mb-4 product-name">
                  {product.name}
                </h2>
                <div className="center-image">
                  <Image
                    src={product.img.default.src}
                    alt={product.name}
                    width={product.img.default.width}
                    height={product.img.default.height}
                    className="img-fluid img-half-width"
                  />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
);

const Product = ({ params }: { params: { productName: string } }) => {
  const filterData =
    filterDataMap[params.productName.toLowerCase() as ProductName] || [];
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
            <li>{productNameMap[params.productName as ProductName]}</li>
          </ol>
        </div>
      </div>

      <section id="products" className="products">
        <div className="container" data-aos="fade-up">
          <div>
            <ul
              className="product-filters"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <li
                onClick={() => setFilter("*")}
                className={filter === "*" ? "filter-active" : ""}
              >
                All
              </li>
              {filterData.map((filterItem) => (
                <li
                  key={filterItem.key}
                  onClick={() => setFilter(filterItem.key)}
                  className={filter === filterItem.key ? "filter-active" : ""}
                >
                  {filterItem.name}
                </li>
              ))}
            </ul>

            <ProductsList filter={filter} productName={params.productName} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
