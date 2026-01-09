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
        
    

        {
            // contributors && contributors.map(contributor => <div>{contributor?.firstname}</div>)

        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Contributors</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {contributors.map((contributor) => (
            <div
                key={contributor._id}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
            >
                <img
                src={contributor.imageURL}
                alt={`${contributor.firstname} ${contributor.lastname}`}
                className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-purple-400"
                />
                    <h3 className="text-lg font-semibold text-gray-800">
                    {contributor.firstname} {contributor.lastname}
                    </h3>
                </div>
                ))}
            </div>
        </div>

        }


    </div>
  )
}
