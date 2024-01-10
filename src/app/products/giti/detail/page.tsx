"use client";
import React, { useState, memo } from "react";
import bgImg from "../../../assets/img/breadcrumbs-bg.jpg";
import img1 from "../../../assets/img/projects/remodeling-1.jpg";
import Image from "next/image";
import { Tab, Tabs, Table, Col, Row, ListGroup } from "react-bootstrap";

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
          <h2>Product Details</h2>
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>Product Details</li>
          </ol>
        </div>
      </div>

      <section id="project-details" className="project-details">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-8">
              <div className="portfolio-description">
                <h2>Product Name</h2>
                <p className="display-6">DURABLE, RELIABLE</p>
              </div>
              <div className="mt-10">
                <ListGroup horizontal>
                  <ListGroup.Item
                    style={{
                      border: 0,
                    }}
                  >
                    Item 1
                  </ListGroup.Item>
                  <ListGroup.Item
                    style={{
                      border: 0,
                    }}
                  >
                    Item 1
                  </ListGroup.Item>
                  <ListGroup.Item
                    style={{
                      border: 0,
                    }}
                  >
                    Item 1
                  </ListGroup.Item>
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
                          <td>16-24</td>
                        </tr>
                        <tr>
                          <td>Aspect Ratio:</td>
                          <td>0-95</td>
                        </tr>
                        <tr>
                          <td>Section Width:</td>
                          <td>11-325</td>
                        </tr>
                        <tr>
                          <td>Speed Rating:</td>
                          <td>W</td>
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
                        <tr>
                          <td>
                            <Row>
                              <Col xs={3}>Rim Size:</Col>
                              <Col xs={9}>16-24</Col>
                            </Row>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Row>
                              <Col xs={3}>Aspect Ratio:</Col>
                              <Col xs={9}>0-95</Col>
                            </Row>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Row>
                              <Col xs={3}>Section Width:</Col>
                              <Col xs={9}>11-325</Col>
                            </Row>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Row>
                              <Col xs={3}>Speed Rating:</Col>
                              <Col xs={9}>W</Col>
                            </Row>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="specs" title="Specifications">
                <Table bordered striped hover>
                  <thead>
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
                    <tr>
                      <td>10.00R20</td>
                      <td>18</td>
                      <td>149/146</td>
                      <td>F</td>
                      <td>7.5</td>
                      <td>1054</td>
                      <td>22.6</td>
                      <td>3250 / 3000</td>
                      <td>930 / 930</td>
                      <td>135 / 135</td>
                    </tr>
                  </tbody>
                </Table>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
