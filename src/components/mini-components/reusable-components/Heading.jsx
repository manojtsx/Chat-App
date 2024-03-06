import React from 'react'

const Heading = ({children}) => {
  return (
    <>
    <h1 className='text-2xl text-gray-700 font-bold tracking-tighter'>{children}</h1>
    </>
  )
}

export default Heading