const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const updateItems = (newItems, oldItems) => {
  const { id } = newItems;
  if (oldItems[id]) {
  }
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART':
      let newItems = {};

      const index =
        state.items[action.payload.id] &&
        state.items[action.payload.id].findIndex((pizza) => {
          return (
            pizza.type === action.payload.type &&
            pizza.size === action.payload.size
          );
        });
      if (index !== 'undefined' && index >= 0) {
        state.items[action.payload.id][index].count += 1;
        newItems = state.items;
      } else {
        const newPizza = Object.assign({}, action.payload, {
          count: 1,
        });
        newItems = {
          ...state.items,
          [action.payload.id]: state.items[action.payload.id]
            ? [...state.items[action.payload.id], newPizza]
            : [newPizza],
        };
      }

      const totalCount = Object.values(newItems)
        .flat()
        .reduce((acc, curr) => acc + curr.count, 0);
      return {
        ...state,
        totalCount,
        totalPrice: state.totalPrice + action.payload.price,
        items: newItems,
      };
    default:
      return state;
  }
};

export default cart;
