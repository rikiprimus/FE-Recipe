import React from 'react'
import './CardInput.css'

const CardInput = ({id, name, text, placeholder, onChange}) => {
  return (
    <div>
      <div className='d-flex flex-column gap-1 mb-3'>
        <label htmlFor={id} className='label-data'>{text}</label>
        <input type="text" id={id} name={name} placeholder={placeholder} className='input-data' onChange={onChange} required/>
      </div>
    </div>
  )
}

export default CardInput
