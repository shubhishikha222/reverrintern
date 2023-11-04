const initialState = {
    user: null,
    counters: [],
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SIGN_IN':
        return { ...state, user: action.payload };
      case 'SIGN_OUT':
        return initialState;
      default:
        return state;
    }
  };
  
  export default authReducer;
  