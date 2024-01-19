"use client";
import React from "react";
import bgImg from "../../../assets/img/breadcrumbs-bg.jpg";
import Image from "next/image";
import { Tab, Tabs, Table, Col, Row, ListGroup } from "react-bootstrap";
import {
  gitiProductDataDetail,
  gtProductDataDetail,
  gtrProductDataDetail,
} from "@/app/data";
import ErrorPage from "next/error";

type Overview = {
  rim_size?: string;
  aspect_ratio?: string;
  section_width?: string;
  speed_rating?: string;
};

type Fnb = {
  features?: string;
  benefits?: string;
};

type Type = {
  name?: string;
  img?: any;
};

type Specs = {
  tire_size: string;
  pr: string;
  load_index?: string;
  load_index_s?: string;
  load_index_d?: string;
  speed_rating: string;
  approved_rim?: string;
  rim_width?: string;
  rim_diameter?: string;
  outer_diameter?: string;
  overall_diameter?: string;
  tread_depth: string;
  section_width?: string;
  max_load: string;
  max_pressure_kpa?: string;
  max_pressure_psi?: string;
  max_pressure?: string;
};

type ProductDetailType = {
  id: number;
  name: string;
  img: any;
  description: string;
  type?: Type[];
  overview?: Overview;
  fnb?: Fnb[];
  specs?: Specs[];
};

type ProductName = "giti" | "gt" | "gtradial";

const productDataMap: Record<ProductName, typeof gitiProductDataDetail> = {
  giti: gitiProductDataDetail,
  gt: gtProductDataDetail,
  gtradial: gtrProductDataDetail,
};

const GitiProductDetailTab = ({ product }: { product: ProductDetailType }) => {
  return (
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">
        <ul className="nav nav-tabs row g-2 d-flex">
          <li className={`nav-item col-6`}>
            <a
              className={`nav-link active show`}
              data-bs-toggle="tab"
              data-bs-target={`#tab-0`}
            >
              <h4>Overview</h4>
            </a>
          </li>
          <li className={`nav-item col-6`}>
            <a
              className={`nav-link`}
              data-bs-toggle="tab"
              data-bs-target={`#tab-1`}
            >
              <h4>Specifications</h4>
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div className={`tab-pane active show`} id={`tab-0`} key={0}>
            <section id="stats-counter" className="stats-counter">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-3 col-md-6">
                    <div className="stats-item d-flex align-items-center w-100 h-100">
                      <i className="bi bi-arrows-angle-expand color-blue flex-shrink-0"></i>
                      <div>
                        <span>{product.overview?.rim_size || "0"}</span>
                        <p>Rim Size</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="stats-item d-flex align-items-center w-100 h-100">
                      <i className="bi bi-aspect-ratio color-blue flex-shrink-0"></i>
                      <div>
                        <span>{product.overview?.aspect_ratio || "0"}</span>
                        <p>Aspect Ratio</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="stats-item d-flex align-items-center w-100 h-100">
                      <i className="bi bi-arrows color-blue flex-shrink-0"></i>
                      <div>
                        <span>{product.overview?.section_width || "0"}</span>
                        <p>Section Width</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="stats-item d-flex align-items-center w-100 h-100">
                      <i className="bi bi-speedometer2 color-blue flex-shrink-0"></i>
                      <div>
                        <span>{product.overview?.speed_rating || "-"}</span>
                        <p>Speed Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              id="about-comp-cards"
              className="about-comp-cards section-bg"
            >
              <div className="container" data-aos="fade-up">
                <div className="row gy-4">
                  <div
                    className="col-lg-5 col-md-5"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <h3>Features</h3>
                    <ul className="list-unstyled">
                      {product.fnb.map((item) => (
                        <li>
                          <i className="bi bi-check2"></i>{" "}
                          <span>{item.features}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className="col-lg-7 col-md-7"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <h3>Benefits</h3>
                    <ul className="list-unstyled">
                      {product.fnb.map((item) => (
                        <li>
                          <i className="bi bi-check2"></i>{" "}
                          <span>{item.benefits}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className={`tab-pane`} id={`tab-1`} key={1}>
            <div className="row justify-content-between gy-4 mt-4 specs-table">
              <div
                className="col-lg-12"
                style={{ maxHeight: "50vh", overflowY: "auto" }}
              >
                <Table bordered striped hover>
                  <thead
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    <tr className="text-center align-middle">
                      <td rowSpan={2}>Tire Size</td>
                      <td rowSpan={2}>PR</td>
                      <td rowSpan={2}>Load Index</td>
                      <td rowSpan={2}>Speed Rating</td>
                      <td rowSpan={2}>Approved Rim</td>
                      <td rowSpan={2}>Outer Diameter (mm)</td>
                      <td rowSpan={2}>Tread Depth (mm)</td>
                      <td rowSpan={2}>Max Load (kg)</td>
                      <td colSpan={2}>Max Pressure</td>
                    </tr>
                    <tr className="text-center">
                      <td>kPA</td>
                      <td>PSI</td>
                    </tr>
                  </thead>
                  <tbody>
                    {product.specs.map((item) => (
                      <tr>
                        <td>{item.tire_size}</td>
                        <td>{item.pr}</td>
                        <td>{item.load_index}</td>
                        <td>{item.speed_rating}</td>
                        <td>{item.approved_rim}</td>
                        <td>{item.outer_diameter}</td>
                        <td>{item.tread_depth}</td>
                        <td>{item.max_load}</td>
                        <td>{item.max_pressure_kpa}</td>
                        <td>{item.max_pressure_psi}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>

            <div className="row justify-content-between gy-4 mt-4 specs-table-mobile">
              <div
                className="col-lg-12"
                style={{ maxHeight: "50vh", overflowY: "auto" }}
              >
                <Table bordered striped hover>
                  <thead
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    <tr className="text-center align-middle">
                      <td rowSpan={2}>Tire Size</td>
                      <td rowSpan={2}>LI</td>
                      <td rowSpan={2}>SI</td>
                    </tr>
                  </thead>
                  <tbody>
                    {product.specs.map((item) => (
                      <tr>
                        <td>{item.tire_size}</td>
                        <td>{item.load_index}</td>
                        <td>{item.speed_rating}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GtProductDetailTab = ({ product }: { product: ProductDetailType }) => {
  return (
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">
        <ul className="nav nav-tabs row g-2 d-flex">
          <li className={`nav-item col-6`}>
            <a
              className={`nav-link active show`}
              data-bs-toggle="tab"
              data-bs-target={`#tab-0`}
            >
              <h4>Overview</h4>
            </a>
          </li>
          <li className={`nav-item col-6`}>
            <a
              className={`nav-link`}
              data-bs-toggle="tab"
              data-bs-target={`#tab-1`}
            >
              <h4>Specifications</h4>
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div className={`tab-pane active show`} id={`tab-0`} key={0}>
            <section
              id="about-comp-cards"
              className="about-comp-cards section-bg"
            >
              <div className="container" data-aos="fade-up">
                <div className="row gy-4">
                  <div
                    className="col-lg-12 col-md-12"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <h3>Features and Benefits</h3>
                    <ul className="list-unstyled">
                      {product.fnb.map((item) => (
                        <li>
                          <i className="bi bi-check2"></i>{" "}
                          <span>{item.features}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className={`tab-pane`} id={`tab-1`} key={1}>
            <div className="row justify-content-between gy-4 mt-4 specs-table">
              <div
                className="col-lg-12"
                style={{ maxHeight: "50vh", overflowY: "auto" }}
              >
                <Table bordered striped hover>
                  <thead
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    <tr className="text-center align-middle">
                      <td rowSpan={2}>Tire Size</td>
                      <td rowSpan={2}>PR</td>
                      <td colSpan={2}>Load Index</td>
                      <td rowSpan={2}>Speed Rating</td>
                      <td rowSpan={2}>Approved Rim</td>
                      <td rowSpan={2}>Outer Diameter (mm)</td>
                      <td rowSpan={2}>Tread Depth (mm)</td>
                      <td rowSpan={2}>Section Width (mm)</td>
                      <td rowSpan={2}>Max Load (kg)</td>
                      <td rowSpan={2}>Max Pressure (kpa)</td>
                    </tr>
                    <tr className="text-center">
                      <td>S</td>
                      <td>D</td>
                    </tr>
                  </thead>
                  <tbody>
                    {product.specs.map((item) => (
                      <tr>
                        <td>{item.tire_size}</td>
                        <td>{item.pr}</td>
                        <td>{item.load_index_s}</td>
                        <td>{item.load_index_d}</td>
                        <td>{item.speed_rating}</td>
                        <td>{item.approved_rim}</td>
                        <td>{item.outer_diameter}</td>
                        <td>{item.tread_depth}</td>
                        <td>{item.section_width}</td>
                        <td>{item.max_load}</td>
                        <td>{item.max_pressure}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>

            <div className="row justify-content-between gy-4 mt-4 specs-table-mobile">
              <div
                className="col-lg-12"
                style={{ maxHeight: "50vh", overflowY: "auto" }}
              >
                <Table bordered striped hover>
                  <thead
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    <tr className="text-center align-middle">
                      <td rowSpan={2}>Tire Size</td>
                      <td rowSpan={2}>LI</td>
                      <td rowSpan={2}>SI</td>
                    </tr>
                  </thead>
                  <tbody>
                    {product.specs.map((item) => (
                      <tr>
                        <td>{item.tire_size}</td>
                        <td>
                          {item.load_index_s} / {item.load_index_d}
                        </td>
                        <td>{item.speed_rating}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GtRadialProductDetailTab = ({
  product,
}: {
  product: ProductDetailType;
}) => {
  return (
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">
        <ul className="nav nav-tabs row g-2 d-flex">
          <li className={`nav-item col-6`}>
            <a
              className={`nav-link active show`}
              data-bs-toggle="tab"
              data-bs-target={`#tab-0`}
            >
              <h4>Overview</h4>
            </a>
          </li>
          <li className={`nav-item col-6`}>
            <a
              className={`nav-link`}
              data-bs-toggle="tab"
              data-bs-target={`#tab-1`}
            >
              <h4>Specifications</h4>
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div className={`tab-pane active show`} id={`tab-0`} key={0}>
            <section id="stats-counter" className="stats-counter">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-3 col-md-6">
                    <div className="stats-item d-flex align-items-center w-100 h-100">
                      <i className="bi bi-arrows-angle-expand color-blue flex-shrink-0"></i>
                      <div>
                        <span>{product.overview?.rim_size}</span>
                        <p>Rim Size</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="stats-item d-flex align-items-center w-100 h-100">
                      <i className="bi bi-aspect-ratio color-blue flex-shrink-0"></i>
                      <div>
                        <span>{product.overview?.aspect_ratio}</span>
                        <p>Aspect Ratio</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="stats-item d-flex align-items-center w-100 h-100">
                      <i className="bi bi-arrows color-blue flex-shrink-0"></i>
                      <div>
                        <span>{product.overview?.section_width}</span>
                        <p>Section Width</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="stats-item d-flex align-items-center w-100 h-100">
                      <i className="bi bi-speedometer2 color-blue flex-shrink-0"></i>
                      <div>
                        <span>{product.overview?.speed_rating}</span>
                        <p>Speed Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              id="about-comp-cards"
              className="about-comp-cards section-bg"
            >
              <div className="container" data-aos="fade-up">
                <div className="row gy-4">
                  <div
                    className="col-lg-5 col-md-5"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <h3>Features</h3>
                    <ul className="list-unstyled">
                      {product.fnb.map((item) => (
                        <li>
                          <i className="bi bi-check2"></i>{" "}
                          <span>{item.features}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className="col-lg-7 col-md-7"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                  >
                    <h3>Benefits</h3>
                    <ul className="list-unstyled">
                      {product.fnb.map((item) => (
                        <li>
                          <i className="bi bi-check2"></i>{" "}
                          <span>{item.benefits}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className={`tab-pane`} id={`tab-1`} key={1}>
            <div className="row justify-content-between gy-4 mt-4 specs-table">
              <div
                className="col-lg-12"
                style={{ maxHeight: "50vh", overflowY: "auto" }}
              >
                <Table bordered striped hover>
                  <thead
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    <tr className="text-center align-middle">
                      <td rowSpan={2}>Tire Size</td>
                      <td rowSpan={2}>Load Index</td>
                      <td rowSpan={2}>Speed Rating</td>
                      <td rowSpan={2}>Rim Width (inch)</td>
                      <td rowSpan={2}>Rim Diameter (inch)</td>
                      <td rowSpan={2}>Overall Diameter (mm)</td>
                      <td rowSpan={2}>Tread Depth (mm)</td>
                      <td rowSpan={2}>Section Width (mm)</td>
                      <td rowSpan={2}>Max Load (kg)</td>
                    </tr>
                  </thead>
                  <tbody>
                    {product.specs.map((item) => (
                      <tr>
                        <td>{item.tire_size}</td>
                        <td>{item.load_index}</td>
                        <td>{item.speed_rating}</td>
                        <td>{item.rim_width}</td>
                        <td>{item.rim_diameter}</td>
                        <td>{item.overall_diameter}</td>
                        <td>{item.tread_depth}</td>
                        <td>{item.section_width}</td>
                        <td>{item.max_load}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>

            <div className="row justify-content-between gy-4 mt-4 specs-table-mobile">
              <div
                className="col-lg-12"
                style={{ maxHeight: "30vh", overflowY: "auto" }}
              >
                <Table bordered striped hover>
                  <thead
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    <tr className="text-center align-middle">
                      <td rowSpan={2}>Tire Size</td>
                      <td rowSpan={2}>LI</td>
                      <td rowSpan={2}>SI</td>
                    </tr>
                  </thead>
                  <tbody>
                    {product.specs.map((item) => (
                      <tr>
                        <td>{item.tire_size}</td>
                        <td>{item.load_index}</td>
                        <td>{item.speed_rating}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const tabComponents = {
  giti: GitiProductDetailTab,
  gt: GtProductDetailTab,
  gtradial: GtRadialProductDetailTab,
};

const ProductDetail = ({
  productName,
  product,
}: {
  productName: ProductName;
  product: ProductDetailType;
}) => {
  const TabDetailComponent =
    tabComponents[productName as keyof typeof tabComponents];

  if (!TabDetailComponent) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <section id="product-details" className="product-details">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-between gy-4 mt-4">
          <div className="col-lg-8">
            <div className="product-description">
              <h2>{product.name}</h2>
              <p className="display-6">{product.description}</p>
            </div>
            <div
              className="d-flex flex-wrap align-items-center mt-10"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {/* <ListGroup variant="flush"> */}
              {product.type.map((type, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center position-relative product-type"
                  style={{ flex: "1 0 100%", maxWidth: "30%" }} 
                >
                  <Image
                    src={type.img.default.src}
                    alt={type.name}
                    width={type.img.default.width}
                    height={type.img.default.height}
                    className="icon-image"
                  />
                  <p>{type.name}</p>
                </div>
              ))}
              {/* </ListGroup> */}
            </div>
          </div>

          <div className="col-lg-3">
            <div
              className="product-inof center-image"
              style={{
                height: "35vh",
              }}
            >
              <Image
                className="img-fluid img-85-width"
                src={product.img.default.src}
                width={product.img.default.width}
                height={product.img.default.height}
                alt=""
              />
            </div>
          </div>
        </div>
        {TabDetailComponent && <TabDetailComponent product={product} />}
      </div>
    </section>
  );
};

const productNameMap: Record<ProductName, string> = {
  gt: "GT",
  giti: "GITI",
  gtradial: "GT Radial",
};

const Page = ({
  params,
}: {
  params: { productId: string; productName: string };
}) => {
  const productName = params.productName as ProductName;
  const productData = productDataMap[productName] || [];
  const product = productData.find(
    (item) => item.id === Number(params.productId)
  );

  if (!product) {
    return <ErrorPage statusCode={404} />;
  }

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
          <h2>Product Details</h2>
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="./">{productNameMap[productName]}</a>
            </li>
            <li>{product.name}</li>
          </ol>
        </div>
      </div>
      <ProductDetail productName={productName} product={product} />
    </>
  );
};

export default Page;
