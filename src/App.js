import "./styles.css";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Checkout } from "./Components/Checkout";
import Cart from "./Components/Cart";
import Listing from "./Components/ProductListing";
import WishList from "./Components/WishList";
import { useCart } from "./cart-context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Edit from "./Components/Edit";
import { SignIn } from "./Auth/SignIn";
import { SignUp } from "./Auth/SignUp";

export default function App() {
  let navigate = useNavigate();
  const { state } = useCart();
  console.log(state)
  useEffect(() => {
    if (state.user.username) {
      navigate("/");
    } else {
      navigate("signin");
    }
  }, [navigate, state.user.username]);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Listing />} />
          <PrivateRoute
            condition={state.user.username}
            redirectPath="/signin"
            path="/cart"
            element={<Cart />}
          />
          <PrivateRoute
            condition={state.user.username}
            redirectPath="/signin"
            path="/wishlist"
            element={<WishList />}
          />
          <PrivateRoute
            condition={state.user.username}
            redirectPath="/signin"
            path="/edit"
            element={<Edit />}
          />
          <PrivateRoute
            condition={state.user.username}
            redirectPath="/signin"
            path="/checkout"
            element={<Checkout />}
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
function NotFound() {
  return "Not Found 404!";
}
