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
    default:
      return state;
  }
};
