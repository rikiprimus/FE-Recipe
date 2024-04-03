import React, { useState } from 'react'
import './index.css'
import { CardInput, Button, ButtonBack, Checkbox, PopRegister, PopLogout, PopDone } from '../../components'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authRegister } from '../../redux/action/auth'

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const authdata = useSelector((state) => state.register)
  const [isChecked, setIsChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const [inputData, setInputData] = useState({
    name:"",
    phone:"087337482313",
    email:"",
    password:""
  })
  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData)
  };

  const postData = (event) => {
    event.preventDefault()
    let data = inputData
    dispatch(authRegister(data, navigate))
    setIsOpen(true)
  }

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleClose = () => {
    navigate('/login')
  }
  window.scrollTo(0, 0);
  return (
    <div className='container-fluid custom-container'>
      <div>
        <ButtonBack />
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center '>
        <h1 className='title-register mb-5'>Recipe...</h1>
        <div className="d-flex flex-column gap-3 mb-5 align-items-center">
          <h1 className="title-register">Let's Get Started !</h1>
          <p className="description-register" >Create new account to access all features</p>
        </div>
      </div>
      <form className='container-fluid container-form'>
        {authdata.isLoading ? 
          <div className="alert alert-primary text-center">loading ...</div>
        : null}
        {authdata.isError ? 
          <div className="alert alert-danger text-center">Login Failed : {authdata.ErrorMessage ?? "-"}</div>
        : null}
        <div className='d-flex flex-column justify-content-center gap-2 mb-5'>
          <CardInput 
            text='Name'
            id='name'
            name='name' 
            placeholder='Name'
            onChange={onChange}
          />
          <CardInput 
            text='Email'
            id='email'
            name='email' 
            placeholder='Email'
            onChange={onChange}
          />
          <CardInput
            text='Password'
            id='password'
            name='password' 
            placeholder='Password'
            onChange={onChange}
          />
          <Checkbox checked={isChecked} onChange={handleCheckboxChange} className='mb-5'/>
        </div>
        <Button text='Register Account' onClick={postData}/>
        <h6 className='text-alternative'>Already have account ? 
          <Link to='/login' className='link'> Log in Here</Link>
        </h6>
      </form>
      {authdata.isSuccess && isOpen === true ? (
        <PopRegister onClick={() => handleClose()} />
      ) : null}
    </div>
  )
}

export default Register
