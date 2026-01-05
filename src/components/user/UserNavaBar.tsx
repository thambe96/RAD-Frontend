import { NavLink } from "react-router-dom"
import UserDetails from "../UserDetails"
import RequestBtn from "./RequestBtn"
import LogoutBtn from "../LogoutBtn"

export default function UserNavaBar() {
  return (
    <div className="w-full flex justify-evenly items-center bg-purple-200">
        <div className="flex justify-evenly items-center gap-5">
            <NavLink to={'/userLayout/userHome'} >HOME</NavLink>
            <NavLink to={'/userLayout/contributors'} >CONTRIBUTORS</NavLink>
            <NavLink to={'/userLayout/wishlist'} >WISHLIST</NavLink>
            <NavLink to={'/userLayout/myreviews'} >MYREVIEWS</NavLink>
            <NavLink to={'/userLayout/addreview'} >ADDREVIES</NavLink>
        </div>
        <div>
            <RequestBtn />
        </div>
    
        <div className="h-full">
            <UserDetails />
        </div>

        <div>
            <LogoutBtn/>
        </div>
    </div>
  )
}
