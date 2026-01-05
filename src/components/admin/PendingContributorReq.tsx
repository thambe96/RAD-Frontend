import { useAuth } from "../../context/authContext"


type PendingContributorReqProps = {
   
    userImage: string
    username: string
    status: string
    userId: string
    onApprove: (id: string) => void


}
export default function PendingContributorReq({userImage, username, status, userId, onApprove}: PendingContributorReqProps) {

    const { setUser } = useAuth()



    const handleRejection = () => {
        // alert('hi Approved: id : ' + userId)
    }


  return (
    <div className="w-3/4 h-40 border-2 border-cyan-500 flex justify-evenly items-center mt-5 mb-5">
        
        <div className="w-24 h-24 border-2 border-purple-300 rounded-full overflow-hidden">
          <img src= {userImage} alt="" className="w-full h-full object-cover rounded-full"/>
        </div>
        <div>{username}</div>
        <div>{status}</div>
        <div>
            <button onClick = {() => onApprove(userId)} className="px-3 py-1 bg-green-500 text-white rounded">Approved</button>
            <button onClick = {() => handleRejection()} className="px-3 py-1 bg-red-500 text-white rounded ml-2">Rreject</button>
        </div>

        
    </div>
  )
}
