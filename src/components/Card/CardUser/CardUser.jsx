import React from 'react'
import { Link } from 'react-router-dom'
import { ImageProfile } from '../../../assets'
import './CardUser.css'

const CardUser = ({image, name, totalRecipes, dateCreated, likes, comments}) => {
  return (
    <div className='d-flex flex-row justify-content-between'>
        <div className="d-flex flex-row align-items-center justify-content-center" >
          <div className="border-left"></div>
          <Link to="/profile/edit">
            <img src={image} className="image-user rounded-circle" alt="..." />
          </Link>
          <div className="d-flex flex-column ">
            <Link to="/profile/edit" className="name-user">{name}</Link>
            <Link to="/profile/edit" className='recipe'>{totalRecipes} Recipes</Link>
          </div>
        </div>
        <div className='d-flex flex-column align-items-center justify-content-center'>
          <p className='date mt-3'>{dateCreated}</p>
          {likes && !comments ? (
            <p className='date'>{likes} Likes - 0 Comments</p>
          ) : comments && !likes ? (
            <p className='date'>0 Likes - {comments} Comments</p>
          ) : (
            <p className='date'>{likes} Likes - {comments} Comments</p>
          )}
          {/* {likes && comments && (
            <p className='date'>{likes} Likes - {comments} Comments</p>
          )} */}
        </div>
      </div>
  )
}

export default CardUser
