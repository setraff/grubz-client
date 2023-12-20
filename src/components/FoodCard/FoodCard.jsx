import classNames from '@/utils/classNames'
import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const FoodCard = ({food, selected=null, onClick}) => {
  return (
    <Card className='relative cursor-pointer' onClick={onClick} sx={{ minWidth: 275 }}>
        {selected ? (
            <div className='w-full h-2 flex justify-end items-center pr-4 pt-5'>
                <div className='w-6 h-6 bg-blue-500 rounded-full flex justify-center items-center text-white'>{selected}</div>
            </div>
        ) : null}
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {food.categoryId?.name}
        </Typography>
        <Typography className={classNames(selected? 'text-blue-500' : "text-black-500")} variant="h5" component="div">
            {food.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          MVR {food.price} /-
        </Typography>
        <Typography variant="body2">
            {food.description}
            <br />
        </Typography>
        </CardContent>
    </Card>
  )
}

export default FoodCard