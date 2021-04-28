import "../styles.css";
import CartItem from "./cartItem";
import { useCart } from "../cart-context";

export default function Cart() {
  const { items, setItems } = useCart();
  const removeItem = (id) => {
    let temp = items.map((el) => (el.id === id ? { ...el, count: 0 } : el));
    setItems(temp);
  };
  let length = items.reduce((len, item) => len + item.count, 0);
  let total = items.reduce((tot, item) => tot + item.count * item.price, 0);

  return (
    <>
      {length ? (
        <div>
          <h2>Total Items in Cart : {length}</h2>
          <h3>Total Price : Rs. {total}</h3>
          <ul className="cards">
            {items.map((item) => {
              if (item.count) {
                return <CartItem item={item} removeItem={removeItem} />;
              } else {
                return undefined;
              }
            })}
          </ul>
        </div>
      ) : (
        <h1>Your Cart is Empty!</h1>
      )}
    </>
  );
}
