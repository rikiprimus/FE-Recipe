import React from 'react'
import './CardTitle.css'
import { BsSearch } from "react-icons/bs";
import Button from '../../Button/Button';

const CardTitle = ({placeholder}) => {
  return (
    <div>
      <div className="d-flex flex-column gap-3">
        <h1 className="title-text">Discover Recipe <br/> & Delicious Food</h1>
        <div className='position-relative d-flex flex-column gap-2 flex-md-row align-items-center'>
          <BsSearch className="search-icon" />
          <input type="text" className="input-box" placeholder={placeholder} />
          <Button text='Search' />
        </div>
      </div>
    </div>
  )
}

export default CardTitle
