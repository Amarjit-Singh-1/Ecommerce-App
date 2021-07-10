import "../styles.css";

export function Filter({
  sortBy,
  dispatchProducts,
  showInventoryAll,
  showFastDeliveryOnly
}) {
  return (
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
                    dispatchProducts({
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
                    dispatchProducts({
                      type: "SORT_BY",
                      value: "PRICE_LOW_TO_HIGH"
                    })
                  }
                />
                <label htmlFor="sort2">Price Low to High</label>
              </p>
              <button
                className="btn"
                onClick={() => {
                  dispatchProducts({ type: "CLEAR" });
                }}
              >
                Clear
              </button>
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
                  id="outofstock"
                  type="checkbox"
                  checked={showInventoryAll}
                  onChange={() =>
                    dispatchProducts({ type: "TOGGLE_INVENTORY" })
                  }
                />
                <label htmlFor="outofstock">Include Out of Stock</label>
                <br />
                <input
                  checked={showFastDeliveryOnly}
                  id="fastdelivery"
                  name="fastdelivery"
                  type="checkbox"
                  onChange={() => dispatchProducts({ type: "TOGGLE_DELIVERY" })}
                />
                <label htmlFor="fastdelivery">Fast Delivery</label>
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}
