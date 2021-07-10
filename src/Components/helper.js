export const initialState = {
  showInventoryAll: true,
  showFastDeliveryOnly: false,
  sortBy: null
};
export function getSortedData(productList, sortBy) {
  if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
    return productList.sort((a, b) => b["price"] - a["price"]);
  }

  if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
    return productList.sort((a, b) => a["price"] - b["price"]);
  }
  return productList;
}

export function getFilteredData(
  productList,
  { showFastDeliveryOnly, showInventoryAll }
) {
  return productList
    .filter(({ fastDelivery }) => (showFastDeliveryOnly ? fastDelivery : true))
    .filter(({ inStock }) => (showInventoryAll ? true : inStock));
}
