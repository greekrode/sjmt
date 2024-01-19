import React from "react";
import ProductDetail from "./productDetail";

type ProductName = "giti" | "gt" | "gtradial";

const productNameMap: Record<ProductName, string> = {
  gt: "GT",
  giti: "GITI",
  gtradial: "GT Radial",
};

type Props = {
  params: { productName: string };
};

const Page = ({
  params,
}: {
  params: { productId: string; productName: string };
}) => {
  return <ProductDetail params={params} />;
};

export default Page;

export async function generateMetadata({ params }: Props) {
  return {
    title: `SJMT | Product | ${
      productNameMap[params.productName as ProductName]
    }`,
  };
}
