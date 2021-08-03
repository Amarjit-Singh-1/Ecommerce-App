import "../styles.css";
import { useCart } from "../cart-context";

export default function WishItem({ item }) {
  const { state, dispatch } = useCart();
  const product = state.products.find((el) => el.id === item);
  const moveToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: { id: item } });
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: { id: item } });
  };
  return (
    <li className="cards-item">
      <div className="card">
        <img src={product.image} alt="randomimage" />
        <div className="card-content">
          <h2 className="card-title">{product.name}</h2>
          <p className="card-text">Rs. {product.price}</p>
          <button
            className="btn btn-primary"
            style={
              !product.inStock
                ? {
                    cursor: "not-allowed",
                    backgroundColor: "#6f6eaf"
                  }
                : {}
            }
            onClick={() => moveToCart()}
            disabled={!product.inStock}
          >
            Move to Cart
          </button>
        </div>
      </div>
    </li>
  );
}
