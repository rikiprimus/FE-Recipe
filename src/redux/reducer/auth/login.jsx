const initialState = {
  data: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  ErrorMessage: null,
};

const loginReducers = (state = initialState, action) => {
  if (action.type === "POST_LOGIN_PENDING") {
    return {
      ...state,
      data: null,
      isError: false,
      isSuccess: false,
      isLoading: true,
      ErrorMessage: null,
    };
  } else if (action.type === "POST_LOGIN_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isError: false,
      isSuccess: true,
      isLoading: false,
      ErrorMessage: null,
    };
  } else if (action.type === "POST_LOGIN_ERROR") {
    return {
      ...state,
      data: null,
      isError: true,
      isSuccess: false,
      isLoading: false,
      ErrorMessage: action.payload,
    };
  } else if (action.type === "POST_LOGOUT") {
    return {
      ...state,
      data: null,
      isError: false,
      isSuccess: false,
      isLoading: false,
      ErrorMessage: null,
    };
  } else {
    return state;
  }
};

export default loginReducers;