import {Formik, Form, useField} from "formik"
import Input from "../../components/Input"
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import api from "@/utils/api"
import * as Yup from 'yup'
import classNames from "@/utils/classNames"

const AddFoodForm = ({loading, errorMessage}) => {
    const [nameFields, nameVars, nameHelpers] = useField("name")
    const [priceFields, priceVars, priceHelpers] = useField("price")
    const [descriptionFields, descriptionVars, descriptionHelpers] = useField("description")
    const [categoryFields, categoryVars, categoryHelpers] = useField("categoryId")

    const categoryQuery = useQuery({
        queryKey: ['categories'],
        queryFn: () => api.get("/categories").then(res => res.data),
        refetchOnWindowFocus: false
    })

    const qc = useQueryClient()

    loading = categoryQuery.isFetching || loading

    const categories = categoryQuery.data || []

    return (
        <Form className={classNames("flex flex-col justify-center items-center p-5 space-y-5", loading && "opacity-50 pointer-events-none")}>
            <Input {...nameFields} errorMessage={nameVars.touched && nameVars.error} title="Name" placeholder="Enter the name of your food"/>
            <Input {...priceFields} errorMessage={priceVars.touched && priceVars.error} title="Price" placeholder="Enter the price of your food"/>
            <Input {...descriptionFields} errorMessage={descriptionVars.touched && descriptionVars.error} title="Description" placeholder="Describe your food"/>
            {categories.length > 0 && (
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={categoryVars.value}
                    label="Age"
                    onChange={e => categoryHelpers.setValue(e.target.value)}
                >
                    {categories.map((cat, i) => {
                        return (
                            <MenuItem value={cat.id}>{cat.name}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            )}
            {errorMessage && (<div className='text-red-500 text-center w-96'>{errorMessage}</div>)}
            <button className=' btn btn-primary w-96'>Add Food</button>
        </Form>
    )
}

export default AddFoodForm