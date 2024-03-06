import React from 'react'

const Button = ({type,children}) => {
    let className = "";
    if(type === "reset"){
        className = "px-4 py-2 bg-gradient-to-r from-red-500 to-red-700 text-gray-200 rounded-md hover:from-red-700 hover:to-red-900" 
    }
    if(type === "submit"){
        className = "px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-md hover:from-blue-700 hover:to-blue-900";
    }
    if(type === "delete"){
        className = "px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700";
    }
    if(type === "edit"){
        className = "px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-700";
    }
    return (
        <>
            <button className={className} type={type}>{children}</button>
        </>
    )
}

export default Button