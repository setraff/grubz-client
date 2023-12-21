"use client"

import api from '@/utils/api'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import FoodCard from '../../../components/FoodCard/FoodCard'
import classNames from '@/utils/classNames'

const Restaurant = () => {
  const params = useParams()
  const [cart, setCart] = useState([])
  const router = useRouter()

  const code = params['restaurant-code']

  useEffect(() => {
    if(code)
    {
      localStorage.setItem('restaurantCode', code)
    }
  }, [])

  useEffect(() => {
    if(!localStorage.getItem('token'))
    {
      router.push("/login")
    }
  }, [])

  const foodQuery = useQuery({
    queryKey: ['food'],
    queryFn: () => api.get("/food").then(res => res.data)
  })

  const createOrderMutation = useMutation({
    mutationFn: food => {
      const foodSet = new Set()
      for(const f of food)
      {
        foodSet.add(f)
      }
      let payload = []
      for(const f of foodSet)
      {
        const count = food.filter(x => x === f).length
        payload.push({
          foodId: f,
          quantity: count
        })
      }
      return api.post("/orders", {food: payload}).then(res => res.data)
    },
    onSuccess: (order) => {
      router.push(`/payments/${order.id}`)
    }
  })

  const food = foodQuery.data || []

  return (
    <div className={classNames('w-full h-full px-10 pb-10', createOrderMutation.isPending && "opacity-50 pointer-events-none")}>
      <div className='w-full py-5 space-x-5'>
      {cart.length > 0 && (
        <>
          <button onClick={() => createOrderMutation.mutate(cart)} className='btn btn-primary'>Proceed to checkout</button>
          <button onClick={() => setCart([])} className='btn btn-error'>Remove All</button>
        </>
      )}
      </div>
      <div className='w-full h-full grid md:grid-cols-4 gap-10'>
        {food.map(f => {
          const selected = cart.filter(fid => f.id == fid).length
          return (
            <FoodCard selected={selected} onClick={() => setCart(c => c.concat(f.id))} food={f}/>
          )
        })}
      </div>
    </div>
  )
}

export default Restaurant