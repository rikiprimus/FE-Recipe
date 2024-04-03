import { combineReducers } from "redux";
import recipes_get from "./recipes/recipes_get";
import login from "./auth/login"
import register from "./auth/register";

const rootReducers = combineReducers({
	login,
	register,
	recipes_get
})

export default rootReducers