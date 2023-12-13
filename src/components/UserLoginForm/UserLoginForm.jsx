import { Form, useField } from 'formik'
import React from 'react'
import Input from '../Input'
import classNames from "../../utils/classNames"

const UserLoginForm = ({loading, errorMessage}) => {
  const [email, emailVars] = useField("email")
  const [password, passwordVars] = useField("password")

  return (
    <Form className={classNames("className='w-full flex flex-col items-center py-16 space-y-4", loading && "opacity-50 pointer-events-none")}>
        <Input {...email} errorMessage={emailVars.touched && emailVars.error} title="Email"/>
        <Input {...password} type="password" errorMessage={passwordVars.touched && passwordVars.error} title="Password"/>
        {errorMessage && (<div className='text-red-500 text-center w-96'>{errorMessage}</div>)}
        <button className=' btn btn-primary w-96'>Log in</button>
  </Form>
  )
}

export default UserLoginForm