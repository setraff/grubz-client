"use client"

import api from '@/utils/api'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const OrderPage = () => {
  const orderQuery = useQuery({
    queryKey:['user-orders'],
    queryFn: () => api.get("/users/orders").then(res => res.data),
    refetchOnWindowFocus: false
  })

  const orders = orderQuery.data || []

  return (
    <div className='w-full flex flex-col justify-center items-center p-10'>
      <div className='w-96'>
        <TableContainer component={Paper}>
          <Table  aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Order Items</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map(order => {
                return (
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    className='font-bold'
                  >
                    <TableCell component="th" scope="row">
                      {order.food.map(f => `${f.foodId.name} x${f.quantity}`).join(", ")}
                    </TableCell>
                    <TableCell align="right">{order.status}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default OrderPage