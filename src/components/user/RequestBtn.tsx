import { useAuth } from "../../context/authContext"
import { updateDefaultStatus } from "../../services/auth"


export default function RequestBtn() {

    const {user, setUser} = useAuth()


    const handleRequestBtn = async () => {
        // alert("hi bye!! "+  user._id)

        // if (user?.status === "DEFAULT" ) {

        // }

        if (!user._id) {
            alert("no user id found")
            return 
        }



        try {
            const res = await updateDefaultStatus(user?._id)
            alert("User Data: " + res)
            setUser(res)

        } catch (error) {
            console.error(error)
        }

    }


    if (user?.status === 'PENDING') {
        return <div className="p-1 bg-red-200 rounded-lg hover:bg-red-400 hover:text-white cursor-pointer">PENDING</div>
    }

    if (user?.status === 'APPROVED') {
        return <div className="p-1 bg-green-200 rounded-lg text-sm hover:bg-green-400 hover:text-white cursor-pointer">APPROVED</div>
    }



  return (

    
    <button onClick={handleRequestBtn} className="p-1 bg-purple-300 rounded-lg text-sm hover:bg-red-200 hover:text-white cursor-pointer">
        Become-Cotributor
    </button>
       
  )
}
