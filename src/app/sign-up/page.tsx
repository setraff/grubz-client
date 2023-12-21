"use client"

import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import Input from '../../components/Input'
import SignUpForm from '@/components/SignUpForm/SignUpForm'
import { useMutation } from '@tanstack/react-query'
import api from '@/utils/api'
import { useRouter } from 'next/navigation'

const page = () => {
  const initialValues = {
    name: null,
    email: null,
    password: null
  }

  const router = useRouter()

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  })

  const signUpMutation = useMutation({
    mutationFn: ({name, email, password}: any) => api.post("/users/customer", {name, email, password}).then(res => res.data),
    onSuccess: () => router.push("/login")
  })

  const handleSubmit = (values: any) => signUpMutation.mutate(values)

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <SignUpForm loading={signUpMutation.isPending} errorMessage={signUpMutation.error?.response?.data.error} />
    </Formik>
  )
}

export default page