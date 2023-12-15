import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:3001/api'
})

api.interceptors.request.use(
    config => {
        const restaurantCode = localStorage.getItem('restaurantCode')
        const token = localStorage.getItem('token')
        if(restaurantCode)
        {
            config.headers["X-restaurant-Code"] = restaurantCode
        }
        if(token)
        {
            config.headers["Authorization"] = `Bearer ${localStorage.getItem('token')}`
        }
        return config
    },
    err => Promise.reject(err)
)

api.interceptors.response.use(
    response => response,
    error => {
        if(error.response.data.error === "Token expired")
        {
            window.location.href = "/login"
        }
        return Promise.reject(error)
    }
)

export default api