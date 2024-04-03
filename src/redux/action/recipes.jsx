import axios from "axios";

const apiUrl = import.meta.env.VITE_BASE_URL;

export const getRecipes = (page, search) => async (dispatch, state) => {
  try {
    dispatch({ type: "GET_RECIPES_PENDING" });
    const res = await axios.get(`${apiUrl}/recipes`, {
      params: {
        search: search,
        sort: 'ASC',
        sortBy: 'createdAt',
        limit: 5,
        page: page
      },
    });
    dispatch({ type: "GET_RECIPES_SUCCESS", payload: res.data });
  } catch (err) {
    console.log(err?.message ? err.message : err);
    dispatch({ type: "GET_RECIPES_ERROR" });
  }
};

export const getRecipesAndCommentsById = () => async (dispatch, getState, id) => {
    try {
      dispatch({ type: "GET_MENU&COMMENTSBYID_PENDING" });
      const [recipesRes, commentsRes] = await Promise.all([
        axios.get(`${apiUrl}/recipes/${id}`),
        axios.get(`${apiUrl}/comment/recipes/${id}`)
      ])
      const recipeData = recipesRes.data;
      const commentsData = commentsRes.data;
      dispatch({ type: "GET_MENU_SUCCESS", payload: { recipeData, commentsData} });
    } catch (err) {
      console.log(err?.message ? err.message : err);
      dispatch({ type: "GET_MENU_ERROR" });
    }
  };

// export const postMenu = (data, navigate) => async (dispatch, getState) => {
//   try {
//     let token = getState().auth.data.token;
//     dispatch({ type: "POST_MENU_PENDING" });
//     const res = await axios.post(base_url + "/recipes", data, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     console.log("res");
//     console.log(res);
//     if (res.data.code)
//       dispatch({ type: "POST_MENU_SUCCESS", payload: res.data });
//     navigate("/menu");
//   } catch (err) {
//     console.log("err");
//     console.log(err);
//     console.log(err?.message ? err.message : err);
//     dispatch({
//       type: "POST_MENU_ERROR",
//       payload: err?.response?.data?.message ?? "post menu error",
//     });
//   }
// };
