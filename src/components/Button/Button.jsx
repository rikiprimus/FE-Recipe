import React from 'react'
import './Button.css'

const Button = ({text, onClick}) => {
  return (
    <div>
      <button type='submit' className='button-y' onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button
