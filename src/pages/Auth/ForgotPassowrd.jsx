import React, { useState } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { CardInput, Button } from '../../components'
import { Link } from 'react-router-dom'
import ButtonBack from '../../components/Button/ButtonBack'
import { useDispatch, useSelector } from 'react-redux'
import { forgotPassowrd } from '../../redux/action/auth'

const ForgotPassowrd = () => {
  const dispatch = useDispatch()
  const checking = useSelector((state) => state.forgotPassowrd)
  const [inputData, setInputData] = useState({
    email:""
  })

  
  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData)
  };
  
  const sendEmail = (event) => {
    event.preventDefault()
    dispatch(forgotPassowrd(inputData))
  };
  console.log(checking?.ErrorMessage)
  window.scrollTo(0, 0);
  return (
    <div className='container-fluid custom-container'>
      <ButtonBack />
      {/* {checking.isError === "true" ? (

      ) : (

      )} */}
      <div className='d-flex flex-column justify-content-center align-items-center '>
        <div className="d-flex flex-column gap-3 mb-5 align-items-center">
          <h1 className="title-register">Forgot Password</h1>
          <p className="description-register" >Send to Your Email</p>
        </div>
      </div>
      <form className='container-fluid container-form'>
        <div className='d-flex flex-column justify-content-center gap-2 mb-4'>
          <CardInput 
            id='Email'
            name='email' 
            placeholder='Email'
            onChange={onChange}
          />
        </div>
        <Button text='Send Email' onClick={sendEmail}/>
      </form>
    </div>
  )
}

export default ForgotPassowrd
