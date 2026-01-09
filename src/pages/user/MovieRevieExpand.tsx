import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieReviewById } from "../../services/movieReviewPost"
import Comment from "../../components/user/Comment"
import { postComment, fetchAllcommentsById } from "../../services/comment"
import { useAuth } from "../../context/authContext"



export default function MovieRevieExpand() {

    const {id} = useParams<{ id: string}>() 
    const [movieDetail, setMovieDetail] = useState("")
    const [comment, setComment] = useState("")
    const {user} = useAuth()

    const [commentList, setCommentList] = useState([])




    useEffect(() => {

        if (!id) {
            return
        }

        const fetchMovie = async () => {
            const fullMovieDetail = await getMovieReviewById(id)
            setMovieDetail(fullMovieDetail)
        }

        const fetchComments = async () => {
            const res = await fetchAllcommentsById(id)
            // alert("Comment list: " + res)
            setCommentList(res)
        }

        fetchMovie()
        fetchComments()

    }, [id])

    const handlePostcomment = () => {

        postComment(id, user?._id, comment)
        const fetchComments = async () => {
            const res = await fetchAllcommentsById(id)
            // alert("Comment list: " + res)
            setCommentList(res)
        }

        fetchComments()
        
    }



  return (
    <div >

        <div className="flex flex-col items-center">

            <div className="w-3/4 mb-6 mt-10 flex justify-center">
                <img
                src={movieDetail.movieImageURL} 
                alt={movieDetail.title}
                className=" h-96 object-cover rounded-md shadow-md"
                />
            </div>

    
            <div className="w-3/4 border-2 border-purple-200 rounded-md p-4 bg-white mb-6">
                <h3 className="text-sm text-gray-500 mb-2">
                Movie Review — ID: {movieDetail?._id}
                </h3>
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                {movieDetail.title}
                </h1>
                <p className="text-gray-700 leading-relaxed">{movieDetail.content}</p>
            </div>

            <div className="w-3/4 mb-4">
                <textarea
                    placeholder="Write your comment..."
                    className="w-full border-2 border-purple-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    rows={3} 
                    value={comment}
                    onChange={(e) => {setComment(e.target.value)}}
                />
                <button
                    className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-700" 
                    onClick={handlePostcomment}
                >
                    Add Comment
                </button>
            </div>


            <div className="w-3/4 flex flex-col items-start gap-2">
                
                {
                    commentList.map((comment) => (
                        <Comment
                        key={comment._id}                
                        userImage={comment?.user?.imageURL}
                        comment={comment?.userComment}
                        fname={comment?.user?.firstname}
                        lname={comment?.user?.lastname}
                        />
                    ))
                }          

            
            </div>  

        </div>

    </div>
  )
}
