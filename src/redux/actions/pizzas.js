import axios from "axios";

const setLoaded = (bool) => ({
  type: "SET_LOADED",
  payload: bool,
});

const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});

const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `http://localhost:3001/pizzas?${
        category === null ? "" : `category=${category}&`
      }_sort=${sortBy}&_order=desc`
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export { fetchPizzas, setLoaded, setPizzas };
