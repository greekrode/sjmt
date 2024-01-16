"use client";
import React from "react";
import bgImg from "../../../assets/img/breadcrumbs-bg.jpg";
import img1 from "../../../assets/img/projects/remodeling-1.jpg";
import Image from "next/image";
import { Tab, Tabs, Table, Col, Row, ListGroup } from "react-bootstrap";
import { gitiProductDataDetail } from "@/app/data";
import ErrorPage from "next/error";

type Overview = {
  rim_size: string;
  aspect_ratio: string;
  section_width: string;
  speed_rating: string;
};

type Fnb = {
  features: string;
  benefits: string;
};

type Specs = {
  tire_size: string;
  pr: string;
  load_index?: string;
  load_index_s?: string;
  load_index_d?: string;
  speed_rating: string;
  approved_rim: string;
  outer_diameter: string;
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
  type: string[];
  overview: Overview;
  fnb: Fnb[];
  specs: Specs[];
};

const GitProductDetailTab = ({ product }: { product: ProductDetailType }) => {
  return (
    <div className="row justify-content-between gy-4 mt-4">
      <Tabs defaultActiveKey="overviews" className="mt-10 tabs">
        <Tab eventKey="overviews" title="Overview">
          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-3">
              <Table
                borderless
                style={{
                  border: "1px solid #dee2e6",
                }}
              >
                <tbody>
                  <tr>
                    <td>Rim Size:</td>
                    <td>{product.overview.rim_size}</td>
                  </tr>
                  <tr>
                    <td>Aspect Ratio:</td>
                    <td>{product.overview.aspect_ratio}</td>
                  </tr>
                  <tr>
                    <td>Section Width:</td>
                    <td>{product.overview.section_width}</td>
                  </tr>
                  <tr>
                    <td>Speed Rating:</td>
                    <td>{product.overview.speed_rating}</td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div className="col-lg-8">
              <Table striped hover>
                <thead>
                  <tr>
                    <td>
                      <Row>
                        <Col xs={3} className="h5 font-weight-bold">
                          <i className="bi bi-trophy-fill"></i> Features
                        </Col>
                        <Col xs={9} className="h5 font-weight-bold">
                          <i className="bi bi-trophy-fill"></i> Benefits
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {product.fnb.map((item) => (
                    <tr>
                      <td>
                        <Row>
                          <Col xs={3}>{item.features}</Col>
                          <Col xs={9}>{item.benefits}</Col>
                        </Row>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Tab>
        <Tab eventKey="specs" title="Specifications">
          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-12">
              <Table bordered striped hover className="d-none d-sm-table">
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

          <Table bordered striped hover className="d-table d-sm-none">
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
        </Tab>
      </Tabs>
    </div>
  );
};

const GtProductDetailTab = ({ product }: { product: ProductDetailType }) => {
  return (
    <div className="row justify-content-between gy-4 mt-4">
      <Tabs defaultActiveKey="overviews" className="mt-10 tabs">
        <Tab eventKey="overviews" title="Overview">
          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8">
              <Table striped hover>
                <thead>
                  <tr>
                    <td>
                      <Row>
                        <Col xs={3} className="h5 font-weight-bold">
                          <i className="bi bi-trophy-fill"></i> Features
                        </Col>
                        <Col xs={9} className="h5 font-weight-bold">
                          <i className="bi bi-trophy-fill"></i> Benefits
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {product.fnb.map((item) => (
                    <tr>
                      <td>
                        <Row>
                          <Col xs={3}>{item.features}</Col>
                          <Col xs={9}>{item.benefits}</Col>
                        </Row>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Tab>
        <Tab eventKey="specs" title="Specifications">
          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-12">
              <Table bordered striped hover className="d-none d-sm-table">
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

          <Table bordered striped hover className="d-table d-sm-none">
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
        </Tab>
      </Tabs>
    </div>
  );
};

const GtRadialProductDetailTab = ({
  product,
}: {
  product: ProductDetailType;
}) => {
  return (
    <div className="row justify-content-between gy-4 mt-4">
      <Tabs defaultActiveKey="overviews" className="mt-10 tabs">
        <Tab eventKey="overviews" title="Overview">
          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-3">
              <Table
                borderless
                style={{
                  border: "1px solid #dee2e6",
                }}
              >
                <tbody>
                  <tr>
                    <td>Rim Size:</td>
                    <td>{product.overview.rim_size}</td>
                  </tr>
                  <tr>
                    <td>Aspect Ratio:</td>
                    <td>{product.overview.aspect_ratio}</td>
                  </tr>
                  <tr>
                    <td>Section Width:</td>
                    <td>{product.overview.section_width}</td>
                  </tr>
                  <tr>
                    <td>Speed Rating:</td>
                    <td>{product.overview.speed_rating}</td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div className="col-lg-8">
              <Table striped hover>
                <thead>
                  <tr>
                    <td>
                      <Row>
                        <Col xs={3} className="h5 font-weight-bold">
                          <i className="bi bi-trophy-fill"></i> Features
                        </Col>
                        <Col xs={9} className="h5 font-weight-bold">
                          <i className="bi bi-trophy-fill"></i> Benefits
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {product.fnb.map((item) => (
                    <tr>
                      <td>
                        <Row>
                          <Col xs={3}>{item.features}</Col>
                          <Col xs={9}>{item.benefits}</Col>
                        </Row>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Tab>
        <Tab eventKey="specs" title="Specifications">
          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-12">
              <Table bordered striped hover className="d-none d-sm-table">
                <thead
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  <tr className="text-center align-middle">
                    <td rowSpan={2}>Tire Size</td>
                    <td rowSpan={2}>Load Index</td>
                    <td rowSpan={2}>Speed Rating</td>
                    <td rowSpan={2}>Approved Rim</td>
                    <td rowSpan={2}>Outer Diameter (mm)</td>
                    <td rowSpan={2}>Tread Depth (mm)</td>
                    <td rowSpan={2}>Section Width (mm)</td>
                    <td rowSpan={2}>Max Load (kg)</td>
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
                      <td>{item.load_index}</td>
                      <td>{item.speed_rating}</td>
                      <td>{item.approved_rim}</td>
                      <td>{item.outer_diameter}</td>
                      <td>{item.tread_depth}</td>
                      <td>{item.section_width}</td>
                      <td>{item.max_load}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>

          <Table bordered striped hover className="d-table d-sm-none">
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
        </Tab>
      </Tabs>
    </div>
  );
};

const ProductDetail = ({ product }: { product: ProductDetailType }) => {
  return (
    <section id="project-details" className="project-details">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-between gy-4 mt-4">
          <div className="col-lg-8">
            <div className="portfolio-description">
              <h2>{product.name}</h2>
              <p className="display-6">{product.description}</p>
            </div>
            <div className="mt-10">
              <ListGroup horizontal>
                {product.type.map((type) => (
                  <ListGroup.Item
                    style={{
                      border: 0,
                    }}
                  >
                    {type}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="portfolio-info">
              <Image
                className="img-fluid"
                src={img1.src}
                width={img1.width}
                height={img1.height}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Page = ({
  params,
}: {
  params: { productId: string; productName: string };
}) => {
  const product = gitiProductDataDetail.find(
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
              <a href="/products/giti">GITI</a>
            </li>
            <li>{product.name}</li>
          </ol>
        </div>
      </div>
      <ProductDetail product={product} />
    </>
  );
};

export default Page;
