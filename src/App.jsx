import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./component/Home";
import Wishlist from "./component/Wishlist";
import Cart from "./component/Cart";
import ProductDetails from "./component/ProductDetails";
import Checkout from "./component/Checkout";
import OrderHistory from "./component/OrderHistory";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-history" element={<OrderHistory />} />

      </Route>
    </Routes>
  );
}

export default App;
