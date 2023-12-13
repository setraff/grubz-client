"use client"
import Input from '@/components/Input'
import RestaurantSignUpForm from '@/components/RestaurantSignUpForm/RestaurantSignUpForm'
import { useMutation } from '@tanstack/react-query'
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import api from "../../../utils/api"
import { useRouter } from 'next/navigation'

const SignUp = () => {
  const router = useRouter()

  const signUpMutation = useMutation({
    mutationFn: (values) => api.post("/restaurants", {
      name: values.name,
      email: values.email,
      password: values.password,
      code: values.code,
      restaurantName: values.restaurantName
    }).then(res => res.data),

    onSuccess: () => {
      router.push("/login")
    }
  })

  const initialValues = {
    restaurantName: null,
    code: null,
    name: null,
    email: null,
    password: null
  }

  const validationSchema = Yup.object({
    restaurantName: Yup.string().required("Required"),
    code: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    name: Yup.string().required("Required"),
  })

  const handleSubmit = values => signUpMutation.mutate(values)

  return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <RestaurantSignUpForm 
          loading={signUpMutation.isPending} 
          errorMessage={signUpMutation.error?.response?.data.error}
        />
      </Formik>
  )
}

export default SignUp