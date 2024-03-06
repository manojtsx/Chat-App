import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FooterHeading from './mini-components/reusable-components/FooterHeading';
import FooterLink from './mini-components/reusable-components/FooterLink';
import InputBox from './mini-components/reusable-components/InputBox';
import Button from './mini-components/reusable-components/Button';

const Footer = () => {
  const submitNewsletter = (event) =>{
    event.preventDefault();
  }
  return (
    <div className='px-4 py-8 md:px-0 bg-gradient-to-r from-pink-500 to-pink-700 flex justify-start sm:justify-around flex-wrap flex-col sm:flex-row gap-5 md:gap-0'>
        <div className='flex flex-col text-white'>
          <FooterHeading>Contact Us</FooterHeading>
          <p className='text-sm'>Chhabdi Barahi, Tanahun</p>
          <p className='text-sm'>+977-9816683613</p>
          <p className='text-sm mb-4'>manojbicte@gmail.com</p>
          <FooterHeading>Social Links</FooterHeading>
          <div className='flex gap-2'>
            <FooterLink to="/"><FacebookRoundedIcon /></FooterLink>
            <FooterLink to="/"><InstagramIcon /></FooterLink>
            <FooterLink to="/"><GitHubIcon /></FooterLink>
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
        <div className='flex flex-col gap-2'>
          <FooterHeading>Newsletter SignUp</FooterHeading>
          <form className='flex flex-col gap-2' onSubmit={submitNewsletter}>
            <InputBox type="text" name="message" placeholder="Username" required/>
            <Button type="submit">Submit</Button>
          </form>
          </div>
    </div>
  )
}

export default Footer