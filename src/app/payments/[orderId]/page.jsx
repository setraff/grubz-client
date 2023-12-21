"use client"

import React, { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import api from '@/utils/api'
import { Card, InputBase, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import OrderDetails from '@/components/OrderDetails/OrderDetails'
import Input from '@/components/Input'
import classNames from '@/utils/classNames'

const page = () => {
  const params = useParams()
  const orderId = params['orderId']
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const orderQuery = useQuery({
    queryKey:['orders', orderId],
    queryFn: () => api.get(`/orders/${orderId}`).then(res => res.data),
    refetchOnWindowFocus: false
  })

  if(orderQuery.isFetching)
  {
    return <div className='p-12'>
      <div className='w-full h-96 rounded-xl bg-gray-500 animate-pulse'></div>
    </div>
  }

  const rows = orderQuery.data.food

  const handlePay = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      router.back()
    }, 2000)
  }
  
  return (
    <div className={classNames(
      'w-full flex flex-col space-y-5 justify-center items-center',
      loading && 'opacity-50 pointer-events-none'
    )}>
      <OrderDetails food={rows}/>
      <Card className='w-96 p-5 space-y-5' variant="outlined">
        <TextField className='w-full' id="outlined-basic" label="Card Number" variant="outlined" />
        <TextField className='w-full' id="outlined-basic" label="Name on Card" variant="outlined" />
        <div className='w-full flex items-center space-x-5'>
          <TextField className='w-full' id="outlined-basic" label="Expiry date" placeholder='MM/YY' variant="outlined" />
          <TextField className='w-full' id="outlined-basic" label="Security code" variant="outlined" />
        </div>
        <button onClick={handlePay} className='btn btn-primary w-full'>Pay</button>
      </Card>
    </div>
  )
}

export default page