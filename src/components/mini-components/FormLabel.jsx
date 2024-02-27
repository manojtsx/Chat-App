import React from 'react'

const FormLabel = ({htmlFor, children }) => {
  return (
    <>
     <label htmlFor={htmlFor}>{children}</label>
    </>
  )
}

export default FormLabel