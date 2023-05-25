import { Link } from "react-router-dom"

export function NavBar() {
    
    return (
        <>
       <div className="flex justify-around w-full py-1 lg:py-2">
            <div className="text-xl hover:text-gray-500"><Link to="/">Home</Link></div>
            <div className="text-xl hover:text-gray-500"><Link to="/packages">Packages</Link></div>
            <div className="text-xl hover:text-gray-500"><Link to="/drivers">Drivers</Link></div>
            <div className="fas text-2xl hover:text-gray-500 hover:cursor-pointer">&#xf406;</div>
       </div>
       <div className="border border-black w-11/12 lg:w-5/6"></div>
       </>
    )
}