import React from 'react'
import './CardTitle.css'
import { BsSearch } from "react-icons/bs";

const CardTitle = ({placeholder}) => {
  return (
    <div>
      <div className="d-flex flex-column gap-3">
        <h1 className="title-text">Discover Recipe <br/> & Delicious Food</h1>
        <div className='position-relative'>
          <BsSearch className="search-icon" />
          <input type="text" className="input-box" placeholder={placeholder} />
        </div>
      </div>
    </div>
  )
}

export default CardTitle
