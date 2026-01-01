
import api from '../services/api'


interface LoginDetails {
    email: string,
    password: string
}



export const login = async ({email, password}: LoginDetails) => {

    try {
        const result = await api.post(
            '/auth/login',
            {
                email: email,
                password: password
            }
        )

        console.log(result)

        
    } catch (err) {
        console.log(err)
    }
   
}