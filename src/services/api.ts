import axios, {AxiosError} from "axios";
import { refreshtokens } from "./auth";




const api = axios.create({
    baseURL: 'http://localhost:5000/api/v1'
})

const PUBLIC_ENDPOINTS = ['auth/login', 'auth/register']

api.interceptors.request.use((config) => {

    const token = localStorage.getItem("accessToken")
    // const PUBLIC_ENDPOINTS = ['auth/login', 'auth/register']

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
}, async (err: AxiosError) => {
 
    const originalRequest: any = err.config

    const isPublic = PUBLIC_ENDPOINTS.some((url) => originalRequest.url?.includes(url))

    console.log("****************   This is : resp expire status code : " + err.response?.status)
    console.log("****************   This is : resp expire is public : " + isPublic)

    const retryVal: boolean =  !originalRequest._retry

    console.log("****************   This is : resp expire is _retry : " + retryVal)

    // this was changed - err.response?.status == 401
    // there is something wrong here as I set the status code 401 to true - but I receive 500 
    // that is why the below condition was written
    

    if (err.response?.status == 500 && !isPublic && !originalRequest._retry) {
        originalRequest._retry = true
        try {
            const refreshToken = localStorage.getItem("refreshToken")
            if (!refreshToken) {
                throw new Error("No refresh token found")
            }
            
            const res = await refreshtokens(refreshToken)
            localStorage.setItem("accessToken", res.accessToken)
            // refer the request 
            originalRequest.headers.Authorization = `Bearer ${res.accessToken}`

            return axios(originalRequest)

           
        } catch (error) {
            localStorage.removeItem("accessToken")
            localStorage.removeItem("refreshToken")
            window.location.href = "/"
            console.error(error)
            return Promise.reject(error)
        }
    }

    return Promise.reject(err)
}

)




// api.interceptors.response.use( async (response) => {
//     // const originalRequest: any = err.config
//     const refreshToken = localStorage.getItem("refreshToken")
//     if (!refreshToken) {
//         throw new Error("No refresh token found")
//     }
    
 
    
//     // localStorage.setItem("accessToken", res.data.accessToken)
//     // console.log("This is new access token for refresh token" + res.data.accessToken)
//     // refer the request 
//     // originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`

//     // return axios(originalRequest)

//         const res = await refreshtokens(refreshToken)

//         localStorage.setItem("accessToken", res.accessToken)

//         console.log("This is new access token for refresh token" + res.data.accessToken)

       






//     return response

// })







// api.interceptors.response.use(
//   response => response,
//   async (error: AxiosError) => {
//     const originalRequest: any = error.config

//     const isPublic = PUBLIC_ENDPOINTS.some(url =>
//       originalRequest?.url?.includes(url)
//     )

//     if (
//       error.response?.status === 401 &&
//       !isPublic &&
//       !originalRequest._retry
//     ) {
//       originalRequest._retry = true

//       try {
//         const refreshToken = localStorage.getItem("refreshToken")
//         if (!refreshToken) throw new Error("No refresh token")

//         const res = await refreshtokens(refreshToken)

//         localStorage.setItem("accessToken", res.accessToken)

//         originalRequest.headers = {
//           ...originalRequest.headers,
//           Authorization: `Bearer ${res.accessToken}`
//         }

//         return api(originalRequest) // IMPORTANT
//       } catch (err) {
//         localStorage.removeItem("accessToken")
//         localStorage.removeItem("refreshToken")
//         window.location.href = "/"
//         return Promise.reject(err)
//       }
//     }

//     return Promise.reject(error)
//   }
// )




















export default api