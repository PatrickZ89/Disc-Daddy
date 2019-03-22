const currentGameReducer = (state=[], action) => {
    switch (action.type) {
      case 'SET_CURRENT':
      state=[...state, action.payload];
        return state;
      default:
        return state;
    }
  };
  
  export default currentGameReducer;