import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='container-fluid footer'>
      <div className="footer-gap text-center">
        <h1 className="footer-title">Eat, Cook, Repeat</h1>
        <p className="footer-desc">Share your best recipe by uploading here !</p>
      </div>
      <div className="d-flex flex-row justify-content-center">
        <ul className="footer-list">Product</ul>
        <ul className="footer-list">Company</ul>
        <ul className="footer-list">Learn More</ul>
        <ul className="footer-list">Get in Touch</ul>
      </div>
    </footer>
  )
}

export default Footer
