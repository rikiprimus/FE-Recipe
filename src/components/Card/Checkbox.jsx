import React from 'react'
import { BsCheckSquareFill, BsCheckSquare } from "react-icons/bs";

const Checkbox = ({ checked, onChange}) => {
  
  return (
    <div className='d-flex flex-row '>
      {checked ? (
        <BsCheckSquareFill onClick={onChange} className='checkbox-fill' />
      ) : (
        <BsCheckSquare onClick={onChange} className='checkbox' />
      )}
      <span className='checkbox-text'>I agree to terms & conditions</span>
    </div>
  )
}

export default Checkbox