"use client"

import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import api from '@/utils/api'

const page = () => {
  const params = useParams()
  const orderId = params['orderId']
  const orderQuery = useQuery({
    queryKey:['orders', orderId],
    queryFn: () => api.get(`/orders/${orderId}`).then(res => res.data)
  })
  
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-96 h-fit bg-white'>
        
      </div>
    </div>
  )
}

export default page