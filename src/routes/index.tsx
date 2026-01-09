
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Login from '../pages/Login'
import Register from "../pages/Register"

import PostReview from "../pages/admin/ManageReviesPosts"
import type { ReactNode } from "react"
import { useAuth } from "../context/authContext"
import UserLayout from "../components/user/UserLayout"
import UserHome from "../pages/user/UserHome"
import Contributors from "../pages/user/Contributors"
import MyReviews from "../pages/user/MyReviews"
import AddReview from "../pages/user/AddReview"
import WishList from "../pages/user/WishList"
import AdminLayout from "../components/admin/AdminLayout"
import ManageRequests from "../pages/admin/ManageRequests"
import ManageReviesPosts from "../pages/admin/ManageReviesPosts"
import ManageReports from "../pages/admin/ManageReports"
import ManageUserProfiles from "../pages/admin/ManageUserProfiles"
import MovieRevieExpand from "../pages/user/MovieRevieExpand"


type RequireAuthTypes = {children: ReactNode; roles?: string[]}

const RequireAuth = ({children, roles}: RequireAuthTypes) => {

    const {user, loading} = useAuth()

    // alert("This Require Auth user: " + user)
    // alert("This Require Auth loading: " + loading)

    console.log("This Require Auth user: " + user)
    console.log("This Require Auth loading: " + loading)

    if (loading) {
        <div className="flex flex-center justify-center h-screen bg-gray-100">
            <div className="w-16 h-16 border-4 border-cyan-500 border-dashed rounded-full animate-spin"></div>
        </div>
    }

    if (!user) {
        <Navigate to= "/" replace/>
    }


    if (roles && !roles.some((reqRole => user?.roles.includes(reqRole)))) {

        

        return (
            <div className="text-center py-20">
                <h2 className="text-xl font-bold mb-2">Access Denied</h2>
                <p>You do not have permission to view this page</p>
            </div>
        )
    }
    

    return (
        <>{children}</>
    )
}



export default function Router() {

    const router = createBrowserRouter([
        {   
            path : '/',
            element : <Login/>
        },
        {
            path : '/register',
            element : <Register/>
        },
        {
            path : '/adminlayout',
            element : <AdminLayout />
                /* <RequireAuth roles={["ADMIN"]}>
                    <AdminLayout />
                </ RequireAuth> */,
            children: [
                {
                    path: 'managerequests',
                    element: <ManageRequests />
                },
                {
                    path: 'managereviewposts',
                    element: <ManageReviesPosts />
                 
                }, 
                {
                    path: 'manageprofiles',
                    element: <ManageUserProfiles />
                }, 
                {
                    path: 'managereports',
                    element: <ManageReports />
                }
                
            ]
             
        },
        {
            path: '/userLayout',
            element: <UserLayout />,
            children: [
                {
                    path: 'userHome',
                    element: <UserHome />
                },
                {
                    path: 'contributors',
                    element: <Contributors />
                }, 
                {
                    path: 'wishlist',
                    element: <WishList/>
                },
                {
                    path: 'myreviews',
                    element: <MyReviews/>
                },
                {
                    path: 'addreview',
                    element: <AddReview />
                },
                {
                    path: 'movieDetail/:id',
                    element: <MovieRevieExpand />
                }
            ]
        }
    ])



  return (
    < RouterProvider router={router} />
  )
}
