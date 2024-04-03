import React, { useEffect, useState} from 'react'
import './index.css'
import { ImageProfile, ImageSearch } from '../../assets'
import { Navbar, NavProfile, CardUser, CardRecipes, Footer, Pagination } from '../../components'
import { fetchRecipes, deleteRecipes } from '../../api/api'
import { useParams } from 'react-router-dom'
import { getRecipes } from "../../redux/action/recipes";
import { useDispatch, useSelector } from "react-redux";

const Recipes = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const checkData  = useSelector((state) => state.recipes_get);
  const recipesData  = useSelector((state) => state.recipes_get.data);
  const paginationData  = useSelector((state) => state.recipes_get.pagination);
  const [params, setParams] = useState({
    search: "545f6b80-a0aa-4f24-9f82-f71dca1ca2eb",
    searchBy: "users_id",
    sort: "ASC",
    sortBy: "createdAt",
    limit: 5,
    page: 1,
  });

  useEffect(() => {
    dispatch(getRecipes(params));
  }, [dispatch, params])

  const handlePrevious = () => {
    if (paginationData.page_prev !== 0) {
      setParams({ ...params, page: params.page - 1 });
    }
    window.scrollTo({ top: 550, behavior: 'smooth' });
  }
  const handleNext = () => {
    if (paginationData.page_next !== 0) {
      setParams({ ...params, page: params.page + 1 });
    }
    window.scrollTo({ top: 550, behavior: 'smooth' });
  }
  
  const deleteDataRecipes = async (id) => {
    try {
      await deleteRecipes(id)
      console.log('Data successfully deleted');
      window.location.reload();
    } catch (error) {
      console.error ('Error deleting data: ', error)
    }
  }

  return (
    <>
      <div className='container-fluid custom-container'>
        <Navbar />
        <div className='mb-5'>
          <CardUser
            image={ImageProfile}
            name='Ayunda'
            totalRecipes='10'
            dateCreated='10 November 2020'
          />
        </div>
        <div className='mb-5'>
          <NavProfile />
        </div>
        <div className='d-flex flex-column gap-5'>
          {recipesData?.map((data, index) => (
            <div key={index}>
              <CardRecipes
                to={`/recipes/detail/${data.id}`}
                edit={`/recipes/edit/${data.id}`}
                image={data.photo}
                title={data.title}
                ingredient={data.ingredient}
                label='10 Likes - 12 Comment - 3 Bookmark'
                createdphoto={data.photo_profile}
                createdby={data.name}
                onClick={() => deleteDataRecipes(data.id)}
              />
            </div>
          ))}
          
        </div>
        <Pagination 
            paginationData={paginationData} 
            handleNext={handleNext} 
            handlePrevious={handlePrevious} 
          /> 
      </div>
      <Footer />
    </>
  )
}

export default Recipes
