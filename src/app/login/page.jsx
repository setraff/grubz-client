"use client"

import { Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import UserLoginForm from '../../components/UserLoginForm/UserLoginForm'
import { useMutation } from '@tanstack/react-query'
import api from '@/utils/api'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  const initialValues = {
    email: null,
    password: null
  }

  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required")
  })

  const router = useRouter()

  const loginMutation = useMutation({
    mutationFn: values => api.post("/login", values).then(res => res.data),
    onSuccess: token => {
      localStorage.setItem('token', token)
      const restaurantCode = localStorage.getItem('restaurantCode')
      if(restaurantCode)
      {
        router.push(`/restaurants/${restaurantCode}`)
      }
      else
      {
        router.push("/")
      }
    }
  })

  const handleSubmit = values => loginMutation.mutate(values)

  return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <UserLoginForm loading={loginMutation.isPending} errorMessage={loginMutation.error?.response?.data.error}/>
      </Formik>
  )
}

export default LoginPage