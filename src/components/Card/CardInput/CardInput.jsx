import React from 'react'
import './CardInput.css'

const CardInput = ({id, name, text, placeholder, onChange, value}) => {
  return (
    <div>
      <div className='d-flex flex-column gap-1 mb-3'>
        <label htmlFor={id} className='label-data'>{text}</label>
        <input type="text" id={id} name={name} placeholder={placeholder} className='input-data' onChange={onChange} value={value} required/>
      </div>
    </div>
  )
}
const InputPassword = ({id, name, text, placeholder, onChange, value, autoComplete}) => {
  return (
    <div>
      <div className='d-flex flex-column gap-1 mb-3'>
        <label htmlFor={id} className='label-data'>{text}</label>
        <input type="password" id={id} name={name} placeholder={placeholder} className='input-data' onChange={onChange} value={value} autoComplete={autoComplete} required/>
      </div>
    </div>
  )
}

export { CardInput, InputPassword }
