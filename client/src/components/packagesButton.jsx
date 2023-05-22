import { Link } from "react-router-dom"

export function PackagesButton() {
    
    return (
       <div className="border">
        <Link to="/packages">
            <div className="text-2xl">Packages</div>
            <div className="text-xl">View</div>
            <div className="text-lg">Create</div>
            <div className="text-lg">Edit</div>
            <div className="text-lg">Delete</div>
       </Link>
       </div>
    )
}