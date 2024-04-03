const initialState = {
  data: null,
  pagination: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  ErrorMessage: null,
};

const recipeGetReducers = (state = initialState, action) => {
  if (action.type === "GET_RECIPES_PENDING") {
    return {
      ...state,
      data: null,
      pagination: null,
      isError: false,
      isSuccess: false,
      isLoading: true,
      ErrorMessage: null,
    };
  } else if (action.type === "GET_RECIPES_SUCCESS") {
    return {
      ...state,
      data: action.payload.data,
      pagination: action.payload.pagination,
      isError: false,
      isSuccess: true,
      isLoading: false,
      ErrorMessage: null,
    };
  } else if (action.type === "GET_RECIPES_ERROR") {
    return {
      ...state,
      data: null,
      pagination: null,
      isError: true,
      isSuccess: false,
      isLoading: false,
      ErrorMessage: action.payload,
    };
  } else {
    return state;
  }
};

export default recipeGetReducers;
