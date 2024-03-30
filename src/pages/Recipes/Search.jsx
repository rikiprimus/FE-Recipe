import React, { useEffect, useState } from 'react'
import { ImageRecipe, ImageProfile } from '../../assets'
import { Navbar, Footer, Button, ButtonCard, CardTitle, CardRecipes, Pagination } from '../../components'
import { fetchRecipes } from '../../api/api'

const Search = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
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

  return (
    <>
      <div className='container-fluid custom-container'>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className="mt-5 mb-5" >
        <div className="search-box d-flex flex-column mb-5" >
          <CardTitle placeholder='Search by title' />
          <div className="d-flex flex-row gap-2 align-items-center my-4">
            <ButtonCard text='New' className='button-y2' />
            <ButtonCard text='Popular' className='button-y2' />
            <ButtonCard text='Vegetarian' className='button-g' />
            <ButtonCard text='Breakfast' className='button-g' />
          </div>
        </div>
        
        <div className="d-flex flex-column gap-5 ">
          {data.map((data, index) => (
            <div key={index}>
              <CardRecipes
                to={`/recipes/detail/${data.id}`}
                image={data.photo}
                title={data.title}
                ingredient={data.ingredient}
                label='10 Likes - 12 Comment - 3 Bookmark'
                createdphoto={data.photo_profile}
                createdby={data.name}
              />
            </div>
          ))}
          
        </div>
        <Pagination />
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Search
