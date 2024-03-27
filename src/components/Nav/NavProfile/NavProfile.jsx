import React, { useState } from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom';
import './NavProfile.css'

const NavProfile = () => {
  const location = useLocation();
  const isActive = (pathname) => location.pathname === pathname;

  return (
    <>
      <div className="d-flex flex-row gap-100px align-items-start">
        <Link 
          to="/profile/recipes" 
          className={`navbar-profile fs-2 ${isActive('/profile/recipes') ? 'opacity-100' : 'opacity-50'}`}
        >
          Recipes
        </Link>
        <Link 
          to="/profile/bookmark" 
          className={`navbar-profile fs-2 ${isActive('/profile/bookmark') ? 'opacity-100' : 'opacity-50'}`}
        >
          Bookmark
        </Link>
        <Link 
          to="/profile/likes" 
          className={`navbar-profile fs-2 ${isActive('/profile/likes') ? 'opacity-100' : 'opacity-50'}`}
        >
          Likes
        </Link>
      </div>
      <div className="line-nav"></div>
    </>
  )
}

export default NavProfile
