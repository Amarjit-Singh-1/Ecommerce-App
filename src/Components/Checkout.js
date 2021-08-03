import "../styles.css";
import { useCart } from "../cart-context";

export function Checkout() {
  const { state } = useCart();
  return (
    <>
      <h1>This is Checkout</h1>
      <div className="checkout-card">
        {state.cart.map((item) => {
          const product = state.products.find((el) => el.id === item.id);
          return (
            <div>
              <p>
                {product.name} : {item.quantity}x :{" "}
                {product.price * item.quantity}{" "}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
