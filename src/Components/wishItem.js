import "../styles.css";
import { removeFromWishlist } from "../apiCall";
import { useCart } from "../cart-context";

export default function WishItem({ item, moveToCart }) {
  const { setItems } = useCart();
  const handleRemoveFromWishlist = async (id) => {
    const res = await removeFromWishlist(id);
    if (typeof res.data === "object" && res.data.length) {
      setItems(res.data);
    }
  };
  console.log();
  return (
    <li className="cards-item">
      <div className="card">
        <img src={item.image} alt="randomimage" />
        <div className="card-content">
          <h2 className="card-title">{item.name}</h2>
          <p className="card-text">Rs. {item.price}</p>
          <button
            className="btn btn-primary"
            // onClick={() => moveToCart(item.id)}
            onClick={() => handleRemoveFromWishlist(item.id)}
          >
            Move to Cart
          </button>
        </div>
      </div>
    </li>
  );
}
