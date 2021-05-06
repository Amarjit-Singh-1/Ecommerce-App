import { initialState } from "../Components/ProductListing";

export const productsReducer = (state, { type, value }) => {
  switch (type) {
    case "SORT_BY":
      return { ...state, sortBy: value };
    case "TOGGLE_INVENTORY":
      return {
        ...state,
        showInventoryAll: !state.showInventoryAll
      };
    case "TOGGLE_DELIVERY":
      return { ...state, showFastDeliveryOnly: !state.showFastDeliveryOnly };
    case "CLEAR":
      return { ...state, ...initialState };
    default:
      return state;
  }
};
