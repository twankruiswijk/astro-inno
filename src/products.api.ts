export const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  const products = await data;

  return products;
};
