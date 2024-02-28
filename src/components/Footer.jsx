import React from 'react'
import FooterHeading from './mini-components/FooterHeading'
import FooterLink from './mini-components/FooterLink'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-pink-500 to-pink-700 flex justify-around'>
        <div className='flex flex-col text-white'>
          <FooterHeading>Contact Us</FooterHeading>
          <p className='text-sm'>Chhabdi Barahi, Tanahun</p>
          <p className='text-sm'>+977-9816683613</p>
          <p className='text-sm'>manojbicte@gmail.com</p>
          <FooterHeading>Social Links</FooterHeading>
          <div>
            <FooterLink to="/"></FooterLink>
            <FooterLink to="/"></FooterLink>
            <FooterLink to="/"></FooterLink>
          </div>
        </div>
        <div className='flex flex-col'>
          <FooterHeading>Resources</FooterHeading>
          <FooterLink to="/">About</FooterLink>
          <FooterLink to="/">Products</FooterLink>
          <FooterLink to="/">Portfolio</FooterLink>
          <FooterLink to="/">Contact Us</FooterLink>
          <FooterLink to="/">Projects</FooterLink>
        </div>
        <div className='flex flex-col'>
          <FooterHeading>Locate Us</FooterHeading>
          <FooterLink to="/">Sitemaps</FooterLink>
        </div>
        <div>
          <FooterHeading>Newsletter SignUp</FooterHeading>
        </div>
    </div>
  )
}

export default Footer