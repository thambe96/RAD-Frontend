import { useAuth } from "../../context/authContext"
import { updateDefaultStatus } from "../../services/auth"


export default function RequestBtn() {

    const {user, setUser} = useAuth()


    const handleRequestBtn = async () => {
        alert("hi bye!! "+  user._id)

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
        return <div className="p-2 bg-purple-300 rounded-lg hover:bg-purple-400 hover:text-white cursor-pointer">PENDING</div>
    }



  return (

    
    <button onClick={handleRequestBtn} className="h-full bg-gray-300">
        Become Cotributor
    </button>
       
  )
}
