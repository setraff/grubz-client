import { Tab } from '@headlessui/react'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Trash } from 'lucide-react';
import React from 'react'
import api from "../../../../utils/api"
import AddFood from "./AddFood"

const Food = () => {
    const qc = useQueryClient()
    const foodQuery = useQuery({
        queryKey: ["food"],
        queryFn: () => api.get("/food").then(res => res.data),
        refetchOnWindowFocus: false
    })

    const deleteMutation = useMutation({
        mutationFn: id => api.delete("/food", {params: {foodId: id}}).then(res => res.data),
        onSuccess: () => qc.invalidateQueries(['food'])
    })

    const updateMutation = useMutation({
        mutationFn: ({id, field, value}) => {
            console.log(id, field, value)
            return api.patch("/food", {
                id,
                fields: {
                    [field]: value
                }
            })
        },
        onSuccess: () => qc.invalidateQueries(['food'])
    })

    const handleDelete = id => deleteMutation.mutate(id)

    const onCellEditStop = (params, event) => {
        const id = params.id
        const field = params.field
        const value = event.target.value
        updateMutation.mutate({id, field, value})
    }
    const rows = foodQuery.data || []

    const columns= [
        { field: 'name', headerName: 'Name', width: 150, editable: true},
        { field: 'price', headerName: 'Price', width: 150, editable: true },
        { field: 'description', headerName: 'Description', width: 150, editable: true },
        { field: 'category', headerName: 'Category', width: 150, editable: true },
        { field: 'delete', headerName: '', width: 150, type: 'actions', editable: false, getActions: ({id}) => {
            return [
                <GridActionsCellItem
                    icon={<Trash className='text-red-500'/>}
                    label="Delete"
                    onClick={_ => handleDelete(id)}
                    color="inherit"
                />
            ]
        }}
      ];

    return (
        <Tab.Panel
            as='div'
            className={'w-full flex justify-center items-center rounded-xl'}
        >
            <div className='w-fit '>
            <AddFood/>
            {rows.length > 0 && (
                <DataGrid 
                    loading={foodQuery.isFetching || deleteMutation.isPending || updateMutation.isPending}
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

export default Food