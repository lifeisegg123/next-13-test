import Link from "next/link";
import { use } from "react";
import { Product } from "./ProductInterface";
import { sleep } from "../../utils/sleep";

const getData = async () => {
  const data = await fetch("http://localhost:8080/products");
  await sleep(3500);
  return data.json() as Promise<Product[]>;
};

const formatPrice = Intl.NumberFormat("ko-kr");

const ProductPage = () => {
  const data = use(getData());
  console.log(data);
  return (
    <ul className="flex flex-col gap-4">
      {data.map((product) => (
        <li key={product.id} className="list-none">
          <Link className="p-0" href={`/product/${product.id}`}>
            <h2 className="text-base">{product.name}</h2>
            <p className="text-orange-500 text-sm">
              {formatPrice.format(product.price * 100)}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductPage;
