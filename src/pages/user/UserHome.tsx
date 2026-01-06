import { useEffect, useState } from "react";
import ReviewPostCard from "../../components/user/ReviewPostCard";
import { getAllMovieReviews } from "../../services/movieReviewPost";



export default function UserHome() {

  type MovieReview = {
    _id: string
    title: string,
    content: string,
    categories: string[],
    movieImageURL: string,
    contributor: string
  
  }

  const [movieReviews, setMovieReviews] = useState<MovieReview[]>([])

 
  useEffect(() => {

    const fetMovieReviews = async () => {
      try {
        const res = await getAllMovieReviews()
        setMovieReviews(res)
      } catch (error) {
        console.error(error)
      }
    }

    fetMovieReviews()},[])

  


  return (
    <div className="flex flex-wrap justify-center gap-4">

      {
        movieReviews.map(movieReview => 
          <ReviewPostCard 

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
