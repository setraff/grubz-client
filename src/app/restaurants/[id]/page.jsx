"use client"

import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

const Restaurant = () => {
  const params = useParams()

  const id = params.id

  useEffect(() => {
    if(id)
    {
      localStorage.setItem('reataurantId', id)
    }
  }, [])

  return (
    <div>{params.id}</div>
  )
}

export default Restaurant