import { Link } from "react-router-dom"

export function DriversButton() {
    
    return (
       <div className="border">
        <Link to="/drivers">
        <div className="text-2xl">Drivers</div>
            <div className="text-xl">View</div>
            <div className="text-lg">Create</div>
            <div className="text-lg">Edit</div>
            <div className="text-lg">Delete</div>
       </Link>
       </div>
    )
}