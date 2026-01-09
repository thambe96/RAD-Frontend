import { useParams } from "react-router-dom"

export default function MovieRevieExpand() {
    const {id} = useParams()

  return (
    <div>MovieRevieExpand Full Review This is id {id}</div>
  )
}
