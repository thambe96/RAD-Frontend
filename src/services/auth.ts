
import api from '../services/api'


interface LoginDetails {
    email: string,
    password: string
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