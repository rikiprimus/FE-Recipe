import React from 'react'
import './ButtonCard.css'
import { Link } from 'react-router-dom'

const ButtonCard = ({text, className, edit, onClick}) => {
  return (
    <div>
      <Link to={edit}>
        <button className={`${className}`} onClick={onClick}>{text}</button>
      </Link>
    </div>
  )
}

export default ButtonCard
