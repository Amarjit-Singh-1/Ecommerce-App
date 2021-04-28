import { createContext, useContext, useState } from "react";
import faker from "faker";

export const CartContext = createContext();

const products = [...Array(25)].map((item) => ({
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  image: faker.random.image(),
  price: faker.commerce.price(),
  count: 0,
  wishlist: false,
  inStock: faker.random.boolean(),
  fastDelivery: faker.random.boolean(),
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  offer: faker.random.arrayElement(["50% Off", "Cashback upto 500", "70% Off"])
}));

export function CartProvider({ children }) {
  const [items, setItems] = useState(products);
  const setInitialItems = () => setItems(products);
  return (
    <CartContext.Provider value={{ items, setItems, setInitialItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
