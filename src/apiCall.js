import axios from "axios";

// const url = "https://backennd.ad99526.repl.co";
const url = "https://Ecommerce-Backend.amarjitsingh2.repl.co";
export const getProducts = async () => {
  const res = await axios(`${url}/products`);
  return res;
};
export const addToCart = async (id) => {
  const res = await axios.put(`${url}/products/${id}`);
  return res;
};
export const removeFromCart = async (id) => {
  const res = await axios.patch(`${url}/products/${id}`);
  return res;
};
export const addToWishlist = async (id) => {
  const res = await axios.put(`${url}/wishlist/${id}`);
  return res;
};
export const removeFromWishlist = async (id) => {
  const res = await axios.patch(`${url}/wishlist/${id}`);
  return res;
};
