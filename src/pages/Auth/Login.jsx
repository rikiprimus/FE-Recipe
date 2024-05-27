import React, { useState } from 'react'
import './index.css'
import { CardInput, Button, ButtonBack } from '../../components'
import { Link, useNavigate } from 'react-router-dom'
import { authLogin } from "../../redux/action/auth"
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const authdata = useSelector((state) => state.login)
  const [inputData, setInputData] = useState({
    email:"",
    password:""
  })
  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const postData = (event) => {
    event.preventDefault()
    let data = inputData
    dispatch(authLogin(data,navigate))
  }
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
        {authdata.isLoading ? 
          <div className="alert alert-primary text-center">loading ...</div>
        : null}
        {authdata.isError ? 
          <div className="alert alert-danger text-center">Login Failed : {authdata.ErrorMessage ?? "-"}</div>
        : null}
        <div className='d-flex flex-column justify-content-center gap-2 mb-4'>
          <CardInput 
            id='email'
            text="Email"
            name='email' 
            placeholder='Email'
            onChange={onChange}
          />
          <CardInput 
            id='password'
            text="Password"
            name='password' 
            placeholder='Password'
            onChange={onChange}
          />
        </div>
        <Button text='Login' onClick={postData}/>
        <h6 className='text-alternative'>Forgot your Password ? 
          <Link to='/forgot-password' className='link'> Click here</Link>
        </h6>
        <h6 className='text-alternative margin-forlink'>Don't have an account ? 
          <Link to='/register' className='link'> Sign Up Here</Link>
        </h6>
      </form>
    </div>
  )
}

export default Login
