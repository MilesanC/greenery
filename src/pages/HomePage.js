import { useEffect, useState } from "react";

import InfoSection from "../components/home/InfoSection";
import IntroSection from "../components/home/IntroSection";
import NewsletterSection from "../components/home/NewsletterSection";
import OurProductsSection from "../components/home/OurProductsSection";

const HomePage = () => {
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
          });
        }
        console.log(productsData);
        setProducts(productsData);
      });
  }, []);

  return (
    <div>
      <IntroSection />
      <OurProductsSection products={products} />
      <InfoSection />
      <NewsletterSection />
    </div>
  );
};

export default HomePage;
