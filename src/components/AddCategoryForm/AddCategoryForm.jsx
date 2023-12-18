import api from '@/utils/api'
import { useMutation } from '@tanstack/react-query'
import { Form, useField } from 'formik'
import React from 'react'
import Input from '../Input'
import classNames from '@/utils/classNames'

const AddCategoryForm = ({loading, errorMessage}) => {
  const [nameFields, nameVars] = useField("name")
  return (
    <Form className={classNames("flex flex-col justify-center items-center p-5 space-y-5", loading && "opacity-50 pointer-events-none")}>
      <Input {...nameFields} errorMessage={nameVars.touched && nameVars.error} title={'Name'} placeholder='Category name' />
      {errorMessage && (<div className='text-red-500 text-center w-96'>{errorMessage}</div>)}
      <button className=' btn btn-primary w-96'>Add Category</button>
    </Form>
  )
}

export default AddCategoryForm