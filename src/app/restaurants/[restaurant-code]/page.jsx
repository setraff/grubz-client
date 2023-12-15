"use client"

import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const Restaurant = () => {
  const params = useParams()

  const code = params['restaurant-code']

  useEffect(() => {
    if(code)
    {
      localStorage.setItem('restaurantCode', code)
    }
  }, [])

  return (
    <div>{code}</div>
  )
}

export default Restaurant