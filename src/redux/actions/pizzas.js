export const fetchPizzas = () => (dispatch) => {
  fetch("http://localhost:3001/db.json")
    .then((res) => res.json())
    .then((db) => {
      dispatch(setPizzas(db.pizzas));
    });
};

const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});

export default setPizzas;
