import React from "react";
import Constructions from "./sections/constructions";
import Services from "./sections/services";
import Products from "./sections/products";
import Testimonials from "./sections/testimonials";
import Hero from "./sections/hero";
import Teams from "./sections/team";

const Page = () => {
  return (
    <>
      <Hero />
      <Constructions />
      <Services />
      <Products />
      <Teams />
      {/* <Testimonials /> */}
    </>
  );
};

export default Page;
