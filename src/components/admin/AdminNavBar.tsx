
import { NavLink } from "react-router-dom"
import LogoutBtn from "../LogoutBtn"
import UserDetails from "../UserDetails"
export default function AdminNavBar() {
  return (
    <>

      <div className="f-full w-full flex justify-between items-center gap-5 bg-purple-200">

        <div className="flex items-center gap-5 mr-20 mx-20">
            <UserDetails />
        </div>

        <div className="flex gap-4 ml-20">
          <NavLink to={'managerequests'}>Requests</NavLink>
          <NavLink to={'manageprofiles'}>Profiles</NavLink>
          <NavLink to={'managereviewposts'}>Reviews</NavLink>
          <NavLink to={'managereports'}>Reports</NavLink>
        </div>

        <div className="flex items-center gap-5 mr-20">
          <LogoutBtn />
          
        </div>
      
      </div>

    
    
    </>
 
        
        
  )
}
