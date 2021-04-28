import "../styles.css";
import { productsReducer } from "../Reducers/productsReducer";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../cart-context";

export default function Listing() {
  const { items, setItems } = useCart();
  // console.log(items);
  const [
    { showInventoryAll, showFastDeliveryOnly, sortBy },
    dispatch
  ] = useReducer(productsReducer, {
    showInventoryAll: true,
    showFastDeliveryOnly: false,
    sortBy: null
  });

  function getSortedData(productList, sortBy) {
    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return productList.sort((a, b) => b["price"] - a["price"]);
    }

    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return productList.sort((a, b) => a["price"] - b["price"]);
    }
    return productList;
  }

  function getFilteredData(
    productList,
    { showFastDeliveryOnly, showInventoryAll }
  ) {
    return productList
      .filter(({ fastDelivery }) =>
        showFastDeliveryOnly ? fastDelivery : true
      )
      .filter(({ inStock }) => (showInventoryAll ? true : inStock));
  }

  const sortedData = getSortedData(items, sortBy);
  const filteredData = getFilteredData(sortedData, {
    showFastDeliveryOnly,
    showInventoryAll
  });
  // setItems(filteredData);
  return (
    <div className="home">
      {/* <Filter dispatch={dispatch} sortBy={sortBy} /> */}
      <div className="functions">
        <div className="filter-cards-item">
          <div className="filter-card">
            <div className="card-content">
              <fieldset>
                <legend className="card-title">Sort By</legend>
                <p className="card-text">
                  <input
                    id="sort1"
                    type="radio"
                    name="sort"
                    checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
                    onChange={() =>
                      dispatch({
                        type: "SORT_BY",
                        value: "PRICE_HIGH_TO_LOW"
                      })
                    }
                  />
                  <label htmlFor="sort1">Price High to Low</label>
                  <br />
                  <input
                    id="sort2"
                    type="radio"
                    name="sort"
                    checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
                    onChange={() =>
                      dispatch({
                        type: "SORT_BY",
                        value: "PRICE_LOW_TO_HIGH"
                      })
                    }
                  />
                  <label htmlFor="sort2">Price Low to High</label>
                </p>
                {/* <button className="btn">Clear</button> */}
              </fieldset>
            </div>
          </div>
        </div>
        <div className="filter-cards-item">
          <div className="filter-card">
            <div className="card-content">
              <fieldset>
                <legend className="card-title">Filter</legend>
                <p className="card-text">
                  <input
                    name="outofstock"
                    type="checkbox"
                    checked={showInventoryAll}
                    onChange={() => dispatch({ type: "TOGGLE_INVENTORY" })}
                  />
                  <label htmlFor="outofstock">Include Out of Stock</label>
                  <br />
                  <input
                    checked={showFastDeliveryOnly}
                    name="fastdelivery"
                    type="checkbox"
                    onChange={() => dispatch({ type: "TOGGLE_DELIVERY" })}
                  />
                  <label htmlFor="fastdelivery">Fast Delivery</label>
                </p>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      <div className="something">
        <h1>Our Products</h1>
        <ul className="cards">
          {filteredData.map((item) => {
            // console.log(item.count);
            let btn_class = item.wishlist ? "icon-btn-red" : "icon-btn";
            let btn_type = item.wishlist ? "favorite" : "favorite_border";
            return (
              <li className="cards-item" key={item.id}>
                <div className="card">
                  <>
                    <img src={item.image} alt="randomimage" />
                    <button
                      className={btn_class}
                      onClick={() => {
                        let temp = items.map((el) =>
                          el.id === item.id
                            ? { ...el, wishlist: !el.wishlist }
                            : el
                        );
                        console.log();
                        setItems(temp);
                      }}
                    >
                      <i className="material-icons-outlined md-36">
                        {btn_type}
                      </i>
                    </button>
                  </>
                  <div className="card-content">
                    <h2 className="card-title">{item.name}</h2>
                    <div className="card-text">
                      Price in Rs: <strong>{item.price}</strong>
                    </div>
                    {item.inStock ? (
                      <div>In Stock</div>
                    ) : (
                      <div>Out Of Stock</div>
                    )}
                    {item.fastDelivery ? (
                      <div>Fast Delivery</div>
                    ) : (
                      <div>3 Days Minimum</div>
                    )}

                    {!item.count ? (
                      <button
                        disabled={!item.inStock}
                        style={
                          !item.inStock
                            ? {
                                cursor: "not-allowed",
                                backgroundColor: "#6f6eaf"
                              }
                            : {}
                        }
                        className="btn btn-primary"
                        onClick={() => {
                          let temp = items.map((el) =>
                            el.id === item.id
                              ? { ...el, count: el.count + 1 }
                              : el
                          );
                          setItems(temp);
                        }}
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <div>
                        <Link
                          to="cart"
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          <button className="btn btn-link">Go to Cart</button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
