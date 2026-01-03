
import api from '../services/api'


interface LoginDetails {
    email: string,
    password: string
}

interface UserData {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    userimage: File | null
      
}



export const login = async ({email, password}: LoginDetails) => {

    try {

        
        const res = await api.post(
            'auth/login',
            {
                email: email,
                password: password
            }
        )

        // alert(`This is the result:\n${JSON.stringify(result.data, null, 2)}`)
        return res

        
    } catch (err) {
        console.log(err)
        
    }
   
}


export const register = async (userData : UserData) => {
    const {firstname, lastname, email, password, userimage} = userData
    
    try {

        const res = await api.post( 
            'auth/register',
            {
                firstname,
                lastname,
                email,
                password,
                userimage
            },
            {
                headers: {
                 'Content-Type': 'multipart/form-data'
                }
            }

        )

        return res

    } catch (err) {
        console.log(err)
    }


}


export const getUserDetails = async () => {

    try {
        const res = await api.get('auth/getUser')
        return res.data

    } catch (err) {
        console.log(err)
    }
    
}

export const refreshtokens = async (refreshToken: string) => {
    const res = await api.post('auth/refrsh', {token: refreshToken})
    return res.data
}