"use client"

import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Tabs from "./Tabs"
import { DataGrid } from '@mui/x-data-grid';


export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const rows = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns= [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];



export default function Admin() {

  return (
    <div className="w-full px-2 py-16 text-white">
      <Tab.Group as={'div'} className="w-full flex flex-col items-center justify-center">
        <Tabs tabs={["Food", "Categories", "Users", "Orders"]}/>
        <Tab.Panels className="w-full mt-2">
            <Tab.Panel
              as='div'
              className={'w-full h-fit bg-gray-800 rounded-xl p-5'}
            >
              <DataGrid columns={columns} rows={rows} classes={{
                cell: "text-white",
                headerFilterRow: "text-white",
                columnHeader: "text-white",
                footerCell: "text-white",
                footerContainer: "text-white",
              }} />
            </Tab.Panel>

            <Tab.Panel
            >
              Categories
            </Tab.Panel>
            <Tab.Panel
            >
              Users
            </Tab.Panel>
            <Tab.Panel
            >
              Orders
            </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
