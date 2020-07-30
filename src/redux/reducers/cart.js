const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const updateState = (newItems) => {
  const totalCount = newItems.reduce(
    (acc, currPizza) => acc + currPizza.count,
    0
  );

  const totalPrice = newItems.reduce(
    (acc, currPizza) => acc + currPizza.price * currPizza.count,
    0
  );
  return [totalCount, totalPrice];
};

const cart = (state = initialState, action) => {
  let newItems = [...state.items];
  const index = newItems.findIndex((pizza) => {
    return (
      pizza.id === action.payload.id &&
      pizza.doughType === action.payload.doughType &&
      pizza.size === action.payload.size
    );
  });
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      if (index !== -1) {
        newItems[index].count += 1;
      } else {
        newItems = [...newItems, { ...action.payload, count: 1 }];
      }
      const [totalCount, totalPrice] = updateState(newItems);
      return {
        ...state,
        totalCount,
        totalPrice,
        items: newItems,
      };
    }

    case 'ADD_PIZZA_IN_CART': {
      newItems[index].count += 1;
      const [totalCount, totalPrice] = updateState(newItems);
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case 'SUB_PIZZA_IN_CART': {
      newItems[index].count =
        newItems[index].count - 1 >= 0 ? newItems[index].count - 1 : 0;
      const [totalCount, totalPrice] = updateState(newItems);
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case 'DELETE_PIZZA_IN_CART': {
      newItems = [].concat(newItems.slice(0, index), newItems.slice(index + 1));
      const [totalCount, totalPrice] = updateState(newItems);
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    default:
      return state;
  }
};

export default cart;
