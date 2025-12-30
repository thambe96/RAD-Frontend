

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from '../pages/Login'
import Register from "../pages/Register"
import Layout from "../components/Layout"
import Home from "../pages/Home"
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
                }
            ]
             
        }
    ])



  return (
    < RouterProvider router={router} />
  )
}
