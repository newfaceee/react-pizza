const setSortBy = (name) => ({
  type: 'SET_SORT_BY',
  payload: name
});

const setCategory = (categoryIndex) => ({
  type: 'SET_SORT_BY',
  payload: categoryIndex
});

export {
  setCategory,
  setSortBy,
}