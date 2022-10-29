import { use } from "react";
import { getDetail } from "./getDetail";
import Price from "./Price";
import { ProductDetailProps } from "../ProductInterface";
import ProductTitle from "./title";

const ProductDetail = ({ params }: { params: ProductDetailProps }) => {
  const { productId } = params;

  const data = use(getDetail(productId));

  console.log(data);
  return (
    <div>
      <ProductTitle productId={productId} />
      <Price productId={productId} />
    </div>
  );
};

export default ProductDetail;
