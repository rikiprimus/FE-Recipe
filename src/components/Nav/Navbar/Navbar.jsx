import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { ImageProfile } from '../../../assets'

const Navbar = ({isLoggedIn}) => {
  return (
    <div>
      {isLoggedIn ? (
        <div className='container-fluid custom-container'>
          <nav id="navbar" className="d-flex flex-row justify-content-between">
            <div className="d-flex flex-row gap-2 gap-md-5">
              <Link to="/" className="navbar nav-user">Home</Link>
              <Link to="/recipes/add" className="navbar nav-user">Add Recipe</Link>
              <Link to="/recipes/search" className="navbar nav-user">Search Menu</Link>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center" >
              <div className="border-left"></div>
              <Link to="/profile/recipes">
                <img src={ImageProfile} className="image-profile" alt="..." />
              </Link>
              <div className="d-flex flex-column">
                <Link to='/profile/edit' className="name-profile">Ayudia</Link>
                <Link to='/logout' className='logout'>Logout</Link>
              </div>
            </div>
          </nav>
        </div>
      ) : (
        // Jika pengguna belum login, tampilkan navbar atas
        <header className='container-fluid custom-container'>
          <nav className='d-flex flex-row gap-5'>
            <Link to="/register" className='navbar nav-user fs-4'>Register</Link>
            <a href='/login' className='navbar nav-user fs-4'>Login</a>
            <a href='/recipes/search' className='navbar nav-user fs-4'>Search Menu</a>
          </nav>
        </header>
      )}
    </div>
  )
}

export default Navbar
