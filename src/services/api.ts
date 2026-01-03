import axios, {AxiosError} from "axios";



const api = axios.create({
    baseURL: 'http://localhost:5000/api/v1'
})

api.interceptors.request.use((config) => {

    const token = localStorage.getItem("accessToken")
    const PUBLIC_ENDPOINTS = ['auth/login', 'auth/register']

    const isPublic: boolean = PUBLIC_ENDPOINTS.some((publicURLPrefix: string) => config.url?.includes(publicURLPrefix))
    // I had used {} in the .some(callback) function -> If you write it like this in the one line --> implicitly returns true if this logic satisfies
    // alert(isPublic)

    if (token && !isPublic) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config

})

api.interceptors.response.use((response) => {
    return response
}, (err: AxiosError) => {
 
    // alert(err.message)
    // alert("Status Code: " + err.status)
    return err
}

)





export default api