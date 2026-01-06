import { useRef, useState, type ChangeEvent, type FormEvent } from "react"



export default function AddReview() {

    const [movieTitle, setMovieTitle] = useState("")
    const [movieContent, setMovieContent] = useState("")
    // const [categories, setCatogories] = useState<string[]>([])
    const [movieImage, setMovieImage] = useState<File | null>(null)
    const movieImageInputRef = useRef<HTMLInputElement | null>(null)
    const [previeMovieImage, setPrevieMovieImage] = useState("")
    const [selectedCategories, setSelectedCatogories] = useState<string[]>([])



    const categories = [
        "COMEDY",
        "ACTION",
        "THRILLER",
        "TOMANCE",
        "DETECTIVE",
        "WAR",
        "DRAMA"

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

    const handlePostSubmission = (e: FormEvent) => {
        e.preventDefault()
        alert("Do you want to submit the review!")
    }

   

  return (
    <div>

        <form onSubmit = {handlePostSubmission} className="flex flex-col">


            <div className="flex justify-center">
                {
                 previeMovieImage ? <img 
                    src= {previeMovieImage} alt="movie" 
                    className="w-36 h-36 rounded-lg object-cover border-2 border-purple-500 overflow-hidden" 
                    onClick={() => movieImageInputRef.current?.click()} /> :
                    <div 
                        className="w-36 h-36 rounded-full object-cover border-2 border-purple-500 overflow-hidden" 
                        onClick={() => movieImageInputRef.current?.click()}>
                        
                    </div>
                }

                <input type="file" accept="image/*" ref ={movieImageInputRef} className="hidden" onChange={handleMovieImage}/>
            </div>
            

            <div className="flex flex-col">
                <label>Movie Title</label>
                <input type="text" placeholder="title" className="w-full h-10 border-2 border-purple-200 rounded-lg"
                    onChange={(e) =>setMovieTitle(e.target.value)}
                />
            </div>
            
            {/* <input type="text" placeholder="content" className="w-full h-5 border-2 border-purple-200 rounded-lg"
                onChange={(e) =>setMovieContent(e.target.value)}
            /> */}

            <div className="flex flex-col">
                <label> Movie Content</label>
                <textarea 
                    value={movieContent} 
                    onChange={(e) => setMovieContent(e.target.value)} 
                    placeholder="your review goes here..." 
                    rows={6} 
                    className="border-2 border-purple-200"
                />
            </div>

            <label htmlFor="">Slect Category</label>

            <div className="flex flex-col border-4 border-red-500 items-center">

                {
                    categories.map(category => 
                        <div key={category} className="border-4 border-cyan-200 mb-2 mt-2 flex justify-between w-30">
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

            </div>
            
            <div>
                <button type="submit" className="p-2 bg-green-400">Post</button>
                <button className="p-2 bg-red-400" onClick={(e) => e.preventDefault()}>Cancel</button>

            </div>
            
         
        </form>
       


    </div>
  )
}
