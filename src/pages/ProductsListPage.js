import { useEffect, useState } from "react";

import Form from "../components/form/Form";
import ProductsList from "../components/products/ProductsList";
import "../index.css";

const ProductsListPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://greenery-86493-default-rtdb.europe-west1.firebasedatabase.app/products.json"
    )
      .then((respons) => respons.json())
      .then((products) => {
        const productsData = [];

        for (const key in products.data) {
          productsData.push({
            id: key,
            name: products.data[key].name,
            price: products.data[key].price,
            image: products.data[key].image,
            description: products.data[key].description,
            directSunlight: products.data[key].direct_sunlight,
            freeShipping: products.data[key].free_shipping,
            maintenance: products.data[key].maintenance,
            water: products.data[key].water,
            stock: products.data[key].stock,
          });
        }
        console.log(productsData);
        setProducts(productsData);
      });
  }, []);

  return (
    <div className="product-list">
      <Form />
      <ProductsList products={products} />
    </div>
  );
};

export default ProductsListPage;
