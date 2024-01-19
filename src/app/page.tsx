import React from "react";
import Warehouses from "./sections/warehouses";
import Services from "./sections/services";
import Products from "./sections/products";
import Hero from "./sections/hero";
import Teams from "./sections/team";
import { Metadata } from "next";

const Page = () => {
  return (
    <>
      <Hero />
      <Warehouses />
      <Services />
      <Products />
      <Teams />
    </>
  );
};

export default Page;

export const metadata: Metadata = {
  title: "SJMT | Home",
  description:
    "Championing tire distribution with top brands GT. RADIAL, GAJAH TUNGGAL, and GITI. We offer a wide range of quality car, truck, and off-road tires, such as TBR and OTR. For PCR, LTR, and TBR, it's done via company or retail stores across Jabodetabek.",
};
