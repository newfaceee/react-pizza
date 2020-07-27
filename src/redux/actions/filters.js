const setSortBy = (index) => ({
  type: "SET_SORT_BY",
  payload: index,
});

const setCategory = (categoryIndex) => ({
  type: "SET_CATEGORY",
  payload: categoryIndex,
});

export { setCategory, setSortBy };
