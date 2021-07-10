import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./Reducers/reducer";
import { getProducts } from "./apiCalls";

export const CartContext = createContext();

// export const products = [...Array(25)].map((item) => ({
//   id: faker.random.uuid(),
//   name: faker.commerce.productName(),
//   image: faker.random.image(),
//   //"data:image/webp;base64,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",
//   price: faker.commerce.price(),
//   count: 0,
//   wishlist: false,
//   inStock: faker.random.boolean(),
//   fastDelivery: faker.random.boolean(),
//   ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
//   offer: faker.random.arrayElement(["50% Off", "Cashback upto 500", "70% Off"])
// }));

const INITIALSTATE = {
  products: [],
  cart: [], //{id}
  wishlist: [],
  user: {},
  loader: {
    home: false, //homeStatus: "error" || "loaded" || "loading"
    cart: false,
    wishlist: false
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIALSTATE);
  async function fetchProductsData() {
    dispatch({ type: "TOGGLE_HOME_LOADING", payload: {} });
    const res = await getProducts();
    console.log({ res });
    dispatch({ type: "SET_INITIAL", payload: { data: res?.data } });
    dispatch({ type: "TOGGLE_HOME_LOADING", payload: {} });
  }
  useEffect(() => {
    fetchProductsData();
  }, []);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
