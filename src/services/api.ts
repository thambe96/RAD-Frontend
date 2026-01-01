import axios from "axios";



const api = axios.create({
    baseURL: 'http://localhost:5000/api/v1'
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken")
    const PUBLIC_ENDPOINTS = ['/auth/login', '/auth/register']

    const isPublic: boolean = PUBLIC_ENDPOINTS.some((publicURLPrefix: string) => {
        config.url?.includes(publicURLPrefix)
    })

    if (token && !isPublic) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config

})



export default api