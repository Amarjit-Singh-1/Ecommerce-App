import { INITIALSTATE } from "../cart-context";
export function reducer(state, { type, payload }) {
  switch (type) {
    case "SET_INITIAL": {
      const newState = JSON.parse(JSON.stringify(state));
      newState.products = JSON.parse(JSON.stringify(payload.data));
      return newState;
    }
    case "ADD_TO_CART": {
      const newState = JSON.parse(JSON.stringify(state));
      const idx = state.cart.findIndex((el) => el.id === payload.id);
      if (idx === -1) {
        newState.cart.push({ id: payload.id, quantity: 1 }); //adding
        localStorage.setItem("JWT", JSON.stringify(newState));
        return newState;
      }
      newState.cart[idx].quantity += 1;
      localStorage.setItem("JWT", JSON.stringify(newState));
      return newState;
    }
    case "INCREMENT_IN_CART": {
      const newState = JSON.parse(JSON.stringify(state));
      newState.cart[payload.idx].quantity += 1;
      localStorage.setItem("JWT", JSON.stringify(newState));
      console.log(newState);
      return newState;
    }
    case "REMOVE_FROM_CART": {
      const newState = JSON.parse(JSON.stringify(state));
      const idx = state.cart.findIndex((el) => el.id === payload.id);
      if (idx === -1) {
        return newState;
      }
      if (state.cart[idx].quantity === 1) {
        newState.cart.splice(idx, 1);
        localStorage.setItem("JWT", JSON.stringify(newState));
        return newState;
      }
      newState.cart[idx].quantity--; //decrementing
      localStorage.setItem("JWT", JSON.stringify(newState));
      return newState;
    }
    case "ADD_TO_WISHLIST": {
      const newState = JSON.parse(JSON.stringify(state));
      if (state.wishlist.includes(payload.id)) {
        return newState;
      }
      newState.wishlist.push(payload.id);
      localStorage.setItem("JWT", JSON.stringify(newState));
      return newState;
    }
    case "REMOVE_FROM_WISHLIST": {
      const newState = JSON.parse(JSON.stringify(state));
      if (state.wishlist.includes(payload.id)) {
        newState.wishlist = newState.wishlist.filter((id) => id !== payload.id);
      }
      localStorage.setItem("JWT", JSON.stringify(newState));
      return newState;
    }
    case "LOGIN_USER": {
      const newState = JSON.parse(JSON.stringify(state));
      newState.user.username = payload.username;
      newState.user.id = payload.id;
      localStorage.setItem("JWT", JSON.stringify(newState));
      return newState;
    }
    case "LOGOUT_USER": {
      const newState = JSON.parse(JSON.stringify(state));
      INITIALSTATE.products = [...newState.products];
      localStorage.clear();
      return INITIALSTATE;
    }
    case "TOGGLE_HOME_LOADING": {
      const newState = JSON.parse(JSON.stringify(state));
      newState.loader.home = !newState.loader.home;
      return newState;
    }
    case "TOGGLE_CART_LOADING": {
      const newState = JSON.parse(JSON.stringify(state));
      newState.loader.cart = !newState.loader.cart;
      return newState;
    }
    default:
      return state;
  }
}
