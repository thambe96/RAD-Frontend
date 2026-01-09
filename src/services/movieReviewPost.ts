import api from "./api"

interface MovieReviewPostData {
    title: string
    content: string
    categories: string[]
    userimage: File | null
    contributor: string

}


export const createMovieReviewPost = async (movieReviePostData: MovieReviewPostData) => {
    const {title, content, categories, userimage, contributor} = movieReviePostData

    try {

        const res = await api.post(
            'movieReviewPost/createMovieReviewPost',
            {
                title,
                content,
                categories,
                userimage,
                contributor
            },
            {
                headers : {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )

        return res.data


    } catch (error) {
        console.error(error)
    }

}

export const getAllMovieReviews = async () => {

    try {

        const res = await api.get('movieReviewPost/getAllMovieReviews')
        return res.data

    } catch (error) {
        console.error(error)
    }

}


export const getMyMovieReviews = async (contributorId: string) => {

     try {
        console.log("request handler: " + contributorId)
        const res = await api.get(`movieReviewPost/getMyMovieReviews/${contributorId}`)
        return res.data

    } catch (error) {
        console.error(error)
    }

}



export const getMovieReviewById = async (movieId: string) => {
    try {

        alert("Id : " + movieId)

        const movieDetail = await api.get(`/movieReviewPost/getMovieReviewById/${movieId}`)
        return movieDetail.data

    } catch (error) {
        console.error(error)
    }
}