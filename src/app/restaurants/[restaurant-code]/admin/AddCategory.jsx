import { Disclosure } from '@headlessui/react'
import { Formik } from 'formik'
import { ChevronUp } from 'lucide-react'
import React from 'react'

const AddCategory = () => {
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
                        initialValues={{}}
                        validationSchema={{}}
                        onSubmit={values => addFoodMutation.mutate(values)}
                    > 
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