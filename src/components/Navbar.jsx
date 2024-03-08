import React, { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';

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
  <div className="w-full text-white">
    <div className="px-4 shadow-lg bg-gradient-to-r from-pink-500 to-pink-700">
      <span onClick={toggleMenu} className="flex justify-end py-3 sm:hidden">
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </span>
      <ul className="hidden sm:flex justify-center gap-12">
      {
        lists.map((list) => {
          return (<li className="px-4 h-12 flex items-center hover:bg-pink-700"><NavLink to={list.link}>{list.name}</NavLink></li>)
        })
      }
      </ul>
    </div>
    {
      isMenuOpen ? <ul className='bg-gradient-to-r from-pink-500 to-pink-600 absolute w-full'>{
        lists.map((list) => {
          return (<li className=" w-full shadow-sm p-2 flex justify-center hover:bg-pink-700"><NavLink to={list.link}>{list.name}</NavLink></li>)
        })
      }
      </ul> : ""
    }
  
  </div>
)
}

export default Navbar