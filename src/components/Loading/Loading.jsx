import React from 'react'
import ReactLoading from 'react-loading';
import './index.css'

const Loading = ({ type, color, height, width }) => {
  return (
    <div className='loading'>
      <ReactLoading type={type} color={color} height={height} width={width} />
      <div className='text-loading'>
        Loading Data
      </div>
    </div>
  )
}

export default Loading
