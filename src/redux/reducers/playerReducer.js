const playerReducer = (state=[], action) => {
    switch (action.type) {
      case 'SET_PLAYER':
      state = [...state, action.payload.name]
        return action.payload;
      default:
        return state;
    }
  };
  
  export default playerReducer;