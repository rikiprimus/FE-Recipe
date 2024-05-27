import { combineReducers } from "redux";
import login from "./auth/login"
import register from "./auth/register";
import recipes_get from "./recipes/recipes_get";
import recipes_post from "./recipes/recipes_post";
import recipes_getbyid from "./recipes/recipes_getbyid"; 
import recipesandcomments_getbyid from "./recipes/recipesandcomments_getbyid";
import recipes_update from "./recipes/recipes_update";
import forgot_password from "./auth/forgotpassword";
import change_password from "./auth/changepassword";

const rootReducers = combineReducers({
	login,
	register,
	forgot_password,
	change_password,
	recipes_get,
	recipes_post,
	recipes_getbyid,
	recipesandcomments_getbyid,
	recipes_update
})

export default rootReducers