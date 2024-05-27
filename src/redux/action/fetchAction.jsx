import axios from 'axios';

// const baseUrl= import.meta.env.VITE_BASE_URL;
export const fetchData = (dataType, params) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });
    try {
      const response = await axios.get(`/api/${dataType}`, {
        params:params
      });
      dispatch({ type: 'FETCH_DATA_ALL_SUCCESS', payload: { dataType, data: response.data } });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_FAILURE', payload: error });
    }
  };
};
export const fetchDataById = (dataType, id) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });
    try {
      const response = await axios.get(`/api/${dataType}/${id}`);
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: { dataType, data: response.data } });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_FAILURE', payload: error });
    }
  };
};
export const fetchDataByUserId = (dataType, dataType2, user_id) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });
    try {
      const response = await axios.get(`/api/${dataType}/${dataType2}/${user_id}`);
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: { dataType, data: response.data } });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_FAILURE', payload: error });
    }
  };
};
