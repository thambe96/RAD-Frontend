import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fethWishListData, addToWishList, removeFromWishList } from "../services/wishlist"



interface WishListState {
    items: string[],
    fullItems: any[],
    loading: boolean

}


const initialState: WishListState = {
    items: [],
    fullItems: [],
    loading: false

}


export const fetchWishlist = createAsyncThunk(
    "wishlist/fetchWishlist",
    async (userId: string) => {
        const res = await fethWishListData(userId)
        return res
    }

)


export const addToWishlist = createAsyncThunk(
    "wishlist/addToWishlist",
    async ({ userId, movieReviewId}: { userId: string, movieReviewId: string}) => {
        const res = await addToWishList(userId, movieReviewId)
        console.log(res)
        return movieReviewId
    }

)

export const removeFromWishlist = createAsyncThunk(
    "wishlist/removeFromWishList",
    async ({ userId, movieReviewId}: { userId: string, movieReviewId: string}) => {
        const res = await removeFromWishList(userId, movieReviewId)
         console.log(res)
        return movieReviewId
    }
)

const wishlistSlice = createSlice( {
    name: "wishlist",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWishlist.fulfilled, (state, action) => {
            // state.items = action.payload ?? []

            state.items = action.payload ? action.payload.map(
                (item: any) => item.favouriteMovieReviews._id
            ) : []

            state.fullItems = action.payload ? action.payload.map((item: any) => item.favouriteMovieReviews) : []



        }).addCase(addToWishlist.fulfilled, (state, action) => {
            state.items.push(action.payload)

            state.fullItems.push(action.payload)

        }).addCase(removeFromWishlist.fulfilled, (state, action) => {
            state.items = state.items.filter((id) => id !== action.payload)

            state.fullItems = state.fullItems.filter((movie) => movie._id !== action.payload)

        })
    }
})

export default wishlistSlice.reducer