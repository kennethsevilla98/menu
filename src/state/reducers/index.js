import { combineReducers } from "redux";
import menuReducer from "./menuReducer";

const reducers = combineReducers({
  menus: menuReducer,
});

export default reducers;
