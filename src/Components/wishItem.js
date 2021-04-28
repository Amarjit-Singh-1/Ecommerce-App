import "../styles.css";

export default function WishItem({ item, moveToCart }) {
  return (
    <li className="cards-item">
      <div className="card">
        <img src={item.image} alt="randomimage" />
        <div className="card-content">
          <h2 className="card-title">{item.name}</h2>
          <p className="card-text">Rs. {item.price}</p>
          <button
            className="btn btn-primary"
            onClick={() => moveToCart(item.id)}
          >
            Move to Cart
          </button>
        </div>
      </div>
    </li>
  );
}
