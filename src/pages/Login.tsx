import { useState, type FormEvent } from "react"
import { getUserDetails, login } from "../services/auth"
import { useAuth } from "../context/authContext"
// import axios from "axios"


export default function Login() {
    
    const { setUser } = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault()
      

        if (!email || !password) {
            // alert("All fields are required!")
            return
        }


        try {
            const res = await login({email, password})

            if (!res?.data.data.accessToken) {
                // alert("Login Faild")
                return
            }

            // alert("login req access: " + res.data.data.accessToken)
            // alert("login req refresh: " + res.data.data.refreshToken)

            localStorage.setItem("accessToken", res?.data.data.accessToken)
            localStorage.setItem("refreshToken", res?.data.data.refreshToken)

            const userDetails = await getUserDetails()
            setUser(userDetails.data)
            console.log("User Details message: " + userDetails.message)
            console.log("User Details dataObject: " + userDetails.data.firstname)

            // alert("User Details message: " + userDetails.message)
            // alert("User Details dataObject: " + userDetails.data)
            
       
        } catch (err) {
            console.log(err)
            
        }

        // const res = await axios.post('http://localhost:5000/api/v1/auth/login', {email, password})
        // alert(res?.data)


    }

  return (
    <div>
        <h2>Hello this is login page!!</h2>
        <div className="flex flex-col gap-5">
            <input type="emil" placeholder="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            <input type="password" placeholder="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            <button onClick={handleLogin} className="bg-blue-500">Login</button>
        </div>
    </div>
  )
}
