const currentGameReducer = (state=[], action) => {
    switch (action.type) {
      case 'SET_CURRENT':
      state=[...state, action.payload];
        return action.payload;
      default:
        return state;
    }
  };
  
  export default currentGameReducer;