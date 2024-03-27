import React from 'react'

const CardImage = ({ image, title }) => {
  return (
    <div>
      <img src={image} alt="..." className="img-fluid"/>
      <p className="image-title">{title}</p>
    </div>
  )
}

export default CardImage
