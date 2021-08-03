import "../styles.css";
import { Link } from "react-router-dom";
import { useCart } from "../cart-context";
import { Svg } from "./Svg";

export default function Navbar() {
  const { state, dispatch } = useCart();
  return (
    <div className="navigation-bar">
      <span className="navigation-bar-logo">
        <Svg />
      </span>
      <nav>
        <ul className="navigation-bar-links">
          <li className="color-white">
            Welcome {state.user?.username || "Guest"}
            <Link to="/edit">
              <span role="img" aria-label="edit option">
                📝
              </span>
            </Link>
          </li>
          <li>
            <button className="icon-btn-badge">
              <Link to="/">
                <i className="material-icons-outlined md-36">home</i>
              </Link>
            </button>
          </li>
          <li>
            <button className="icon-btn-badge">
              <Link to="wishlist">
                <i className="material-icons-outlined md-36">favorite_border</i>
                {state.wishlist.length ? (
                  <span className="badge">{state.wishlist.length}</span>
                ) : (
                  <></>
                )}
              </Link>
            </button>
          </li>
          <li>
            <button className="icon-btn-badge">
              <Link to="cart">
                <i className="material-icons-outlined md-36">shopping_cart</i>
                {state.cart.length ? (
                  <span className="badge">{state.cart.length}</span>
                ) : (
                  <></>
                )}
              </Link>
            </button>
          </li>
          {state.user.username && (
            <li
              className="color-white"
              onClick={() => dispatch({ type: "LOGOUT_USER", payload: {} })}
            >
              Logout
            </li>
          )}{" "}
        </ul>
      </nav>
    </div>
  );
}
