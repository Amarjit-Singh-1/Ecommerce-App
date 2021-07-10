import "../styles.css";
import CartItem from "./cartItem";
import { useCart } from "../cart-context";

export default function Cart() {
  const { state, dispatch } = useCart();
  const findPrice = (id) => {
    const product = state.products.find((item) => item.id === id);
    return product.price;
  };
  const total = state.cart.reduce(
    (tot, item) => tot + item.quantity * findPrice(item.id),
    0
  );
  return (
    <>
      {state.cart.length ? (
        <div>
          <h2>Total Items in Cart : {state.cart.length}</h2>
          <h3>Total Price : Rs. {total}</h3>
          <ul className="cards">
            {state.cart.map((item) => (
              <CartItem item={item} key={item.id} /*removeItem={removeItem}*/ />
            ))}
          </ul>
        </div>
      ) : (
        <h1>Your Cart is Empty!</h1>
      )}
    </>
  );
}
