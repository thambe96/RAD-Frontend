
import { createContext, useContext, useEffect, useState } from "react";
import { getUserDetails } from "../services/auth";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AuthContext = createContext<any>(null)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthProvider = ({children}: any) => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const accesToken = localStorage.getItem("accessToken")

        // const fetchUserData = async () => {

        //     try {
        //         const res = await getUserDetails()
        //         setUser(res.data.data)
        //     } catch (err) {
        //         setUser(null)
        //         console.error(err)
        //     } finally {
        //         setLoading(false)
        //     }
            
        // }   

        // if (accesToken) {
        //     fetchUserData()
        // } else {
        //     setUser(null)
        //     setLoading(false)

        // }

        // console.log("User updated:", user)
        // console.log("Loading:", loading)

        if (accesToken) { 

            getUserDetails()
            .then ((res) => {
                setUser(res.data)
            })
            .catch ((err) => {
                setUser(null)
                console.error(err)
            })
            .finally (()=> {
                setLoading(false)
            }) 

        } else {
            setUser(null)
            setLoading(false)
        }


    }, [])


    return (
        <AuthContext.Provider value = {{user, setUser, loading}}>
            {children}
        </AuthContext.Provider>

    )

}


// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("Allowed only within AuthProvide")
    }
    return context
}

