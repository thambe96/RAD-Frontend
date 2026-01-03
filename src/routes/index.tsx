
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Login from '../pages/Login'
import Register from "../pages/Register"
import Layout from "../components/Layout"
import Home from "../pages/Home"
import AdminDashBoard from "../pages/AdminDashBoard"
import PostReview from "../pages/PostReview"
import type { ReactNode } from "react"
import { useAuth } from "../context/authContext"


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
            path : '/layout',
            element : <Layout />,
            children: [
                {
                    path: 'home',
                    element: <Home />
                },
                {
                    path: 'admin',
                    element: 
                    <RequireAuth roles={["ADMIN"]}>
                        <AdminDashBoard />
                    </ RequireAuth>
                    
                }, 
                {
                    path: 'movieReview',
                    element: <PostReview />
                }
                
            ]
             
        }
    ])



  return (
    < RouterProvider router={router} />
  )
}
