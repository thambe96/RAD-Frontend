import { useId } from "react"
import api from "./api"


export const postComment = async (movieId: any, userId: string, comment: string) => {
    // alert(movieId + " : " +userId + " : " +comment)
    if (!movieId || !useId || !comment) {
        return
    }
    const res = await api.post('comments/addComment', {movieId, userId, comment})
    // alert("comment object : " + res.data)
    return res.data
}

 
export const fetchAllcommentsById = async (movieId: any) => {
    const res = await api.get(`comments/fetchAllCommentsbyId/${movieId}`)
    return res.data
}