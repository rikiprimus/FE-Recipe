import axios from "axios";

const apiUrl = import.meta.env.VITE_BASE_URL;

export const getRecipes = (params) => async (dispatch, state) => {
  try {
    dispatch({ type: "GET_RECIPES_PENDING" });
    const res = await axios.get(`${apiUrl}/recipes`, {
      params: params
    });
    dispatch({ type: "GET_RECIPES_SUCCESS", payload: res.data });
  } catch (err) {
    console.log(err?.message ? err.message : err);
    dispatch({ type: "GET_RECIPES_ERROR" });
  }
};

export const getRecipesAndCommentsById = (id) => async (dispatch, getState) => {
    try {
      dispatch({ type: "GET_RECIPESANDCOMMENTSBYID_PENDING" });
      const res = await Promise.all([
        axios.get(`${apiUrl}/recipes/${id}`),
        axios.get(`${apiUrl}/comment/recipes/${id}`)
      ])
      dispatch({ type: "GET_RECIPESANDCOMMENTSBYID_SUCCESS", payload: res });
    } catch (err) {
      console.log(err?.message ? err.message : err);
      dispatch({ type: "GET_RECIPESANDCOMMENTSBYID_ERROR" });
    }
  };

export const getRecipesById = (id) => async (dispatch, getState) => {
    try {
      dispatch({ type: "GET_RECIPESBYID_PENDING" });
      const res = await axios.get(`${apiUrl}/recipes/${id}`);
      dispatch({ type: "GET_RECIPESBYID_SUCCESS", payload: res.data });
    } catch (err) {
      console.log(err?.message ? err.message : err);
      dispatch({ type: "GET_RECIPESBYID_ERROR" });
    }
  };

export const postRecipes = (data, navigate) => async (dispatch, getState) => {
  try {
    dispatch({ type: "POST_RECIPES_PENDING" });

    const bodyData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      bodyData.append(key, value);
    });
    
    const res = await axios.post(`${apiUrl}/recipes`, bodyData);
    console.log("res");
    console.log(res);
    dispatch({ type: "POST_RECIPES_SUCCESS", payload: res });
    navigate("/recipes/search")
  } catch (err) {
    console.log("err");
    console.log(err?.message ? err.message : err);
    dispatch({
      type: "POST_RECIPES_ERROR",
      payload: err?.response?.data?.message ?? "post recipes error",
    });
  }
};
export const updateRecipes = (id, data, navigate) => async (dispatch, getState) => {
  try {
    dispatch({ type: "UPDATE_RECIPES_PENDING" });

    const bodyData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      bodyData.append(key, value);
    });
    console.log(bodyData)
    
    const res = await axios.put(`${apiUrl}/recipes/${id}`, bodyData );
    console.log("res");
    console.log(res);
    dispatch({ type: "UPDATE_RECIPES_SUCCESS", payload: res });
    navigate("/recipes/search")
  } catch (err) {
    console.log("err");
    console.log(err?.message ? err.message : err);
    dispatch({
      type: "UPDATE_RECIPES_ERROR",
      payload: err?.response?.data?.message ?? "update recipes error",
    });
  }
};
