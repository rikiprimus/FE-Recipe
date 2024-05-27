import axios from "axios";

const apiUrl = import.meta.env.VITE_BASE_URL;

export const authLogin = (data, navigate) => async (dispatch, getState) => {
  try {
    dispatch({ type: "POST_LOGIN_PENDING" });
    const res = await axios.post(apiUrl + "/auth/login", data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    dispatch({ type: "POST_LOGIN_SUCCESS", payload: res.data });
    navigate("/");
  } catch (err) {
    dispatch({
      type: "POST_LOGIN_ERROR",
      payload: err?.response?.data?.messages ?? "login error",
    });
  }
};

export const authRegister = (data, navigate) => async (dispatch, getState) => {
  try {
    dispatch({ type: "POST_REGISTER_PENDING" });
    const res = await axios.post(apiUrl + "/auth/register", data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    console.log("res")
    console.log(res)
    dispatch({ type: "POST_REGISTER_SUCCESS", payload: res.data });
    // navigate("/");
  } catch (err) {
    dispatch({
      type: "POST_REGISTER_ERROR",
      payload: err?.response?.data?.messages ?? "register error",
    });
  }
};

export const forgotPassowrd = (data) => async (dispatch, getState) => {
  try {
    dispatch({ type: "FORGOT_PASSWORD_REQUEST" });
    const res = await axios.post(apiUrl + "/auth/forgotpassword", data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    dispatch({ type: "FORGOT_PASSWORD_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({
      type: "FORGOT_PASSWORD_ERROR",
      payload: err?.response?.data?.messages ?? "forgot password error",
    });
  }
};

export const changePassword = (data, navigate) => async (dispatch, getState) => {
  try {
    dispatch({ type: "CHANGE_PASSWORD_REQUEST" });
    const res = await axios.post(apiUrl + "/auth/changepassword", data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    dispatch({ type: "CHANGE_PASSWORD_SUCCESS", payload: res.data });
    navigate("/login")
  } catch (err) {
    dispatch({
      type: "CHANGE_PASSWORD_ERROR",
      payload: err?.response?.data?.messages ?? "forgot password error",
    });
  }
};

