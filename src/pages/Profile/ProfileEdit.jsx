import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { ImageProfile } from '../../assets'
import { Navbar, CardInput, Button } from '../../components'

const ProfileEdit = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  return (
    <div className='container-fluid custom-container'>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className='d-flex flex-column align-items-center'>
        <img src={ImageProfile} alt='...' className='profile-edit rounded-circle mb-3' />
        <label htmlFor='updateImage' className='update-image'>Change Profile Picture</label>
        <input type='file' id='updateImage' className='invisible'/>
      </div>
      <form className='container-fluid container-form'>
        <div className='d-flex flex-column justify-content-center gap-2 mb-4'>
          <CardInput 
            id='Name'
            name='Name' 
            placeholder='Name'
          />
          <CardInput 
            id='Email'
            name='Email' 
            placeholder='Email'
          />
        </div>
        <Button text='Update Profile'/>
        <h6 className='text-alternative margin-forlink'>Change Password ? 
          <Link to='/profile/changepassword' className='link'> Click Here</Link>
        </h6>
      </form>
    </div>
  )
}

export default ProfileEdit
