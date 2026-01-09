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
    // <div className="w-3/4 h-40 border-2 border-cyan-500 flex justify-evenly items-center mt-5 mb-5">
        
    //     <div className="w-24 h-24 border-2 border-purple-300 rounded-full overflow-hidden">
    //       <img src= {userImage} alt="" className="w-full h-full object-cover rounded-full"/>
    //     </div>
    //     <div>{username}</div>
    //     <div>{status}</div>
    //     <div>
    //         <button onClick = {() => onApprove(userId)} className="px-3 py-1 bg-green-500 text-white rounded">Approved</button>
    //         <button onClick = {() => handleRejection()} className="px-3 py-1 bg-red-500 text-white rounded ml-2">Rreject</button>
    //     </div>

        
    // </div>
        <div className="w-3/4 max-w-xl bg-white shadow-lg rounded-lg  flex justify-between items-center p-5 mt-5 mb-5 hover:shadow-xl transition-shadow duration-300">
   
            <div className="flex-shrink-0">
                <div className="w-24 h-24 border-2 border-purple-300 rounded-full overflow-hidden">
                <img
                    src={userImage}
                    alt={username}
                    className="w-full h-full object-cover rounded-full"
                />
                </div>
            </div>

      
            <div className="flex flex-col items-start ml-6 flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">{username}</h3>
                <p className="text-sm text-gray-600 mt-1">{status}</p>
            </div>

  
        <div className="flex gap-2">
                <button
                onClick={() => onApprove(userId)}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                >
                Approve
                </button>
                <button
                onClick={() => handleRejection()}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                Reject
                </button>
            </div>
        </div>




  )
}
