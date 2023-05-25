import { Link } from "react-router-dom"

export function DriversButton() {
    
    return (
        <Link to="/drivers" className="border border-black hover:border-gray-300 rounded-lg w-1/2 lg:w-1/3 xl:w-1/4 h-1/3 lg:h-1/3 xl:h-1/2 flex flex-col items-center justify-center shadow-lg">
                <div className="text-2xl lg:text-4xl">Drivers</div>
                <div className="text-lg lg:text-2xl">-View</div>
                <div className="text-lg lg:text-2xl">-Create</div>
                <div className="text-lg lg:text-2xl">-Edit</div>
                <div className="text-lg lg:text-2xl">-Delete</div>
       </Link>
    )
}