import "../styles.css";

export default function Filter({ dispatch, sortBy }) {
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
                  onChange={() =>
                    dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
                  }
                  checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
                />
                <label htmlFor="sort1">Price High to Low</label>
                <br />
                <input id="sort2" type="radio" name="sort" />
                <label htmlFor="sort2">Price Low to High</label>
              </p>
              <button
                className="btn"
                onClick={() => {
                  ["radio-a", "radio-b"].forEach();
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
                <input type="checkbox" />
                <label>Include Out of Stock</label>
                <br />
                <input type="checkbox" />
                <label>Fast Delivery</label>
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}
