import React from 'react'
import { Link } from 'react-router-dom'
import { ImageProfile } from '../../../assets'
import './CardUser.css'

const CardUser = ({image, name, totalRecipes, dateCreated, likes, comments}) => {
  return (
    <div className='d-flex flex-row justify-content-between'>
        <div className="d-flex flex-row align-items-center justify-content-center" >
          <div className="border-left"></div>
          <Link to="/profile/detail">
            <img src={image} className="image-user" alt="..." />
          </Link>
          <div className="d-flex flex-column ">
            <p className="name-user">{name}</p>
            <Link to='/profile/detail' className='recipe'>{totalRecipes} Recipes</Link>
          </div>
        </div>
        <div className='d-flex flex-column align-items-center justify-content-center'>
          <p className='date mt-3'>{dateCreated}</p>
          {likes && comments && (
            <p className='date'>{likes} Likes - {comments} Comments</p>
          )}
        </div>
      </div>
  )
}

export default CardUser
