import "../styles.css";
import { useCart } from "../cart-context";
import { addToCart, removeFromCart } from "../apiCall";

export default function CartItem({ item }) {
  const { items, setItems } = useCart();
  // console.log(item);
  const handleRemoveFromCart = async (id) => {
    const res = await removeFromCart(id);
    setItems(res.data);
  };
  const handleAddToCart = async (id) => {
    const res = await addToCart(id);
    setItems(res.data);
  };

  return (
    <li className="cards-item">
      <div className="card">
        <img src={item.image} alt="randomimage" />
        <div className="card-content">
          <h2 className="card-title">{item.name}</h2>
          <p className="card-text">
            Rs. <strong>{item.price}</strong>
          </p>
          <div className="cart-btn">
            <button
              className="btn btn-secondary"
              onClick={() => {
                handleAddToCart(item.id);
                // let temp = items.map((el) =>
                //   el.id === item.id ? { ...el, count: el.count + 1 } : el
                // );
                // setItems(temp);
              }}
            >
              <span class="material-icons-outlined">add</span>
            </button>

            {item.count}
            <button
              className="btn btn-secondary"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              <span class="material-icons-outlined">
                {item.count === 1 ? "close" : "remove"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
/* ) : (
              <button
                className="btn btn-secondary"
                onClick={() => {
                  // let temp = items.map((el) =>
                  //   el.id === item.id ? { ...el, count: el.count - 1 } : el
                  // );
                  // setItems(temp);
                }}
              >
                <span class="material-icons-outlined">remove</span>
              </button>
            )} */
