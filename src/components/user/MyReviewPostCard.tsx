type MyReviewPostCardData = {
  imageURL:string
  title: string
  categories: string[]
  id: string
}


export default function MyReviewPostCard({imageURL, title, categories, id}: MyReviewPostCardData) {
  return (
    <div key={id} className="w-72 h-136 rounder-lg shadow-sm bg-white  mt-10 overflow-hiddern">

      <div className="w-full h-2/3 overflow-hidden">
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

    </div>
  )
}
