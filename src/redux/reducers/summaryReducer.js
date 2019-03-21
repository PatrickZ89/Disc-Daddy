const summaryReducer = (state=[], action) => {
    switch (action.type) {
      case 'SET_SUMMARY':
      state=[...state, action.payload];
        return state;
      default:
        return state;
    }
  };
  
  export default summaryReducer;