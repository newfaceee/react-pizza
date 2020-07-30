export const addPizzaToCart = (pizzaObject) => ({
  type: 'ADD_PIZZA_CART',
  payload: pizzaObject,
});

export const addPizzaInCart = (id, size, doughType) => ({
  type: 'ADD_PIZZA_IN_CART',
  payload: {
    id,
    size,
    doughType,
  },
});

export const subPizzaInCart = (id, size, doughType) => ({
  type: 'SUB_PIZZA_IN_CART',
  payload: {
    id,
    size,
    doughType,
  },
});

export const deletePizzaInCart = (id, size, doughType) => ({
  type: 'DELETE_PIZZA_IN_CART',
  payload: {
    id,
    size,
    doughType,
  },
});

export const deleteAllPizzasInCart = () => ({
  type: 'DELETE_ALL_PIZZAS_IN_CART',
});
