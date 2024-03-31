import React from 'react'
import './index.css'
import Button from "../Button/Button";

const PopPassword = () => {
  return (
    <>
      <div className="popup">
        <div className="d-flex flex-column gap-4 popup-content">
          <h2 className="popup-title">Password has been updated</h2>
          <p className="popup-desc">please login again</p>
          <Button text="OK" onClick={onClick} />
        </div>
      </div>
    </>
  )
}

export default PopPassword
