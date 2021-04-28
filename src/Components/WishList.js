import "../styles.css";
import WishItem from "./wishItem";
import { useCart } from "../cart-context";

export default function WishList() {
  const { items, setItems } = useCart();
  // console.log(items);
  let length = items.reduce((len, item) => (item.wishlist ? len + 1 : len), 0);

  const moveToCart = (id) => {
    let temp = items.map((el) =>
      el.id === id ? { ...el, count: el.count + 1, wishlist: !el.wishlist } : el
    );
    setItems(temp);
  };
  return (
    <>
      {length ? (
        <div>
          <h2>Total Items in WishList : {length} </h2>
          <ul className="cards">
            {items.map((item) => {
              if (item.wishlist) {
                return <WishItem item={item} moveToCart={moveToCart} />;
              } else {
                return undefined;
              }
            })}
          </ul>
        </div>
      ) : (
        <h1>Your WishList is Empty!</h1>
      )}
    </>
  );
}
