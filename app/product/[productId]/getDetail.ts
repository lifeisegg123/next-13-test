import { Product } from "../ProductInterface";

export const getDetail = async (id: string) => {
  const data = await fetch(`http://localhost:8080/products/${id}`);
  return data.json() as Promise<Product>;
};
