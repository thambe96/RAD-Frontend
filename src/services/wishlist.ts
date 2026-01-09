
import api from "./api"

export const addToWishList = async (userId: string, movieReviewId: string) => {
    try {

        alert('Add to wish list: ' + userId + " : " + movieReviewId)  

        const res = await api.post(`wishLIst/addToWishList/${userId}?movieReviewId=${movieReviewId}`)
        return res.data
    } catch (error) {
        console.error(error)
    }
}


export const  removeFromWishList = async (userId: string, movieReviewId: string) => {
    try {
        const res = await api.delete(`wishLIst/removeFromWishList/${userId}?movieReviewId=${movieReviewId}`)
        return res.data
    } catch (error) {
        console.error(error)
    }
}


export const fethWishListData = async (userId: string) => {
    try {
        alert("fetchWishlist: " + userId)

        const res = await api.get(`wishLIst/fetchWishList/${userId}`)
        alert("Fetch wish List Data : " + res)
        return res.data
    } catch (error) {
        console.error(error)
    }

}