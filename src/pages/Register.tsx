import { useState, type ChangeEvent, type FormEvent, useRef } from "react"
import { register } from "../services/auth"


export default function Register() {

    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userimage, setUserImage] = useState<File | null>(null)
    const [preview, setPreview] = useState("")
    const fileInputRef = useRef<HTMLInputElement | null>(null)

    const handleUserImage = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const image = e.target.files?.[0]
        if (image) {
            setUserImage(image)
            setPreview(URL.createObjectURL(image))
        }
    }

    const handleResistration = async (e: FormEvent) => {
        e.preventDefault()

        const userData = {
            firstname,
            lastname,
            email,
            password,
            userimage

        }

        const res = await register(userData)
        alert(res?.data.message)
        alert(res?.data.data)

    }

  return (
    <div>

        <h2 className="mb-10 text-center p-3 bg-cyan-500">Hi this is register page !!</h2>
        <form onSubmit={handleResistration} className="flex flex-col gap-10">

            <div className="flex justify-center">
                {
                    preview ? <img src = {preview} alt=""  className="w-20 h-20 object-cover rounded-lg border mb-5" 
                    onClick={() => fileInputRef.current?.click()}/> :

                    <div className="w-20 h-20 object-cover rounded-lg border mb-5 " onClick={() => fileInputRef.current?.click()}>
                        upload
                    </div> 
                }
                <input type="file" accept="image/*" ref = {fileInputRef} className="hidden" onChange={handleUserImage}/> 
            </div>
            
            <input type="text" placeholder="firstname" value={firstname} onChange={(e) => {setFirstName(e.target.value)}}/>
            <input type="text" placeholder="lastname"  value={lastname} onChange={(e) => {setLastName(e.target.value)}}/>
            <input type="email" placeholder="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            <input type="password" placeholder="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            
            <button type="submit" className="bg-green-500 p-2">Register</button>
        </form>
        
        
    </div>
  )
}
