import {combineReducers} from "redux";
import userReducer from "./user/userReducer";
import themeReducer from "./theme/themeReducer";

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
});

export default rootReducer;
