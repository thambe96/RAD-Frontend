import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import type { RootState, AppDispatch } from "../../redux/index"
import { addToWishlist, removeFromWishlist } from "../../redux/wishlistSlice"
import { useAuth } from "../../context/authContext"


type ReviewPostCardData = {
  imageURL:string
  title: string
  categories: string[]
  id: string
}


export default function ReviewPostCard({imageURL, title, categories, id}: ReviewPostCardData) {

  const dispatch = useDispatch<AppDispatch>()
  const wishlist = useSelector((state: RootState) => state.wishlist.items)
  // const inWishlist = wishlist?.includes(id)
  // const inWishlist = wishlist?.some(item => item._id === id)
  // const wishlistIds = wishlist.map(item => item.favouriteMovieReviews._id)
  const wishlistIds = wishlist
  

  const inWishlist = wishlistIds.includes(id)

  const {user} = useAuth()
  const userId: string = user?._id

  // alert("Wishlist: " + JSON.stringify(wishlist));

  // alert("movie id: " + id)
  // alert("inWishlist" + inWishlist)
  // console.log("This is Wish List : " + JSON.stringify(wishlist))
  
  const navigate = useNavigate()

  
  const toggleWishlist = () => {

    if (!userId) {
      return
    }

    if (inWishlist) {
      dispatch(removeFromWishlist({ userId,  movieReviewId: id}))
    } else {
      dispatch(addToWishlist({userId, movieReviewId: id}))
    }
  }

  return (
    <div key={id} className="w-72 h-136 rounder-lg shadow-sm bg-white  mt-10 overflow-hiddern">

      <div className="w-full h-2/3 overflow-hidden" onClick={() => navigate(`/userLayout/movieDetail/${id}`)}>
        <img src = {imageURL} alt="no img"  className="w-full h-full bg-cyan-500 object-cover"/>
      </div>
      <h1 className="text-center font-semibold text-lg mt-2">{title}</h1>
      <div className="flex flex-wrap justify-center gap-2 mt-3 px-2">

          {
            Array.isArray(categories) && categories.map(category => 
              <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">{category}</span>
            )
          }

      </div>

      <button 
        onClick={toggleWishlist}
        className= {`px-4 py-2 rounded ${inWishlist ? "bg-red-500": "bg-green-500"}`}
        >
          {inWishlist ? "Remove" : "add"}
      </button>

    </div>
  )
}
