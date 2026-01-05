import { useAuth } from "../../context/authContext"


export default function RequestBtn() {

    const {user} = useAuth()


    const handleRequestBtn = () => {
        alert("hi bye!! "+  user.firstname)

        // if (user?.status === "DEFAULT" ) {

        // }

    }



  return (
    <button onClick={handleRequestBtn} className="h-full bg-gray-300">
        Become Cotributor
    </button>
       
  )
}
