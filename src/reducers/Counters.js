const initialState = [];

const countersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return state.map((counter) =>
        counter.id === action.payload
          ? { ...counter, value: counter.value + 1 }
          : counter
      );
    case 'DECREASE_COUNTER':
      return state.map((counter) =>
        counter.id === action.payload
          ? { ...counter, value: counter.value - 1 }
          : counter
      );
    case 'RESET_COUNTER':
      return state.map((counter) =>
        counter.id === action.payload ? { ...counter, value: 0 } : counter
      );
    case 'ADD_COUNTER':
      return [...state, action.payload];
    case 'REMOVE_COUNTER':
      return state.filter((counter) => counter.id !== action.payload);
    default:
      return state;
  }
};

export default countersReducer;
