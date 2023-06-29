import { Link } from "react-router-dom"

export function PackagesButton() {
    
    return (
        <Link to="/packages" className="border border-black hover:scale-110 hover:duration-200 rounded-lg w-1/2 lg:w-1/3 xl:w-1/4 h-1/3 lg:h-1/3 xl:h-1/2 flex flex-col items-center justify-center shadow-lg">
            <div className="text-2xl lg:text-4xl">Packages</div>
            <div className="text-lg lg:text-2xl">-View</div>
            <div className="text-lg lg:text-2xl">-Create</div>
            <div className="text-lg lg:text-2xl">-Edit</div>
            <div className="text-lg lg:text-2xl">-Delete</div>
        </Link>
    )
}