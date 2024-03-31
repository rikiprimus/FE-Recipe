import axios from 'axios';

const apiUrl = import.meta.env.VITE_BASE_URL;

const fetchRecipes = async (params) => {
  try {
    const response = await axios.get(`${apiUrl}/recipes`, {
      params: params
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchRecipesById = async (endpoint) => {
  try {
    const response = await axios.get(`${apiUrl}/recipes/${endpoint}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const postData = async (data) => {
  try {
    const bodyData = new FormData();

    // Menambahkan setiap kunci-nilai dari objek data ke FormData
    Object.entries(data).forEach(([key, value]) => {
      bodyData.append(key, value);
    });

    const response = await axios.post(`${apiUrl}/recipes`, bodyData);
    console.log(response)
    return response.data;

  } catch (error) {
    throw error;
  }
};



const deleteRecipes = async (endpoint) => {
  try {
    await axios.delete(`${apiUrl}/recipes/${endpoint}`);
  } catch (error) {
    throw error;
  }
};

export { fetchRecipes, fetchRecipesById, postData, deleteRecipes };