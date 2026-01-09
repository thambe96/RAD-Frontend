import { useRef, useState, type ChangeEvent, type FormEvent } from "react"
import { useAuth } from "../../context/authContext"
import { createMovieReviewPost } from "../../services/movieReviewPost"



export default function AddReview() {

    const [movieTitle, setMovieTitle] = useState("")
    const [movieContent, setMovieContent] = useState("")
    // const [categories, setCatogories] = useState<string[]>([])
    const [movieImage, setMovieImage] = useState<File | null>(null)
    const movieImageInputRef = useRef<HTMLInputElement | null>(null)
    const [previeMovieImage, setPrevieMovieImage] = useState("")
    const [selectedCategories, setSelectedCatogories] = useState<string[]>([])
    const [movieDetailsSavingStatus, setMovieDetailsSavingStatus] = useState(false)

    const {user} = useAuth()



    const categories = [
        "COMEDY",
        "ACTION",
        "THRILLER",
        "TOMANCE",
        "DETECTIVE",
        "WAR",
        "DRAMA",
        "HORROR"

    ]


    const handleMovieImage = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const image = e.target.files?.[0]
        if (image) {
            setPrevieMovieImage(URL.createObjectURL(image))
            setMovieImage(image)
        }

    }



    const handleChekcboxChange = (catogory: string) => {
        setSelectedCatogories((prev) => 
            prev.includes(catogory) ? prev.filter(c => c !== catogory) : [ ...prev, catogory]
        )

    }

    const handlePostSubmission = async (e: FormEvent) => {
        e.preventDefault()

        setMovieDetailsSavingStatus(true)

        const movieReviePostData = {
            title: movieTitle,
            content: movieContent,
            categories: selectedCategories,
            userimage: movieImage,
            contributor: user?._id

        }

        try {

            const res = await createMovieReviewPost(movieReviePostData)
            console.log(res)


        } catch (error) {
            console.error(error)
        } finally {
            setMovieDetailsSavingStatus(false)
        }
        


    }

   

  return (
    <div className="w-full flex flex-col items-center">

        <form onSubmit = {handlePostSubmission} className="w-3/4 flex flex-col  mt-10 mb-10">


            {/* <div className="flex justify-center">
                {
                 previeMovieImage ? <img 
                    src= {previeMovieImage} alt="movie" 
                    className="w-50 h-60  object-cover border-2 border-purple-500 overflow-hidden mt-10 mb-10" 
                    onClick={() => movieImageInputRef.current?.click()} /> :
                    <div 
                        className="w-50 h-60  object-cover border-2 border-purple-500 overflow-hidden text-center mt-10 mb-10" 
                        onClick={() => movieImageInputRef.current?.click()}>
                        select image
                    </div>
                }

                <input type="file" accept="image/*" ref ={movieImageInputRef} className="hidden" onChange={handleMovieImage}/>
            </div>
             */}

            <div className="flex justify-center">
                {previeMovieImage ? (
                    <div
                    className="w-64 h-72 bg-white shadow-lg rounded-lg overflow-hidden  mt-10 mb-10 cursor-pointer hover:shadow-xl transition-shadow duration-300"
                    onClick={() => movieImageInputRef.current?.click()}
                    >
                    <img
                        src={previeMovieImage}
                        alt="movie"
                        className="w-full h-full object-cover"
                    />
                    </div>
                ) : (
                    <div
                    className="w-64 h-72 flex items-center justify-center bg-gray-100 shadow-lg rounded-lg  mt-10 mb-10 cursor-pointer hover:bg-purple-50 transition"
                    onClick={() => movieImageInputRef.current?.click()}
                    >
                    <span className="text-gray-600 font-medium">Select Image</span>
                    </div>
                )}

                <input
                    type="file"
                    accept="image/*"
                    ref={movieImageInputRef}
                    className="hidden"
                    onChange={handleMovieImage}
                />
            </div>







            

            <div className="w-3/4 mx-auto bg-white shadow-lg rounded-lg p-6 mt-6 mb-6">
               
                <div className="flex flex-col mb-4">
                    <label className="text-gray-700 font-semibold mb-2">Movie Title</label>
                    <input
                    type="text"
                    value={movieTitle}
                    placeholder="Enter movie title..."
                    onChange={(e) => setMovieTitle(e.target.value)}
                    className="w-full h-12 px-4 border-2 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                    />
                </div>

               
                <div className="flex flex-col">
                    <label className="text-gray-700 font-semibold mb-2">Movie Content</label>
                    <textarea
                    value={movieContent}
                    onChange={(e) => setMovieContent(e.target.value)}
                    placeholder="Your review goes here..."
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition resize-none"
                    />
                </div>
            </div>













            {/* <div className="flex flex-col ml-10 mr-10">
                <label>Movie Title</label>
                <input type="text" value={movieTitle} placeholder="title" className="w-full h-10 border-2 border-purple-200 rounded-lg"
                    onChange={(e) =>setMovieTitle(e.target.value)}
                /> */}
            {/* </div> */}
            
            {/* <input type="text" placeholder="content" className="w-full h-5 border-2 border-purple-200 rounded-lg"
                onChange={(e) =>setMovieContent(e.target.value)}
            /> */}

            {/* <div className="flex flex-col ml-10 mr-10">
                <label> Movie Content</label>
                <textarea 
                    value={movieContent} 
                    onChange={(e) => setMovieContent(e.target.value)} 
                    placeholder="your review goes here..." 
                    rows={6} 
                    className="border-2 border-purple-200"
                />
            </div> */}


            <div className="w-3/4 mx-auto bg-white shadow-lg rounded-lg p-6 mt-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Category</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {categories.map((category) => (
                    <div
                        key={category}
                        className="flex items-center gap-2 p-3 border border-purple-200 rounded-md hover:bg-cyan-50 transition"
                    >
                        <input
                        type="checkbox"
                        id={category}
                        value={category}
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleChekcboxChange(category)}
                        className="w-4 h-4 text-cyan-500 focus:ring-cyan-400 rounded"
                        />
                        <label
                        htmlFor={category}
                        className="text-gray-700 font-medium cursor-pointer"
                        >
                        {category}
                        </label>
                    </div>
                    ))}
                </div>
            </div>





            

            {/* <div className="flex flex- justify-evenly gap-6 border-4 border-red-500 items-center ml-10 mr-10">
                <label htmlFor="">Slect Category</label>
                {
                    categories.map(category => 
                        <div key={category} className="border-4 border-cyan-200 mb-2 mt-2 flex flex-wrap gap-2 justify-center w-30">
                            <input 
                                type="checkbox"
                                id = {category}
                                value= {category}
                                checked = {selectedCategories.includes(category)}
                                onChange={() => handleChekcboxChange(category)}
                            
                            />
                            <label htmlFor = {category}>{category}</label>
                        </div>

                        
                    )
                }

            </div> */}
            
            <div  className="flex justify-center gap-4 mt-5 mb-5">
                        
                <button type="submit" disabled = {movieDetailsSavingStatus} className={`px-4 py-2 rounded text-white flex item-center justify-center gap-2
                        ${movieDetailsSavingStatus ? "bg-gray-400 cursor-not-allowed": "bg-purple-400 hover:bg-purple-700"}`}
                    >

                    {
                        movieDetailsSavingStatus ? (
                            <div className="flex item-center justify-center">
                                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                <span>Registering...</span>
                            </div> 
                        ) : (
                            "Save"
                        )
                    
                    }
                    
                </button>
                <button className="px-4 py-2 rounded text-white flex item-center justify-center gap-2 bg-red-200 hover:bg-red-400" onClick={(e) => e.preventDefault()}>Cancel</button>

            </div>
            
         
        </form>
       


    </div>
  )
}
