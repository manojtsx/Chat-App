import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  let Lists=[
    {name:"Home",link:"/"},
    {name:"About",link:"/about"},
    {name:"Chat",link:"/chat"},
    {name:"Login",link:"/login"},
    {name:"Register",link:"/register"}
  ]

  const toggleMenu=()=>{
  Lists.map((list)=>{
    <li><a href="list.link">list.name</a></li>
  })
  }
  return (
    <div className="px-4 py-4 fixed top-0 w-full shadow-lg bg-gradient-to-r from-pink-500 to-pink-700"> 
    <span onClick={toggleMenu}>
      <MenuIcon />
    </span>
    </div>
  )
}

export default Navbar