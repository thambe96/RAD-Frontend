import { useEffect, useState} from "react"
import { getContributors } from "../../services/auth"

export default function Contributors() {

    
    const [contributors, setContributors] = useState([])
    


    const fetchContributors = async () => {
        try {
            const res = await getContributors()
            setContributors(res)
        } catch (err) {
            console.error(err)
        }
        
    }

    useEffect(() => {
        fetchContributors()
        
    }, [])

    console.log("contributors: ", contributors)



  return (
    <div>
        
        <h1 className="p-2 bg-purple-300 text-center">Contributors</h1>

        {
            contributors && contributors.map(contributor => <div>{contributor?.firstname}</div>)
        }


    </div>
  )
}
