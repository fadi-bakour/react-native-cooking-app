

// Initial State
const initialState = {
    Token: null,
  };
  
  // Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
    switch (action.type) {
      // Login
      case 'LOGIN': {
        return {
          // State
          ...state,
          // Redux Store
          Token: action.Token,
        };
      }
      //SignOut
      case 'LOG_OUT': {
        return {
          // State
          ...state,
          // Redux Store
          Token: action.Token,
        };
      }
      // Default
      default: {
        return state;
      }
    }
  };

  export default authReducer;
  