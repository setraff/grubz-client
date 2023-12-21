import api from '@/utils/api'
import { Tab } from '@headlessui/react'
import { MenuItem, Select } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'

const Orders = () => {
  const qc = useQueryClient()
  const orderQuery = useQuery({
    queryKey: ['orders'],
    queryFn: () => api.get("/restaurants/orders").then(res => res.data)
  })

  const updateMutation = useMutation({
    mutationFn: ({id, status}) => api.patch(`/orders/${id}`, {status}).then(res => res.data),
    onSuccess: () => qc.invalidateQueries(['orders'])
  })

  const orders = (orderQuery.data || []).map(order => {
    return {
      ...order,
      food: order.food.map(f => `${f.foodId.name} x${f.quantity}`).join(", ")
    }
  })

  const columns = [
    { field: 'food', headerName: 'Food', width: 300, height: 100, editable: true},
    { field: 'status', headerName: 'Status', width: 150, editable: false, type: 'actions', getActions: (x) => {
      const id = x.id
      return [
          <>
          <Select
              labelId="category-select"
              id="category-select"
              label="Status"
              value={x.row.status}
              onChange={e => updateMutation.mutate({id, status: e.target.value})}
          >
            <MenuItem value={"Completed"}>Completed</MenuItem>
            <MenuItem value={"Cancelled"}>Cancelled</MenuItem>
            <MenuItem value={"Pending"}>Pending</MenuItem>
          </Select>
          </>
      ]
  }},
  ]

  const rows = orders

  return (
    <Tab.Panel className={`w-full flex justify-center items-center`}>
      <div className='w-fit'>
        <DataGrid 
              loading={orderQuery.isFetching || updateMutation.isPending}
              className='bg-gray-800 '
              // onCellEditStop={onCellEditStop}
              columns={columns} 
              rows={rows} 
              classes={{
                  cell: "text-white",
                  columnHeader: "text-white font-bold",
                  sortIcon: "text-white",
              }} 
          />
      </div>
    </Tab.Panel>
  )
}

export default Orders