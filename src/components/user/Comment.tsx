
export default function Comment( {userImage, comment, fname, lname}) {
  return (
    <div className="w-3/4 flex items-start gap-4 rounded-md p-4 bg-white shadow-sm mb-10">
  
        <img
            src= {userImage}
            alt="User avatar"
            className="w-12 h-12 rounded-full object-cover border border-gray-300"
        />

        <div className="flex-1">
            <p className="text-gray-800 leading-relaxed">
                {comment}
            </p>
            <span className="text-sm text-gray-500 mt-2 block">Posted BY {fname +" "+lname}</span>
        </div>
    </div>

  )
}
