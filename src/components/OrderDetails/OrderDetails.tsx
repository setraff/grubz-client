import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const OrderDetails = ({food}: any) => {
  const total = food.reduce((prev, curr) => prev + (curr.quantity * curr.foodId.price), 0.0)

  return (
    <div className='w-96 h-fit bg-white mt-10 rounded-xl'>
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Food</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {food.map((row: any) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {`${row.foodId.name} x${row.quantity}`}
              </TableCell>
              <TableCell align="right">{row.quantity * row.foodId.price} /-</TableCell>
            </TableRow>
          ))}
            <TableCell component="th" scope="row">
                Subtotal
              </TableCell>
              <TableCell align="right">{total} /-</TableCell>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className='font-bold'
            >
              <TableCell component="th" scope="row">
                Service charge (10%)
              </TableCell>
              <TableCell align="right">+{total*0.1} /-</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className='font-bold'
            >
              <TableCell component="th" scope="row">
                GST (8%)
              </TableCell>
              <TableCell align="right">+{total*0.08} /-</TableCell>
            </TableRow>
            <TableRow
              sx={{ typography: 'subtitle2' }}
              className='font-bold'
            >
              <TableCell component="th" scope="row">  
                Total
              </TableCell>
              <TableCell align="right">{(total*0.1 + total*0.08) + total} /-</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  )
}

export default OrderDetails