import React, { useState } from 'react'
import './index.css'
import { ImageProfile, ImageSearch } from '../../assets'
import { Navbar, NavProfile, CardUser, CardRecipes, Footer, Pagination } from '../../components'

const Bookmark = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  window.scrollTo(0, 0);
  return (
    <>
      <div className='container-fluid custom-container'>
        <Navbar isLoggedIn={isLoggedIn}/>
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
          <CardRecipes
            image={ImageSearch}
            title='Bomb Chicken'
            ingredient='chicken, dumpling wrap, garlic, spring onion, soy sauce, black sesame seed'
            label='10 Likes - 12 Comment - 3 Bookmark'
          />
          <CardRecipes
            image={ImageSearch}
            title='Bomb Chicken'
            ingredient='chicken, dumpling wrap, garlic, spring onion, soy sauce, black sesame seed'
            label='10 Likes - 12 Comment - 3 Bookmark'
          />
        </div>
      <Pagination />
      </div>
      <Footer />
    </>
  )
}

export default Bookmark
