import { Disclosure } from '@headlessui/react'
import { Formik } from 'formik'
import { ChevronUp } from 'lucide-react'
import React from 'react'
import AddCategoryForm from '../../../../components/AddCategoryForm/AddCategoryForm'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import api from '@/utils/api'
import * as Yup from 'yup'

const AddCategory = () => {
  const qc = useQueryClient()
  const addCategoryMutation = useMutation({
    mutationFn: ({ name }) => api.post("/categories", { name, food: [] }).then(res => res.data),
    onSuccess: () => qc.invalidateQueries(["categories"])
  })

  const handleSubmit = values => addCategoryMutation.mutate(values)

  const initialValues = {
    name: null
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("Required")
  })

  const loading = addCategoryMutation.isPending
  const errorMessage = addCategoryMutation.error?.response?.data.error
  
  return (
    <div className="w-full py-10">
    <div className="mx-auto w-full max-w-md rounded-2xl bg-gray-800 p-2">
        <Disclosure as="div" className="mt-2">
        {({ open }) => (
            <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-400 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75">
                    <span>Add Category</span>
                    <ChevronUp
                        className={`${
                            open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-gray-500`}
                    />
                </Disclosure.Button>  
                <Disclosure.Panel>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    > 
                        <AddCategoryForm loading={loading} errorMessage={errorMessage}/>
                    </Formik>
                </Disclosure.Panel>
            </>
        )}
        </Disclosure>
    </div>
    </div>
  )
}

export default AddCategory