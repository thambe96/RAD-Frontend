import { useState, type FormEvent } from "react"
import { login } from "../services/auth"
// import axios from "axios"


export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault()
        setEmail("")
        setPassword("")

        try {
            const res = await login({email, password})
            // alert(`This is the results Object: ${res?.data}`)
            // alert(`This is the results Object: ${res?.message}`)
            alert("Backend Message: " + res?.data.message)
            alert("Access Token: " + res?.data.data.accessToken)
            alert("Refresh Token: " + res?.data.data.refreshToken)
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
