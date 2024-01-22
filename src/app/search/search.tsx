"use client";
import bgImg from "../assets/img/breadcrumbs-bg.jpg";
import React, { useState, useEffect } from "react";
import {
  gitiProductDataDetail,
  gtProductDataDetail,
  gtrProductDataDetail,
} from "../data";
import { ProductDetailType } from "../products/[productName]/[productId]/productDetail";
import ProductList from "./productList";
import busTruckSearchImg1 from "../assets/img/bus_truck_search_1.png";
import busTruckSearchImg2 from "../assets/img/bus_truck_search_2.png";
import carSearchImg1 from "../assets/img/car_search_1.png";
import Image from "next/image";

const Search = () => {
  const distinctSectionWidths = Array.from(
    new Set(
      gtrProductDataDetail.flatMap((product) =>
        product.specs.map((spec) => spec.section_width)
      )
    )
  ).sort((a, b) => parseInt(a) - parseInt(b));

  const distinctRimDiameter = Array.from(
    new Set(
      gtrProductDataDetail.flatMap((product) =>
        product.specs.map((spec) => spec.rim_diameter)
      )
    )
  ).sort((a, b) => parseInt(a) - parseInt(b));

  const distinctTireSizes = Array.from(
    new Set([
      ...gtProductDataDetail.flatMap((product) =>
        product.specs.map((spec) => spec.tire_size)
      ),
      ...gitiProductDataDetail.flatMap((product) =>
        product.specs.map((spec) => spec.tire_size)
      ),
    ])
  ).sort();

  const distinctType = Array.from(
    new Set([
      ...gtProductDataDetail.flatMap((product) =>
        product.type.map((type) => type.name)
      ),
      ...gitiProductDataDetail.flatMap((product) =>
        product.type.map((type) => type.name)
      ),
    ])
  ).sort();

  const [tireSize, setTireSize] = useState("");
  const [wheelPos, setWheelPos] = useState("");
  const [sectionWidth, setSectionWidth] = useState("");
  const [rimDiameter, setRimDiameter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<ProductDetailType[]>(
    []
  );

  const handleSelectChange = (name: string, value: string) => {
    switch (name) {
      case "tire_size":
        setTireSize(value);
        sessionStorage.setItem("tireSize", value);
        break;
      case "wheel_pos":
        setWheelPos(value);
        sessionStorage.setItem("wheelPos", value);
        break;
      case "section_width":
        setSectionWidth(value);
        sessionStorage.setItem("sectionWidth", value);
        break;
      case "rim_diameter":
        setRimDiameter(value);
        sessionStorage.setItem("rimDiameter", value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // Load search parameters from sessionStorage when the component mounts
    const savedTireSize = sessionStorage.getItem("tireSize");
    const savedWheelPos = sessionStorage.getItem("wheelPos");
    const savedSectionWidth = sessionStorage.getItem("sectionWidth");
    const savedRimDiameter = sessionStorage.getItem("rimDiameter");

    if (savedTireSize) {
      setTireSize(savedTireSize);
    }
    if (savedWheelPos) {
      setWheelPos(savedWheelPos);
    }
    if (savedSectionWidth) {
      setSectionWidth(savedSectionWidth);
    }
    if (savedRimDiameter) {
      setRimDiameter(savedRimDiameter);
    }
  }, []);

  useEffect(() => {
    if (tireSize || wheelPos) {
      const searchProducts = [
        ...gtProductDataDetail,
        ...gitiProductDataDetail,
      ].filter((product) => {
        const matchesTireSize =
          tireSize === "all"
            ? true
            : product.specs.some((spec) => spec.tire_size === tireSize);
        const matchesWheelPos =
          wheelPos === "all"
            ? true
            : product.type.some((type) => type.name === wheelPos);
        return matchesTireSize && matchesWheelPos;
      });
      setFilteredProducts(searchProducts);
    }
  }, [tireSize, wheelPos]);

  useEffect(() => {
    if (sectionWidth || rimDiameter) {
      const searchProducts = gtrProductDataDetail.filter((product) => {
        const matchesSectionWidth =
          sectionWidth === "all"
            ? true
            : product.specs.some((spec) => spec.section_width === sectionWidth);
        const matchesRimDiameter =
          rimDiameter === "all"
            ? true
            : product.specs.some((spec) => spec.rim_diameter === rimDiameter);
        return matchesSectionWidth && matchesRimDiameter;
      });
      setFilteredProducts(searchProducts);
    }
  }, [sectionWidth, rimDiameter]);

  const handleBusTruckSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const tireSizeElement = form.elements.namedItem(
      "tire_size"
    ) as HTMLInputElement;
    const wheelPosElement = form.elements.namedItem(
      "wheel_pos"
    ) as HTMLInputElement;

    let tireSizeValue = tireSizeElement.value;
    let wheelPosValue = wheelPosElement.value;

    if (tireSizeValue) {
      setTireSize(tireSizeValue);
    }

    if (wheelPosValue) {
      setWheelPos(wheelPosValue);
    }

    sessionStorage.setItem("tireSize", tireSizeValue);
    sessionStorage.setItem("wheelPos", wheelPosValue);
  };

  const handleCarSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const sectionWidthElement = form.elements.namedItem(
      "section_width"
    ) as HTMLInputElement;
    const rimDiameterElement = form.elements.namedItem(
      "rim_diameter"
    ) as HTMLInputElement;

    let sectionWidthValue = sectionWidthElement.value;
    let rimDiameterValue = rimDiameterElement.value;

    if (sectionWidthValue) {
      setSectionWidth(sectionWidthValue);
    }

    if (rimDiameterValue) {
      setRimDiameter(rimDiameterValue);
    }

    sessionStorage.setItem("rimDiameter", rimDiameterValue);
    sessionStorage.setItem("sectionWidth", sectionWidthValue);
  };

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
          <h2>Search Products</h2>
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>Search</li>
          </ol>
        </div>
      </div>
      <section id="features" className="features section-bg">
        <div className="container" data-aos="fade-up">
          <ul className="nav nav-tabs row  g-2 d-flex">
            <li className={`nav-item col-6`}>
              <a
                className={`nav-link active show`}
                data-bs-toggle="tab"
                data-bs-target={`#tab-0`}
              >
                <h4 className="text-center">Bus / Truck</h4>
              </a>
            </li>
            <li className={`nav-item col-6`}>
              <a
                className={`nav-link`}
                data-bs-toggle="tab"
                data-bs-target={`#tab-1`}
              >
                <h4 className="text-center">Car</h4>
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div className={`tab-pane active show`} id={`tab-0`} key={0}>
              <section id="contact" className="contact p-3">
                <div className="row gy-4">
                  <div
                    className="col-lg-12"
                    style={{
                      fontStyle: "italic",
                    }}
                  >
                    <p className="text-center">
                      Select the tire size and wheel position value
                    </p>
                    <p className="text-center">
                      The filter will run automatically
                    </p>
                  </div>
                  <div className="col-lg-12">
                    <form
                      role="form"
                      className="php-email-form"
                      onSubmit={handleBusTruckSearch}
                    >
                      <div className="row gy-4">
                        <div className="col-lg-6 form-group">
                          <label htmlFor="tire_size">Tire Size</label>
                          <select
                            name="tire_size"
                            id="tire_size"
                            defaultValue={""}
                            value={tireSize}
                            onChange={(e) =>
                              handleSelectChange(e.target.name, e.target.value)
                            }
                            className="form-control form-control-select"
                            required
                          >
                            <option value="" disabled>
                              Select Tire Size
                            </option>
                            <option value="all">All</option>
                            {distinctTireSizes.map((size) => (
                              <option key={size} value={size}>
                                {size}
                              </option>
                            ))}
                          </select>
                          <label htmlFor="wheel_pos" className="mt-3">
                            Wheel Position
                          </label>
                          <select
                            name="wheel_pos"
                            id="wheel_pos"
                            defaultValue={""}
                            value={wheelPos}
                            onChange={(e) =>
                              handleSelectChange(e.target.name, e.target.value)
                            }
                            className="form-control form-control-select"
                            required
                          >
                            <option value="" disabled>
                              Select Wheel Position
                            </option>
                            <option value="all">All</option>
                            {distinctType.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-lg-3 form-group search-img">
                          <Image
                            src={busTruckSearchImg1.src}
                            alt=""
                            width={busTruckSearchImg1.width}
                            height={busTruckSearchImg1.height}
                            className="img-fluid "
                          />
                        </div>
                        <div className="col-lg-3 form-group search-img">
                          <Image
                            src={busTruckSearchImg2.src}
                            alt=""
                            width={busTruckSearchImg2.width}
                            height={busTruckSearchImg2.height}
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
            <div className={`tab-pane`} id={`tab-1`} key={1}>
              <section id="contact" className="contact p-3">
                <div className="row gy-4">
                  <div
                    className="col-lg-12"
                    style={{
                      fontStyle: "italic",
                    }}
                  >
                    <p className="text-center">
                      Select the section width and rim diameter value
                    </p>
                    <p className="text-center">
                      The filter will run automatically
                    </p>
                  </div>
                  <div className="col-lg-12">
                    <form
                      role="form"
                      className="php-email-form"
                      onSubmit={handleCarSearch}
                    >
                      <div className="row gy-4">
                        <div className="col-lg-6 form-group">
                          <label htmlFor="section_width">Section Width</label>
                          <select
                            name="section_width"
                            id="section_width"
                            defaultValue={""}
                            value={sectionWidth}
                            onChange={(e) =>
                              handleSelectChange(e.target.name, e.target.value)
                            }
                            className="form-control form-control-select"
                            required
                          >
                            <option value="" disabled>
                              Select Section Width
                            </option>
                            <option value="all">All</option>
                            {distinctSectionWidths.map((width) => (
                              <option key={width} value={width}>
                                {width}
                              </option>
                            ))}
                          </select>
                          <label htmlFor="rim_diameter" className="mt-3">
                            Rim Diameter
                          </label>
                          <select
                            name="rim_diameter"
                            id="rim_diameter"
                            defaultValue={""}
                            value={sectionWidth}
                            onChange={(e) =>
                              handleSelectChange(e.target.name, e.target.value)
                            }
                            className="form-control form-control-select"
                            required
                          >
                            <option value="" disabled>
                              Select Rim Diameter
                            </option>
                            <option value="all">All</option>
                            {distinctRimDiameter.map((width) => (
                              <option key={width} value={width}>
                                {width}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-lg-3 form-group search-img">
                          <Image
                            src={carSearchImg1.src}
                            alt=""
                            width={carSearchImg1.width}
                            height={carSearchImg1.height}
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-lg-3 form-group">
                          <p>Tyre Size on Side Wall GT Tyre</p>
                          <br />
                          <p>
                            <strong>IMPORTANT:</strong> Always check your
                            owner&apos;s manual or confirm with your local tire
                            dealer when you are selecting any tire size for your
                            vehicle!
                          </p>
                        </div>
                      </div>
                      {/* <div className="text-center">
                        <button type="submit">Search</button>
                      </div> */}
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <ProductList filteredProducts={filteredProducts} />
    </>
  );
};

export default Search;
