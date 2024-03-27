import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { CardInput, Button } from '../../components'

const PasswordEdit = () => {
  return (
    <div className='container-fluid custom-container'>
      <h1 className='title-page text-center section-gap' style={{marginTop:'150px'}}>Change Your Password Here</h1>
      <form className='container-fluid container-form'>
        <div className='d-flex flex-column justify-content-center gap-2 mb-4'>
          <CardInput
            id='NewPassword'
            name='Old Password' 
            placeholder='Old Password'
          />
          <CardInput 
            id='NewPassword'
            name='New Password' 
            placeholder='New Password'
          />
        </div>
        <Button text='Login'/>
        <h6 className='text-alternative'>Back to edit profile ? 
          <Link to='/profile/edit' className='link'> Click here</Link>
        </h6>
      </form>
    </div>
  )
}

export default PasswordEdit
