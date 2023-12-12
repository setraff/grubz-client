import React from 'react'

const Input = ({title, errorMessage, ...props}) => {
  return (
    <div className="flex flex-col space-y-2 ">
        <label>{title}</label>
        <input {...props} className='input input-primary w-96'></input>
        {errorMessage && (<div className='text-red-500'>{errorMessage}</div>)}
    </div>
  )
}

export default Input