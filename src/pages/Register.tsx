import { useState, type ChangeEvent, type FormEvent, useRef } from "react"
import { register } from "../services/auth"
import { useNavigate } from "react-router-dom"


export default function Register() {


    const navigate = useNavigate()
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userimage, setUserImage] = useState<File | null>(null)
    const [preview, setPreview] = useState("")
    const fileInputRef = useRef<HTMLInputElement | null>(null)

    const [loading, setLoading] = useState(false)



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

        setLoading(true)

        const userData = {
            firstname,
            lastname,
            email,
            password,
            userimage

        }

        try {
            const res = await register(userData)
            console.log(res)
            navigate("/")
            // alert(res?.data.message)
            // alert(res?.data.data)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }

        
    }



  return (
    <div>

        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-[28rem]">
                <h2 className="mb-10 text-center p-3 bg-purple-400 text-white text-xl font-bold rounded">
                    Welcome To MovieCritic
                </h2>

            <form onSubmit={handleResistration} className="flex flex-col gap-6">
            
                <div className="flex justify-center">
                    {preview ? (
                    <img
                        src={preview}
                        alt="preview"
                        className="w-24 h-24 object-cover rounded-full  mb-5 cursor-pointer hover:opacity-80 transition"
                        onClick={() => fileInputRef.current?.click()}
                    />
                    ) : (
                    <div
                        className="w-24 h-24 flex items-center justify-center text-gray-500 bg-gray-200 rounded-full  border-cyan-500 mb-5 cursor-pointer hover:bg-gray-300 transition"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        Upload
                    </div>
                    )}
                    <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleUserImage}
                    />
                </div>

           
                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstname}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />

            
                    <button
                        type="submit"
                        disabled={loading}
                        className={`px-4 py-2 rounded text-white font-semibold flex items-center justify-center gap-2 transition duration-200
                        ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-purple-400 hover:bg-blue-700"}`}
                    >
                        {loading ? (
                        <div className="flex items-center justify-center gap-2">
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Registering...</span>
                        </div>
                        ) : (
                            "Register"
                        )}
                    </button>
                </form>
            </div>
        </div>









        {/* <h2 className="mb-10 text-center p-3 bg-cyan-500">Hi this is register page !!</h2>
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
            
            <button type="submit" disabled = {loading} className={`px-4 py-2 rounded text-white flex item-center justify-center gap-2
                    ${loading ? "bg-gray-400 cursor-not-allowed": "bg-blue-600 hover:bg-blue-700"}`}
                >

                {
                    loading ? (
                        <div className="flex item-center justify-center">
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Registering...</span>
                        </div> 
                    ) : (
                        "Register"
                    )
                
                }
                
            </button>
        </form>
         */}
        
    </div>
  )
}
