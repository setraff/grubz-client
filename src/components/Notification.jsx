import React from 'react'

const Notification = () => {
  const notification = ""

  if(!notification)
  {
    return
  }
  
  return (
    <div className='h-12 bg-red-500 text-white px-4 flex items-center justify-center text-center text-sm md:text-base cursor-pointer'></div>
  )
}

export default Notification