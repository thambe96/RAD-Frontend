import { NavLink } from "react-router-dom"
import UserDetails from "../UserDetails"
import RequestBtn from "./RequestBtn"
import LogoutBtn from "../LogoutBtn"
import { useAuth } from "../../context/authContext"

export default function UserNavaBar() {

    const navLinkStyels: string = "hover:bg-purple-300 hover:text-white cursor-pointer"
    const {user} = useAuth()



  return (
    <div className="w-full flex justify-evenly items-center bg-purple-200">

        <div className="h-full">
            <UserDetails />
        </div>
        <div className="flex justify-evenly items-center gap-5">
            <NavLink to={'/userLayout/userHome'}  className={navLinkStyels}>Home</NavLink>
            <NavLink to={'/userLayout/contributors'} className={navLinkStyels}>Contributors</NavLink>
            <NavLink to={'/userLayout/donation'} className={navLinkStyels}>Donation</NavLink>
            {user?.status === "DEFAULT" && <NavLink to={'/userLayout/wishlist'} className={navLinkStyels}>Wish-list</NavLink>}
            {user?.status === "APPROVED" && <NavLink to={'/userLayout/myreviews'} className={navLinkStyels}>My-review</NavLink>}
            {user?.status === "APPROVED" &&  <NavLink to={'/userLayout/addreview'}className={navLinkStyels}>Add-Review</NavLink>}
        </div>
        <div>
            <RequestBtn />
        </div>
    
  

        <div>
            <LogoutBtn/>
        </div>
    </div>
  )
}
