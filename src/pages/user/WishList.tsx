import type { RootState } from "@reduxjs/toolkit/query"
import { useSelector } from "react-redux"


export default function WishList() {

    const wishlistFull = useSelector((state: RootState) => state.wishlist.fullItems)


  return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {wishlistFull.map((movie) => (
                    <div
                    key={movie._id}
                    className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            src={movie.movieImageURL}
                            alt={movie.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{movie.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}
