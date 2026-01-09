import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieReviewById } from "../../services/movieReviewPost"
import Comment from "../../components/user/Comment"



export default function MovieRevieExpand() {
    const {id} = useParams<{ id: string}>()

    const [movieDetail, setMovieDetail] = useState("")


    useEffect(() => {

        if (!id) {
            return
        }

        const fetchMovie = async () => {
            const fullMovieDetail = await getMovieReviewById(id)
            setMovieDetail(fullMovieDetail)
        }

        fetchMovie()

    }, [id])



  return (
    <div >

        <div className="flex flex-col border-4 border-green-300 items-center">

            <div  className="h-3/4 w-3/4 border-2 border-cyan-200 mt-20 mb-20">
                <h3>MovieRevieExpand Full Review This is id {movieDetail?._id}</h3>
                <h1>{movieDetail.title}</h1>
                <p>{movieDetail.content}</p>
            </div>

            <div className="w-3/4 flex flex-col items-start gap-2">
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>  

        </div>

                 

    
       
       
    
    </div>
  )
}
