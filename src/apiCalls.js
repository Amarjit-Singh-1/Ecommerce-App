import axios from "axios";

const url = "https://Ecommerce-1.amarjitsingh2.repl.co";
export const getProducts = async () => {
  const res = await axios.get(`${url}/products`);
  if (res.status === 200) {
    return res;
  }
  // yeh sahi hai kya
};

export const getCart = async () => {
  const res = await axios.get(`${url}/cart`);
  if (res.status === 200) {
    return res;
  }
};

export const addToCart = async (id) => {
  const res = await axios.post(`${url}/cart/${id}`);
  if (res.status === 200) {
    return res;
  }
};

export const updateCart = async (id) => {
  const res = await axios.put(`${url}/cart/${id}`);
  if (res.status === 200) {
    return res;
  }
};

export const removeFromCart = async (id) => {
  const res = await axios.delete(`${url}/cart/${id}`);
  if (res.status === 200) {
    return res;
  }
};

export const getWishlist = async () => {
  const res = await axios.get(`${url}/wishlist`);
  if (res.status === 200) {
    return res;
  }
};

export const addToWishlist = async (id) => {
  const res = await axios.post(`${url}/wishlist/${id}`);
  if (res.status === 200) {
    return res;
  }
};

export const removeFromWishlist = async (id) => {
  const res = await axios.delete(`${url}/wishlist/${id}`);
  if (res.status === 200) {
    return res;
  }
};

/// Hangho raha hai bohot
