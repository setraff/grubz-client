import { Tab } from '@headlessui/react'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Delete, Plus, Trash } from 'lucide-react';
import React from 'react'
import api from "../../../../utils/api"
import AddFood from "./AddFood"

// const rows = [
//     { id: 69, name: 'Burger', price: 1632, description: 'A juicy burger', category: 'Fast food' },
//     { id: 2, name: 'Pizza', price: 139, description: 'Delicious pizza', category: 'Italian' },
//     { id: 3, name: 'Sushi', price: 308, description: 'Fresh sushi rolls', category: 'Japanese' },
//     { id: 4, name: 'Tacos', price: 200, description: 'Crunchy tacos', category: 'Mexican' },
//     { id: 5, name: 'Salad', price: 115, description: 'Healthy salad', category: 'Vegetarian' },
//     { id: 6, name: 'Steak', price: 385, description: 'Juicy steak', category: 'American' },
//     { id: 7, name: 'Pasta', price: 231, description: 'Delicious pasta', category: 'Italian' },
//     { id: 8, name: 'Sushi Roll', price: 354, description: 'Assorted sushi rolls', category: 'Japanese' },
//     { id: 9, name: 'Chicken Wings', price: 170, description: 'Spicy chicken wings', category: 'American' },
//     { id: 10, name: 'Pad Thai', price: 262, description: 'Classic Pad Thai', category: 'Thai' },
//   ];
  

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
                        headerFilterRow: "text-white",
                        columnHeader: "text-white font-bold",
                        footerCell: "text-white",
                        footerContainer: "text-white",
                        sortIcon: "text-white",
                        menuIcon: "text-white",
                        menuIconButton: "text-white",
                        panelFooter: "text-white"
                    }} 
                />
            )}
            </div>
        </Tab.Panel>
    )
}

export default Food