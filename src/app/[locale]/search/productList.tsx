import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ProductDetailType } from "../products/[productName]/[productId]/productDetail";

type ProductListProps = {
  filteredProducts: ProductDetailType[];
};

const ProductList: React.FC<ProductListProps> = ({ filteredProducts }) => {
  return (
    <section id="products" className="products">
      <div className="container" data-aos="fade-up">
        <div
          className="row gy-4 product-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {filteredProducts.map((product) => (
            <div
              className="col-lg-4 col-md-6 portfolio-item"
              data-aos="fade-up"
              key={`${product.id} + ${product.brand}`}
            >
              <Link href={`/products/${product.brand}/${product.id}`}>
                <div className="product-content h-100">
                  <h2 className="text-center mb-4 product-name">
                    {product.name}
                  </h2>
                  <div className="center-image">
                    <Image
                      src={product.img.default.src}
                      alt={product.name || ""}
                      width={product.img.default.width}
                      height={product.img.default.height}
                      className="img-fluid img-half-width"
                      priority={true}
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
