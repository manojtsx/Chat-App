import React from 'react'
import FooterHeading from './mini-components/FooterHeading'
import FooterLink from './mini-components/FooterLink'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-pink-500 to-pink-700 flex justify-around'>
        <div>
          <FooterHeading>Contact Us</FooterHeading>
          <p>Chhabdi Barahi, Tanahun</p>
          <p>+977-9816683613</p>
          <p>manojbicte@gmail.com</p>
        </div>
        <div className='flex flex-col'>
          <FooterHeading>Resources</FooterHeading>
          <FooterLink to="/login">Login</FooterLink>
          <FooterLink to="/register">Register</FooterLink>
        </div>
        <div>
          <FooterHeading>Locate Us</FooterHeading>
        </div>
        <div>
          <FooterHeading>Newsletter SignUp</FooterHeading>
        </div>
    </div>
  )
}

export default Footer