import { Tab } from '@headlessui/react'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import api from '../../../../utils/api'
import AddCategory from "./AddCategory"

const Categories = () => {
  const categoryQuery = useQuery({
    queryKey: ['category'],
    queryFn: () => api.get("/categories").then(res => res.data)
  })




  return (
    <Tab.Panel
      as='div'
      className={'w-full flex justify-center items-center rounded-xl'}
    >
        <AddCategory/>
    </Tab.Panel>
  )
}

export default Categories