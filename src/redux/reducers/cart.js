const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOTAL_PRICE':
      return {
        ...state,
        totalPrice: action.payload,
      };
    case 'SET_TOTAL_COUNT':
      return {
        ...state,
        totalCount: action.payload,
      };
    case 'ADD_PIZZA_CART':
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };
      return {
        ...state,
        totalCount: Object.values(newItems).reduce((acc, curr) => {
          return curr.length + acc;
        }, 0),
        totalPrice: state.totalPrice + action.payload.price,
        items: newItems,
      };
    default:
      return state;
  }
};

export default cart;