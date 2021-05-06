import { createContext, useContext, useEffect, useRef, useState } from "react";
// import faker from "faker";
import { getProducts } from "./apiCall";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  //
  const getProductsData = async () => {
    if (isMounted.current) {
      const res = await getProducts();
      setItems(res.data);
    }
  };
  useEffect(() => getProductsData(), []);
  //

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
