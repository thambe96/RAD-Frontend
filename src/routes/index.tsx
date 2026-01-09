
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
import Donation from "../pages/user/Donation"


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
            // <div className="text-center py-20">
            //     <h2 className="text-xl font-bold mb-2">Access Denied</h2>
            //     <p>You do not have permission to view this page</p>
            // </div>

                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <div className="bg-white shadow-lg rounded-lg p-10 text-center border border-red-400 max-w-md">
                        {/* Icon */}
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-red-100 rounded-full">
                        <svg
                            className="w-8 h-8 text-red-500"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v2m0 4h.01M12 5a7 7 0 100 14a7 7 0 000-14z"
                            />
                        </svg>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl font-bold text-red-600 mb-3">NOT AUTHORIZED!</h2>

                        {/* Message */}
                        <p className="text-gray-700 mb-6">
                            permission required!
                        </p>

                        {/* Optional button */}
                        <button className="px-5 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
                        Go Back
                        </button>
                    </div>
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
            element : 
                <RequireAuth roles={["ADMIN"]}>
                    <AdminLayout />
                </ RequireAuth> ,
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
            element: 
                <RequireAuth roles={["USER", "CONTRIBUTOR"]}>
                    <UserLayout />
                </ RequireAuth>,
            
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
                    element: 
                        <RequireAuth roles={["CONTRIBUTOR"]}>
                            <MyReviews/>
                        </RequireAuth>
                },
                {
                    path: 'addreview',
                    element: 
                    <RequireAuth roles={["CONTRIBUTOR"]}>
                        <AddReview />
                    </ RequireAuth>
                    
                },
                {
                    path: 'movieDetail/:id',
                    element: <MovieRevieExpand />
                }, 
                {
                    path: 'donation',
                    element: <Donation/>
                }
            ]
        }
    ])



  return (
    < RouterProvider router={router} />
  )
}
