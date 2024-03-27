import React from 'react'
import './Button.css'

const Button = ({text}) => {
  return (
    <div>
      <button type='submit' className='button-y'>{text}</button>
    </div>
  )
}

export default Button
