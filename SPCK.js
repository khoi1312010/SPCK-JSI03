let products = [];
const getProducts = async () => {
  const response = await fetch(
    "https://652177f2a4199548356d3fa6.mockapi.io/products"
  );
  products = await response.json();
};

const addProduct = async () => {
  const newProductRequest = {
    name: nameElm.value,
    price: Number(priceElm.value),
    quantity: Number(quantityElm.value),
  };
  const response = await fetch(
    "https://652177f2a4199548356d3fa6.mockapi.io/products",
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newProductRequest),
    }
  );
  const newProduct = await response.json();
  products = [...products, newProduct];
  displayProducts();
};