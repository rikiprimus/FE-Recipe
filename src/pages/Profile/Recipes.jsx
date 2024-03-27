import React, { useEffect, useState} from 'react'
import './index.css'
import { ImageProfile, ImageSearch } from '../../assets'
import { Navbar, NavProfile, CardUser, CardRecipes, Footer, Pagination } from '../../components'
import { fetchRecipes, deleteRecipes } from '../../api/api'
import { useParams } from 'react-router-dom'

const Recipes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const { id } = useParams
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataBE = async () => {
      try {
        const result = await fetchRecipes('')
        setData(result.data)
        console.log(result.data)
      } catch (error) {
        console.error ('Error fetching data: ', error)
      }
    }
    fetchDataBE()
  }, [])
  
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
        <Navbar isLoggedIn={isLoggedIn} />
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
          {data.map((data, index) => (
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
        <Pagination />
      </div>
      <Footer />
    </>
  )
}

export default Recipes
