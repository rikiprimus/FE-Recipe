import React, { useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { ImageProfile } from '../../../assets'
import { useSelector } from 'react-redux'

const Navbar = ({}) => {
  const navigate = useNavigate();
  const authdata = useSelector((state) => state.login.data)
  const logout = () => {
    localStorage.clear()
    navigate("/login"); 
  };
  console.log(authdata)
  return (
    <div>
      {authdata ? (
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
                <img src={authdata.data.photo_profile} className="image-profile" alt="..." />
              </Link>
              <div className="d-flex flex-column">
                <Link to="/profile/edit" className="name-profile">{authdata.data.name}</Link>
                <button className="logout" onClick={() => logout()}>Logout</button>
              </div>
            </div>
          </nav>
        </div>
      ) : (
        // Jika pengguna belum login, tampilkan navbar atas
        <header className='container-fluid custom-container'>
          <nav className='d-flex flex-row gap-5'>
            <Link to="/register" className='navbar nav-user fs-4'>Register</Link>
            <Link to="/login" className='navbar nav-user fs-4'>Login</Link>
            <Link to="/recipes/search" className='navbar nav-user fs-4'>Search Menu</Link>
          </nav>
        </header>
      )}
    </div>
  )
}

export default Navbar
