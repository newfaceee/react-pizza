import axios from "axios";

const setLoaded = (bool) => ({
  type: "SET_LOADED",
  payload: bool,
});

const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});

const fetchPizzas = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get("http://localhost:3001/db.json").then(({ data }) => {
    dispatch(setPizzas(data.pizzas));
  });
};

export { fetchPizzas, setLoaded, setPizzas };
