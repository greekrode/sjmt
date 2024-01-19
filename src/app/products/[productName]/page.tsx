import React from "react";
import Product from "./product";

type Props = {
  params: { productName: string };
};

type ProductName = "giti" | "gt" | "gtradial";

const productNameMap: Record<ProductName, string> = {
  giti: "GITI",
  gt: "GT",
  gtradial: "GT RADIAL",
};

const Page = ({ params }: { params: { productName: string } }) => {
  return <Product params={params} />;
};

export default Page;

export async function generateMetadata({ params }: Props) {
  return {
    title: `SJMT | Product | ${
      productNameMap[params.productName as ProductName]
    }`,
  };
}
