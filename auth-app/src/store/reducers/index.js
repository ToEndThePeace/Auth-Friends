import { combineReducers } from "redux";
import { reducer as login } from "./loginReducer";
import { reducer as friends } from "./friendsReducer";

export default combineReducers({ login, friends });
