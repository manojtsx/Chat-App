import React from 'react'

const InputBox = ({type,placeholder, onChange, name, value}) => {
  return (
    <>
        <input type={type} className='border outline-none placeholder:text-gray-600 px-3 py-2 rounded-lg w-full sm:w-auto' placeholder={placeholder} onChange={onChange} name={name} value={value} />
    </>
  )
}

export default InputBox