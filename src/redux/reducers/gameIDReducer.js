const gameIDReducer = (state=0, action) => {
    switch (action.type) {
      case 'SET_GAMEID':
      state = action.payload;
        return state;
      default:
        return state;
    }
  };
  
  export default gameIDReducer;
  