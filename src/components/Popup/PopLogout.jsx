import React from 'react'
import './index.css'
import Button from "../Button/Button";
import ButtonCard from '../Button/ButtonCard';

const PopLogout = ({onClick}) => {
  return (
    <>
      <div className="popup">
        <div className="d-flex flex-column gap-5 popup-content">
          <h2 className="popup-title">You want to logout?</h2>
          <div className='d-flex flex-column gap-2'>
            <Button text="Yes" onClick={onClick} />
            <ButtonCard text="Cancel" onClick={onClick} className='button-grey'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopLogout
