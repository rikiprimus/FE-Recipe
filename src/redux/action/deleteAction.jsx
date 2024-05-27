import axios from 'axios';

// const baseUrl= import.meta.env.VITE_BASE_URL;
export const deleteData = (dataType, id) => {
  return async (dispatch) => {
    dispatch({ type: 'DELETE_DATA_REQUEST' });
    try {
      const response = await axios.delete(`/api/${dataType}/${id}`);
      dispatch({ type: 'DELETE_DATA_SUCCESS', payload: { dataType, data: response.data } });
    } catch (error) {
      dispatch({ type: 'DELETE_DATA_FAILURE', payload: error });
    }
  };
};