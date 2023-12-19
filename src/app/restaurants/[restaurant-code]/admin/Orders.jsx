import api from '@/utils/api'
import { Tab } from '@headlessui/react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'

const Orders = () => {
  const qc = useQueryClient()
  const orderQuery = useQuery({
    queryKey: ['orders'],
    queryFn: () => api.get("/restaurants/orders").then(res => res.data)
  })

  const orders = orderQuery.data || []

  const columns = [
    { field: 'food', headerName: 'Food', width: 150, editable: false},
    { field: 'description', headerName: 'Description', width: 150, editable: false},
  ]

  const rows = orders

  return (
    <Tab.Panel>
        <div>Orders</div>
    </Tab.Panel>
  )
}

export default Orders