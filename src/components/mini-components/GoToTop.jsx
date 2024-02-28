import React, { useEffect, useState } from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior : 'smooth'
        })
    }
    const handleScroll = () =>{
        if(window.scrollY > 300){
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])
  return (
    <div className={isVisible ? "bg-blue-400 text-black fixed bottom-5 right-5 p-2 rounded-full cursor-pointer hover:bg-blue-500 transition duration-500 ease-in-out transform translate-y-2 hover:translate-y-0 hover:opacity-100" : "invisible fixed"} onClick={scrollToTop}>
    <KeyboardDoubleArrowUpIcon />
</div>
  )
}

export default GoToTop