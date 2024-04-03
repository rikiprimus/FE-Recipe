const initialState = {
  data: null,
  comments: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  ErrorMessage: null,
};

const recipeandcommentsGetByIdReducers = (state = initialState, action) => {
  if (action.type === "GET_RECIPESANDCOMMENTSBYID_PENDING") {
    return {
      ...state,
      data: null,
      comments: null,
      isError: false,
      isSuccess: false,
      isLoading: true,
      ErrorMessage: null,
    };
  } else if (action.type === "GET_RECIPESANDCOMMENTSBYID_SUCCESS") {
    return {
      ...state,
      data: action.payload[0].data.data,
      comments: action.payload[1].data.data,
      isError: false,
      isSuccess: true,
      isLoading: false,
      ErrorMessage: null,
    };
  } else if (action.type === "GET_RECIPESANDCOMMENTSBYID_ERROR") {
    return {
      ...state,
      data: null,
      isError: true,
      isSuccess: false,
      isLoading: false,
      ErrorMessage: action.payload,
    };
  } else {
    return state;
  }
};

export default recipeandcommentsGetByIdReducers;
