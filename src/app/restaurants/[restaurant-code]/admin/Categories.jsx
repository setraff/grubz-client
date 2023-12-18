import { Tab } from '@headlessui/react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import api from '../../../../utils/api'
import AddCategory from "./AddCategory"
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import { Trash } from 'lucide-react'

const Categories = () => {
  const qc = useQueryClient()
  const categoryQuery = useQuery({
    queryKey: ['category'],
    queryFn: () => api.get("/categories").then(res => res.data),
    refetchOnWindowFocus: false
  })

  const deleteMutation = useMutation({
    mutationFn: categoryId => api.delete("/categories", {params: {categoryId}}),
    onSuccess: () => qc.invalidateQueries(['category'])
  })

  const updateMutation = useMutation({
    mutationFn: ({id, name}) => api.patch("/categories", { name }, {params: {
      categoryId: id,
    }}),
    onSuccess: () => qc.invalidateQueries(['category'])
  })

  const onCellEditStop = (params, event) => {
    const id = params.id
    const name = event.target.value
    updateMutation.mutate({id, name})
  }

  const rows = categoryQuery.data || []

  const handleDelete = id => deleteMutation.mutate(id)

  const columns = [
    {field: 'name', headerName: 'Name', width: 150, editable: true},
    {field: 'delete', headerName: '', width: 150, type: 'actions', editable: false, getActions: ({id}) => {
      return [
          <GridActionsCellItem
              icon={<Trash className='text-red-500'/>}
              label="Delete"
              onClick={_ => handleDelete(id)}
              color="inherit"
          />
      ]
  }}
  ]

  return (
    <Tab.Panel
      as='div'
      className={'w-full flex  justify-center items-center rounded-xl'}
    >
      <div className='w-fit'>
      <AddCategory/>
        {rows.length > 0 && (
              <DataGrid 
                  loading={categoryQuery.isFetching || deleteMutation.isPending || updateMutation.isPending}
                  className='bg-gray-800 '
                  onCellEditStop={onCellEditStop}
                  columns={columns} 
                  rows={rows} 
                  classes={{
                      cell: "text-white",
                      columnHeader: "text-white font-bold",
                      sortIcon: "text-white",
                  }} 
              />
            )}
      </div>
    </Tab.Panel>
  )
}

export default Categories