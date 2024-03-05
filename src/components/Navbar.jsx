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
  
  }
  return (
    <div className="px-4 py-4 fixed top-0 w-full shadow-lg bg-gradient-to-r from-pink-500 to-pink-700"> 
    <span>
      <MenuIcon />
    </span>
    <ul className="bg-pink-400 flex flex-col items-center justify-between">{
    Lists.map((list)=>{
    return(<li><a href={list.link}>{list.name}</a></li>)
     })
    }
    </ul>
    </div>
  )
}

export default Navbar