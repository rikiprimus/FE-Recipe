import React from 'react'
import './index.css'
import Button from "../Button/Button";
import { Link } from 'react-router-dom';

const PopDone = ({onClick}) => {
  return (
    <>
      <div className="popup">
        <div className="d-flex flex-column gap-4 popup-content">
          <h2 className="popup-title">Account has been set up</h2>
          <p className="popup-desc">Account activated successfully, please login</p>
          <Link to='/login' >
            <Button text="OK" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default PopDone
