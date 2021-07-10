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
        return newState;
      }
      newState.cart[idx].quantity += 1;
      return newState;
    }
    case "INCREMENT_IN_CART": {
      const newState = JSON.parse(JSON.stringify(state));
      newState.cart[payload.idx].quantity += 1;
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
        return newState;
      }
      console.log(newState.cart[idx].quantity); // = newState.cart[idx].quantity + 1; //incrementing
      newState.cart[idx].quantity--; //decrementing
      console.log(newState.cart[idx].quantity); // = newState.cart[idx].quantity + 1; //incrementing
      return newState;
    }
    case "ADD_TO_WISHLIST": {
      const newState = JSON.parse(JSON.stringify(state));
      if (state.wishlist.includes(payload.id)) {
        return newState;
      }
      newState.wishlist.push(payload.id);
      return newState;
    }
    case "REMOVE_FROM_WISHLIST": {
      const newState = JSON.parse(JSON.stringify(state));
      if (state.wishlist.includes(payload.id)) {
        newState.wishlist = newState.wishlist.filter((id) => id !== payload.id);
        return newState;
      }
      return newState;
    }
    case "LOGIN_USER": {
      const newState = JSON.parse(JSON.stringify(state));
      newState.user.username = payload.username;
      newState.user.id = payload.id;
      return newState;
    }
    case "LOGOUT_USER": {
      const newState = JSON.parse(JSON.stringify(state));
      if (newState.user?.username && newState.user?.id) {
        delete newState.user.username;
        delete newState.user.id;
      }
      return newState;
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
