import { useEffect, useState } from "react";
import { getProducts } from "../../products.api";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getAllProducts() {
      const products = await getProducts();
      setProducts(products);
    }

    getAllProducts();
  }, []);

  if (!products.length) {
    return "loading...";
  }

  return (
    <ul className="grid grid-cols-3 space-x-6 space-y-6">
      {products.map((p: any) => (
        <li key={p.id} className="w-full">
          <a href={`/product/${p.id}`}>
            <span>{p.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
