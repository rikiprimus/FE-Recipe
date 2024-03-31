import React, { useState } from 'react'
import './index.css'
import { CardInput, Button, ButtonBack } from '../../components'
import { Link } from 'react-router-dom'

const Login = () => {
  // const [isChecked, setIsChecked] = useState(false);

  // const handleCheckboxChange = () => {
  //   setIsChecked(!isChecked);
  // };
  window.scrollTo(0, 0);
  return (
    <div className='container-fluid custom-container'>
      <ButtonBack />
      <div className='d-flex flex-column justify-content-center align-items-center '>
        <h1 className='title-register mb-5'>Recipe...</h1>
        <div className="d-flex flex-column gap-3 mb-5 align-items-center">
          <h1 className="title-register">Welcome</h1>
          <p className="description-register" >Log in into your exiting account</p>
        </div>
      </div>
      <form className='container-fluid container-form'>
        <div className='d-flex flex-column justify-content-center gap-2 mb-4'>
          <CardInput 
            id='Email'
            name='Email' 
            placeholder='Email'
          />
          <CardInput 
            id='Password'
            name='Password' 
            placeholder='Password'
          />
        </div>
        <Button text='Login'/>
        <h6 className='text-alternative'>Forgot your Password ? 
          <Link to='/forgotpassword' className='link'> Click here</Link>
        </h6>
        <h6 className='text-alternative margin-forlink'>Don't have an account ? 
          <Link to='/register' className='link'> Sign Up Here</Link>
        </h6>
      </form>
    </div>
  )
}

export default Login
