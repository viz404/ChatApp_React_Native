const initialState = {
  displayName: "",
  phoneNumber: "",
  photoURL: "",
  uid: "",
  signedIn: false,
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "USER/SIGNIN": {
      return {
        displayName: action.payload.displayName,
        phoneNumber: action.payload.phoneNumber,
        photoURL: action.payload.photoURL,
        uid: action.payload.uid,
        signedIn: true,
      };
    }
    case "USER/SIGNOUT": {
      return {
        ...initialState,
      };
    }
    case "USER/UPDATE_INFO": {
      return {
        ...state,
        displayName: action.payload.displayName,
        photoURL: action.payload.photoURL,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
