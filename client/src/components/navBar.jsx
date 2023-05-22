import { Link } from "react-router-dom"

export function NavBar() {
    
    return (
       <div className="flex justify-around">
            <div className="text-xl"><Link to="/">Home</Link></div>
            <div className="text-xl"><Link to="/packages">Packages</Link></div>
            <div className="text-xl"><Link to="/drivers">Drivers</Link></div>
            <div className="fas text-2xl">&#xf406;</div>
       </div>
    )
}