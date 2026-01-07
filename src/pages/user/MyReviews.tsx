import { useState, useEffect } from "react"
import { useAuth } from "../../context/authContext"
import { getMyMovieReviews } from "../../services/movieReviewPost"
import MyReviewPostCard from "../../components/user/MyReviewPostCard"


export default function MyReviews() {

  
    type MovieReview = {
      _id: string
      title: string,
      content: string,
      categories: string[],
      movieImageURL: string,
      contributor: string
    
    }
  
    const [myMovieReviews, setMyMovieReviews] = useState<MovieReview[]>([])
    const {user, loading} = useAuth()
  
   
    useEffect(() => {
  
      const fetMovieReviews = async () => {

        if (!user?._id) {
          return 
        }

        try {

          
          const res = await getMyMovieReviews(user?._id)
          
          console.log("my movie revies: ", res)
          setMyMovieReviews(res)
        } catch (error) {
          console.error(error)
        }
      }

       if (!loading) {
        fetMovieReviews();
      }

      // fetMovieReviews()}
  
    },[loading, user])



  return (
       <div className="flex flex-wrap justify-center gap-4">
    
          {
             myMovieReviews && myMovieReviews.map(movieReview => 
              <MyReviewPostCard
    
                imageURL = {movieReview.movieImageURL}
                title = {movieReview.title}
                categories = {movieReview.categories}
                id = {movieReview._id}
    
              />
    
            )
    
          }
        
          
    
        </div>
  )
}
