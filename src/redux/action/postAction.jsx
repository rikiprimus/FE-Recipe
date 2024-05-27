import axios from 'axios';

const apiUrl = import.meta.env.VITE_BASE_URL;

export const postData = (dataType, data, navigate, to) => async (dispatch, getState) => {
  try {
    dispatch({ type: "POST_DATA_REQUEST" });
    const res = await axios.post(apiUrl + `/${dataType}`, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    dispatch({ type: "POST_DATA_SUCCESS", payload: res.data });
    navigate(to);
  } catch (err) {
    dispatch({
      type: "POST_DATA_ERROR",
      payload: err?.response?.data?.messages ?? "post error",
    });
  }
};