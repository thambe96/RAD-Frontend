import { useNavigate } from "react-router-dom"


export default function LogoutBtn() {

    const navigate = useNavigate()

    const handlelogout = () => {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        navigate('/')
    }


  return (
    <button className="h-full bg-red-400 px-4 py-1 rounded-lg"
        onClick={handlelogout}
    >
        Logout
    </button>
  )
}
