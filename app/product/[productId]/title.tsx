import { use } from "react";
import { getDetail } from "./getDetail";
import { ProductDetailProps } from "../ProductInterface";

const ProductTitle = ({ productId }: ProductDetailProps) => {
  const data = use(getDetail(productId));

  return <h2 className="text-xl">{data.name}</h2>;
};

export default ProductTitle;
