import { useEffect, useState } from "react"
import { getPendingStatusList, approveContributorReq } from "../../services/auth"
import PendingContributorReq from "../../components/admin/PendingContributorReq"
import { useAuth } from "../../context/authContext"

export default function ManageRequests() {

    type User = {
      _id: string
      firstname: string
      lastname: string
      email: string
      password: string
      roles: string[]
      imageURL: string
      status: string
      __v: number
    }


    const [pendingContributors, setPendingContributors] = useState<User[]>([])
    // const {setUser} = useAuth() 


    const updatePendingContributorList = () => {

      try {

        const fetchPendingContributorsList = async () => {
        const res = await getPendingStatusList()
        
        setPendingContributors(res) // res.data

        // console.log("Pending requests: " +res.length)
        // console.log("Pending requests: " +res[0].firstname)
        // console.log("Pending requests: " +res[0].lastname)
        // console.log("Pending requests: " +res[0].email)

        } 
        
        fetchPendingContributorsList()
        
      } catch (error) {
        console.error(error)
      }

    }

    useEffect(updatePendingContributorList, [])







    const handleApproval = (userId: string) => {
        // alert('hi Approved: id : ' + userId)

      const fetchResults = async () => {

          try {
              alert("userId: " + userId)
              const res =  await approveContributorReq(userId, "APPROVED")
              console.log("APPROVED USER: ", res)
              // setUser(res)
          } catch (err) {
              alert("faild request")
              console.error(err)
          }
          
      }

      fetchResults()
      updatePendingContributorList()


    }





  return (
    <div className="flex flex-col items-center">

    {
      pendingContributors.map(user => (

        <PendingContributorReq 
          key = {user?._id}
          userImage = {user?.imageURL}
          username = {user?.firstname}
          status = {user?.status}
          userId = {user?._id}
          onApprove={handleApproval}
        />

      ))

    } 



    </div>

    
  )
}
