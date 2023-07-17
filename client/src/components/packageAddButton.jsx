import { Link } from "react-router-dom"

export function PackageAddButton({ addPackage }) {
    
    return (
        <button onClick={() => addPackage()} className="border border-black rounded-md hover:scale-110 hover:duration-200 p-1 mt-3 w-1/2"><Link to="/packages">Add</Link></button>
    )
}