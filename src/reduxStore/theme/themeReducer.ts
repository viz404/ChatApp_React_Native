const initialState = {
  theme: "dark",
};

const themeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "THEME/TOGGLE": {
      return {
        theme: state.theme == "dark" ? "light" : "dark",
      };
    }
    default: {
      return state;
    }
  }
};

export default themeReducer;
