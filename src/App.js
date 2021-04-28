import "./styles.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";

import Cart from "./Components/Cart";
import Listing from "./Components/ProductListing";
import WishList from "./Components/WishList";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Listing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="wishlist" element={<WishList />} />
        </Routes>
      </div>
    </div>
  );
}
