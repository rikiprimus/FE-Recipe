import React from 'react'
import './CardRecipes.css'
import { Link, useLocation } from 'react-router-dom'
import ButtonCard from '../../Button/ButtonCard'
// import { ImageEdit } from '../../../assets'

const CardRecipes = ({to, image, title, ingredient, label, createdphoto, createdby, edit, onClick }) => {
  const location = useLocation();

  return (
    <>
      <div className="d-flex flex-column flex-md-row gap-2 gap-md-5 container-card">
        <img src={image} alt="..." className='image-detail' />
        <div className="d-flex flex-column gap-1 justify-content-center">
          <Link to={to} className='title-card'>{title}</Link>
          {/* <h1 className='title-card'>{title}</h1> */}
          <p className="desc-ingredient fs-4" >Ingredients: <br/> {ingredient}</p>
          <label className="label-card p-2 rounded text-center" >{label}</label>
          <div className='mb-3 my-md-3'>
            {location.pathname === '/profile/bookmark' ? (
              <ButtonCard text='Delete From Bookmark' className='button-r'/>
            ) : location.pathname === '/profile/recipes' ? (
              <div className='d-flex flex-row gap-3'> 
                <ButtonCard text='Edit Menu' className='button-b' edit={edit}/>
                <ButtonCard text='Delete menu' className='button-r' onClick={onClick}/>
              </div>
            ) : (
              <div className='d-flex flex-row align-items-center gap-3 mt-2 mt-md-4'>
                <img src={createdphoto} alt="..." className='image-profile' />
                <p className='createdby'>{createdby}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default CardRecipes
