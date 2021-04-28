import "../styles.css";
import { useCart } from "../cart-context";

export default function CartItem({ item, removeItem }) {
  const { items, setItems } = useCart();
  // console.log(item);
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
                let temp = items.map((el) =>
                  el.id === item.id ? { ...el, count: el.count + 1 } : el
                );
                setItems(temp);
              }}
            >
              <span class="material-icons-outlined">add</span>
            </button>

            {item.count}
            {item.count === 1 ? (
              <button
                className="btn btn-secondary"
                onClick={() => removeItem(item.id)}
              >
                <span class="material-icons-outlined">close</span>
              </button>
            ) : (
              <button
                className="btn btn-secondary"
                onClick={() => {
                  let temp = items.map((el) =>
                    el.id === item.id ? { ...el, count: el.count - 1 } : el
                  );
                  setItems(temp);
                }}
              >
                <span class="material-icons-outlined">remove</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}
