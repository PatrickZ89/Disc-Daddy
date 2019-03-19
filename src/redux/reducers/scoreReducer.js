const scoreReducer = (state=[], action) => {
    switch (action.type) {
      case 'SET_SCORE':
      state=[...state, action.payload];
        return state;
      default:
        return state;
    }
  };
  
  export default scoreReducer;