import { NavLink } from "react-router-dom"
import UserDetails from "../UserDetails"
import RequestBtn from "./RequestBtn"
import LogoutBtn from "../LogoutBtn"

export default function UserNavaBar() {

    const navLinkStyels: string = "hover:bg-purple-300 hover:text-white cursor-pointer"

  return (
    <div className="w-full flex justify-evenly items-center bg-purple-200">
        <div className="flex justify-evenly items-center gap-5">
            <NavLink to={'/userLayout/userHome'}  className={navLinkStyels}>HOME</NavLink>
            <NavLink to={'/userLayout/contributors'} className={navLinkStyels}>CONTRIBUTORS</NavLink>
            <NavLink to={'/userLayout/wishlist'} className={navLinkStyels}>WISHLIST</NavLink>
            <NavLink to={'/userLayout/myreviews'} className={navLinkStyels}>MYREVIEWS</NavLink>
            <NavLink to={'/userLayout/addreview'}className={navLinkStyels}>ADDREVIES</NavLink>
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
