import React, { useEffect, useState} from 'react'
import './index.css'
import { ImageProfile, ImageSearch } from '../../assets'
import { Navbar, NavProfile, CardUser, CardRecipes, Footer, Pagination } from '../../components'
import { fetchRecipes, deleteRecipes } from '../../api/api'
import { useParams } from 'react-router-dom'

const Recipes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const { id } = useParams();
  const [pagination, setPagination] = useState([]);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchDataBE = async () => {
      try {
        const params = {
          search: '545f6b80-a0aa-4f24-9f82-f71dca1ca2eb', //ini
          searchBy: 'users_id',
          sort: 'ASC',
          sortBy: 'createdAt',
          limit: 5,
          page: page//ini
        }
        const result = await fetchRecipes(params)
        console.log(page)
        setData(result.data)
        setPagination(result.pagination)
        console.log(result.data)
        console.log(result.pagination)
      } catch (error) {
        console.error ('Error fetching data: ', error)
      }
    }
    fetchDataBE()
  }, [page])

  const handlePrevious = () => {
    setPage(page - 1)
    window.scrollTo({ top: 340, behavior: 'smooth' });
  }
  const handleNext = () => {
    setPage(page + 1)
    window.scrollTo({ top: 340, behavior: 'smooth' });
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
        <Pagination pagination={pagination} handleNext={handleNext} handlePrevious={handlePrevious} />
      </div>
      <Footer />
    </>
  )
}

export default Recipes
