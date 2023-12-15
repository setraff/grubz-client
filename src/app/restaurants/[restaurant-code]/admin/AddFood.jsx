import { Disclosure } from '@headlessui/react'
import { ChevronUp } from 'lucide-react'
import Input from "../../../../components/Input"
import classNames from '../../../../utils/classNames'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import api from '../../../../utils/api'
import {Formik, Form} from 'formik'
import * as Yup from "yup"
import AddFoodForm from "../../../../components/AddFoodForm/AddFoodForm"

export default function AddFood() {
    const qc = useQueryClient()
    const initialValues = {
        name: null,
        price: null,
        description: null,
        categoryId: null
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Required"),
        price: Yup.string().required("Required"),
        description: Yup.string().required("Required"),
        categoryId: null
    })

    const addFoodMutation = useMutation({
        mutationFn: values => {
            return api.post("/food", {
                name: values.name,
                price: Number(values.price),
                description: values.description,
                categoryId: values.categoryId
            })
            .then(res => res.data)
        },
        onSuccess: () => {
            qc.invalidateQueries(['food'])
        }
    })

    const errorMessage = addFoodMutation.error?.response?.data.error

    return (
        <div className="w-full py-10">
        <div className="mx-auto w-full max-w-md rounded-2xl bg-gray-800 p-2">
            <Disclosure as="div" className="mt-2">
            {({ open }) => (
                <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-400 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75">
                        <span>Add Food</span>
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
                            onSubmit={values => addFoodMutation.mutate(values)}
                        > 
                            <AddFoodForm errorMessage={errorMessage} loading={addFoodMutation.isPending}/>
                        </Formik>
                    </Disclosure.Panel>
                </>
            )}
            </Disclosure>
        </div>
        </div>
    )
}
