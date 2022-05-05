import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductsListPage from "./pages/ProductsListPage";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products/" element={<ProductsListPage />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
