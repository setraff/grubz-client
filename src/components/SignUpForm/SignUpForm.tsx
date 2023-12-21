import { Form, useField } from 'formik'
import React, { use } from 'react'
import Input from '../Input'
import classNames from '@/utils/classNames'

const SignUpForm = ({errorMessage, loading}) => {
  const [nField, nMeta, nHelpers] = useField("name")
  const [eField, eMeta, eHelpers] = useField("email")
  const [pField, pMeta, pHelpers] = useField("password")

  return (
    <Form className={classNames(
        'w-full p-10 flex flex-col space-y-5 items-center',
        loading && 'opacity-50 pointer-events-none'
    )}>
        <Input {...nField} errorMessage={nMeta.touched && nMeta.error} title="Name" />
        <Input {...eField} errorMessage={eMeta.touched && eMeta.error} title="Email" />
        <Input {...pField} errorMessage={pMeta.touched && pMeta.error} title="Password" type="password" />
        {errorMessage && (<div className='text-red-500 text-center w-96'>{errorMessage}</div>)}
        <button className='btn btn-primary w-96 mt-10'>Sign Up</button>
    </Form>
  )
}

export default SignUpForm