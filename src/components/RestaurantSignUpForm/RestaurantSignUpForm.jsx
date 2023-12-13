import { Form, useField } from 'formik'
import React from 'react'
import Input from '../Input'
import classNames from "../../utils/classNames"

const RestaurantSignUpForm = ({loading, errorMessage}) => {
  const [restaurantName, restaurantVars, restaurantHelpers] = useField("restaurantName")
  const [code, codeVars, codeHelpers] = useField("code")
  const [name, nameVars, nameHelpers] = useField("name")
  const [email, emailVars, emailHelpers] = useField("email")
  const [password, passwordVars, passwordHelpers] = useField("password")

  return (
    <Form className={classNames("className='w-full flex flex-col items-center py-16 space-y-4", loading && "opacity-50 pointer-events-none")}>
        <Input {...restaurantName} errorMessage={restaurantVars.touched && restaurantVars.error} title="Restaurant name"/>
        <Input {...code} errorMessage={codeVars.touched && codeVars.error} title="Restaurant code"/>
        <Input {...name} errorMessage={nameVars.touched && nameVars.error} title="Admin name"/>
        <Input {...email} errorMessage={emailVars.touched && emailVars.error} title="Admin email"/>
        <Input type="password" {...password} errorMessage={passwordVars.touched && passwordVars.error} title="Admin password"/>
        {errorMessage && (<div className='text-red-500 text-center w-96'>{errorMessage}</div>)}
        <button className=' btn btn-primary w-96'>Sign Up</button>
  </Form>
  )
}

export default RestaurantSignUpForm