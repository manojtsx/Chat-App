import React, { useEffect } from 'react'
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  let lists = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Chat", link: "/chat" },
    { name: "Login", link: "/login" },
    { name: "Register", link: "/register" }
  ]
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
   }
  const handleScroll = () => {
    if(window.scrollY > 200){
      setIsScrolled(true);
    }else{
      setIsScrolled(false);
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);
    return ()=>{
      window.removeEventListener('scroll',handleScroll);
    }
  })
return (
  <div className="w-full">
    <div className="px-4 py-4 shadow-lg bg-gradient-to-r from-pink-500 to-pink-700 flex justify-end">
      <span onClick={toggleMenu}>
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </span>
    </div>
    {
      isMenuOpen ? <ul className='bg-gradient-to-r from-pink-500 to-pink-600 absolute w-full'>{
        lists.map((list) => {
          return (<li className=" w-full shadow-sm p-2 flex justify-center"><a href={list.link}>{list.name}</a></li>)
        })
      }
      </ul> : ""
    }

  </div>
)
}

export default Navbar