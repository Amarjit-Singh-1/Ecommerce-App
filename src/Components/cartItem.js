import "../styles.css";
import { useCart } from "../cart-context";

export default function CartItem({ item }) {
  const { state, dispatch } = useCart();
  const product = state.products.find((el) => el.id === item.id);
  const handleAddToCart = (id) => {
    dispatch({ type: "ADD_TO_CART", payload: { id } });
  };
  const handleRemoveFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };
  return (
    <li className="cards-item">
      <div className="card">
        <img src={product.image} alt="randomimage" />
        <div className="card-content">
          <h2 className="card-title">{product.name}</h2>
          <p className="card-text">
            Rs. <strong>{product.price}</strong>
          </p>
          <div className="cart-btn">
            <button
              className="btn btn-secondary"
              onClick={() => {
                handleAddToCart(product.id);
                // dispatch({ type: "ADD_TO_CART", payload: { id: product.id } });
              }}
            >
              <span className="material-icons-outlined">add</span>
            </button>

            {item.quantity}
            {item.quantity === 1 ? (
              <button
                className="btn btn-secondary"
                onClick={() => {
                  handleRemoveFromCart(product.id);
                }}
              >
                <span className="material-icons-outlined">close</span>
              </button>
            ) : (
              <button
                className="btn btn-secondary"
                onClick={
                  () => handleRemoveFromCart(product.id)
                  // dispatch({
                  //   type: "REMOVE_FROM_CART",
                  //   payload: { id: item.id }
                  // });
                }
              >
                <span className="material-icons-outlined">remove</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}
