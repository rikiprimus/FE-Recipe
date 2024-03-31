import React, { useState } from 'react'
import './index.css'
import { CardInput, Button } from '../../components'
import { Link } from 'react-router-dom'
import ButtonBack from '../../components/Button/ButtonBack'

const ForgotPassowrd = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  window.scrollTo(0, 0);
  return (
    <div className='container-fluid custom-container'>
      <ButtonBack />
      <div className='d-flex flex-column justify-content-center align-items-center '>
        <h1 className='title-register mb-5'>Recipe...</h1>
        <div class="d-flex flex-column gap-3 mb-5 align-items-center">
          <h1 class="title-register">Welcome</h1>
          <p class="description-register" >Log in into your exiting account</p>
        </div>
      </div>
      <form className='container-fluid container-form'>
        <div className='d-flex flex-column justify-content-center gap-2 mb-4'>
          <CardInput 
            id='Email'
            name='Email' 
            placeholder='Email'
          />
        </div>
        <Button text='Send OTP'/>
        <h6 className='text-alternative'>Login instead ? 
          <Link to='/login' className='link'> Click here</Link>
        </h6>
      </form>
    </div>
  )
}

export default ForgotPassowrd
