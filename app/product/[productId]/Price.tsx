import { use } from "react";
import { getDetail } from "./getDetail";
import { ProductDetailProps } from "../ProductInterface";

const Price = ({ productId }: ProductDetailProps) => {
  const data = use(getDetail(productId));
  return <div className="text-orange-590">{data.price}</div>;
};

export default Price;
