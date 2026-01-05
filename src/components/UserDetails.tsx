import { useAuth } from "../context/authContext"


export default function UserDetails() {


  const { user } = useAuth()




  return (
    <div className='h-full flex  justify-between items-center gap-5 bg-gray-200'>
        <div>{user?.email}</div>
        <div className="w-12 h-12 border-2 border-purple-30000 rounded-full overflow-hidden">
          <img src= {user?.imageURL} alt="" className="w-full h-full object-cover rounded-full"/>
        </div>
    </div>
  )
}
