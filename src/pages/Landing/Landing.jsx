import React, { useState } from 'react'
import './index.css'
import { Image, Image1, Image2, Image3, Image4, Image5, Image6, ImagePopular, ImageRecipe } from '../../assets'
import { Navbar, NavProfile, CardHome, CardImage, CardTitle, Title, Footer } from '../../components'

const Landing = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <>
      <div className='background-yellow'></div>
      <div className='background-img1'></div>
      <div className='background-img2'></div>
      <Navbar 
        isLoggedIn={isLoggedIn}
      />
      {/* section home start  */}
      <div id="landing" className="container-fluid custom-container mb-5 mb-md-0">
        <div className="d-flex flex-column justify-content-between align-items-center flex-md-row">
          <CardTitle placeholder='search restaurant, food' />
          <img src={Image} alt="..." className="image-first" />
        </div>
      </div>
      {/* section home end  */}
      {/* section popular start  */}
      <div className='section-gap'>
        <CardHome 
            id='popular'
            title='Popular For You' 
            subtitle='Healthy Bone Broth Ramen (Quick & Easy)' 
            image={ImagePopular} 
            description='Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!' 
            txtButton='Learn More' 
            />
      </div>
      {/* section popular end  */}
      {/* section new recipe start  */}
      <div className='section-gap'>
        <CardHome 
          title='New Recipe' 
          subtitle='Healthy Bone Broth Ramen (Quick & Easy)' 
          image={ImageRecipe} 
          description='Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!' 
          txtButton='Learn More'
          />
      </div>
      {/* section new recipe end  */}
      {/* section new recipe start  */}
      <div className='container-fluid custom-container section-gap' >
        <div className='mb-4'>
          <Title title='Popular Recipe'/>
        </div>
        <div>
          <div className='row'>
            <div className="col-md-4 mb-4 position-relative">
              <CardImage 
                image={Image1}
                title='Chicken Kare'
              />
            </div>
            <div className="col-md-4 mb-4 position-relative">
              <CardImage 
                image={Image2}
                title='Bomb Chicken'
              />
            </div>
            <div className="col-md-4 mb-4 position-relative">
              <CardImage 
                image={Image3}
                title='Bomb Chicken'
              />
            </div>
            <div className="col-md-4 mb-4 position-relative">
              <CardImage 
                image={Image4}
                title='Bomb Chicken'
              />
            </div>
            <div className="col-md-4 mb-4 position-relative">
              <CardImage 
                image={Image5}
                title='Bomb Chicken'
              />
            </div>
            <div className="col-md-4 mb-4 position-relative">
              <CardImage 
                image={Image6}
                title='Bomb Chicken'
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Landing
