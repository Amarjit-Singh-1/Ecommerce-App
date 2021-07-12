import "../styles.css";
import WishItem from "./wishItem";
import { useCart } from "../cart-context";
export default function WishList() {
  const { state } = useCart();

  return (
    <>
      {state.wishlist.length ? (
        <div>
          <h2>Total Items in WishList : {state.wishlist.length} </h2>
          <ul className="cards">
            {state.wishlist.map((item) => (
              <WishItem
                item={item}
                key={item}
                // moveToCart={() =>
                //   dispatch({ type: "ADD_TO_CART", payload: { id: item.id } })
                // }
              />
            ))}
          </ul>
        </div>
      ) : (
        <h1>Your WishList is Empty!</h1>
      )}
    </>
  );
}
