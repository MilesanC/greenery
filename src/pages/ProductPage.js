import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddToCart from "../components/cart/AddToCart";
import ImgsProductDetail from "../components/products/ImgsProductDetail";
import InfoProduct from "../components/products/InfoProduct";
import Button from "../components/ui/Button";
import "../index.css";

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(
      `https://greenery-86493-default-rtdb.europe-west1.firebasedatabase.app/products/data/${params.productId}.json`
    )
      .then((respons) => respons.json())
      .then((product) => {
        console.log(product);
        setProduct(product);
      });
  }, [params.productId]);

  console.log(product);

  return (
    <div className="product-page">
      <div>
        <Link to="/products">
          <Button>Back to Products</Button>
        </Link>
        <ImgsProductDetail image={product.image} name={product.name} />
      </div>
      <div className="product-page-detail">
        <InfoProduct product={product} />
        {product.stock && <AddToCart product={product} id={params.productId}/>}
      </div>
    </div>
  );
};

export default ProductPage;
