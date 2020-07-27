import axios from "axios";

export const fetchPizzas = () => (dispatch) => {
  axios.get("http://localhost:3001/db.json").then(({ data }) => {
    dispatch(setPizzas(data.pizzas));
  });
};

const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});

export default setPizzas;
