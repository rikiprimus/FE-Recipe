import React, { useEffect, useState } from 'react'
import './index.css'
import { Button, InputPassword } from '../../components'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changePassword } from '../../redux/action/auth'

const ChangePassword = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams();
  const authdata = useSelector((state) => state.login)
  const [alertPassword, setAlertPassword] = useState('')
  const [inputData, setInputData] = useState({
    id: id,
    new_password:"",
    password:""
  })
  useEffect(() => {
    const checkPassword = () => {
      if(inputData.new_password !== '' & inputData.password !== '') {
        if(inputData.new_password !== inputData.password) {
          setAlertPassword("New password & Confirm Password Tidak Sama !")
        } else {
          setAlertPassword('')
        }
      }
    }
    checkPassword()
  }, [inputData])
  
  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  
  console.log(alertPassword)
  console.log(inputData)

  const postData = (event) => {
    event.preventDefault()
    dispatch(changePassword(inputData,navigate))
  }
  window.scrollTo(0, 0);
  return (
    <div className='container-fluid custom-container'>
      <div className='d-flex flex-column justify-content-center align-items-center '>
        <div className="d-flex flex-column gap-3 mb-5 align-items-center">
          <h1 className="title-register">Change Password</h1>
          <p className="description-register" >Change Your Password</p>
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
          <InputPassword 
            id='new_password'
            text="New Password"
            name='new_password'
            placeholder='New Password'
            onChange={onChange}
            autoComplete={"new_password"}
          />
          <InputPassword 
            id='password'
            text="Confirm Password"
            name='password' 
            placeholder='Confirm Password'
            onChange={onChange}
            autoComplete={"password"}
          />
        </div>
        <Button text='Change Password' onClick={postData}/>
      </form>
    </div>
  )
}

export default ChangePassword
