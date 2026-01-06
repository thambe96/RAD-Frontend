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