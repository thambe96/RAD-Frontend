import { useEffect, useState } from "react"
import { getPendingStatusList } from "../../services/auth"
import PendingContributorReq from "../../components/admin/PendingContributorReq"

export default function ManageRequests() {
    const [pendingContributors, setPendingContributors] = useState([])

    useEffect(() => {

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

    }, [])


  return (
    <div className="flex flex-col items-center">

    {
      pendingContributors.map(user => (

        <PendingContributorReq 
          key={user?._id}
          userImage = {user?.imageURL}
          username = {user?.firstname}
          status = {user?.status}
        />

      ))

    } 


{/* 
      
        <PendingContributorReq 
          userImage = 'https://res.cloudinary.com/dk0c1qe0x/image/upload/v1767293501/gwwty6fmefkcglekrxi3.jpg'
          username = "mehedi"
          status = "Pending"
        />
        <PendingContributorReq 
          userImage = 'https://res.cloudinary.com/dk0c1qe0x/image/upload/v1767293501/gwwty6fmefkcglekrxi3.jpg'
          username = "mehedi"
          status = "Pending"
        />

        <PendingContributorReq 
          userImage = 'https://res.cloudinary.com/dk0c1qe0x/image/upload/v1767293501/gwwty6fmefkcglekrxi3.jpg'
          username = "mehedi"
          status = "Pending"
        />
        <PendingContributorReq 
          userImage = 'https://res.cloudinary.com/dk0c1qe0x/image/upload/v1767293501/gwwty6fmefkcglekrxi3.jpg'
          username = "mehedi"
          status = "Pending"
        />
        <PendingContributorReq 
          userImage = 'https://res.cloudinary.com/dk0c1qe0x/image/upload/v1767293501/gwwty6fmefkcglekrxi3.jpg'
          username = "mehedi"
          status = "Pending"
        />
        <PendingContributorReq 
          userImage = 'https://res.cloudinary.com/dk0c1qe0x/image/upload/v1767293501/gwwty6fmefkcglekrxi3.jpg'
          username = "mehedi"
          status = "Pending"
        />
        <PendingContributorReq 
          userImage = 'https://res.cloudinary.com/dk0c1qe0x/image/upload/v1767293501/gwwty6fmefkcglekrxi3.jpg'
          username = "mehedi"
          status = "Pending"
        />  */}

    </div>

    
  )
}
