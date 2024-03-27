import React from 'react'
import Button from '../Button/Button'
import './index.css'

const Pagination = () => {
  return (
    <div>
      <div className="d-flex flex-row gap-5 justify-content-center align-items-center mt-5">
        <h3 className='pagination'>Show 1-5 from 20</h3>
        <Button text='Next' />
      </div>
    </div>
  )
}

export default Pagination
