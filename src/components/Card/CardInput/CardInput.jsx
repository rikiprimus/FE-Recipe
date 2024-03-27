import React from 'react'
import './CardInput.css'

const CardInput = ({id, name, placeholder}) => {
  return (
    <div>
      <div className='d-flex flex-column gap-1 mb-3'>
        <label htmlFor={id} className='label-data'>{name}</label>
        <input type="text" id={id} name='inputData' placeholder={placeholder} className='input-data'/>
      </div>
    </div>
  )
}

export default CardInput
