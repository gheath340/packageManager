import { Link } from "react-router-dom"
import { UserIcon } from "./userIcon";

export function NavBar() {
    
    return (
        <>
       <div className="flex justify-around w-full py-1 lg:py-2">
            <div className="text-xl hover:scale-110"><Link to="/">Home</Link></div>
            <div className="text-xl hover:scale-110"><Link to="/packages">Packages</Link></div>
            <div className="text-xl hover:scale-110"><Link to="/drivers">Drivers</Link></div>
            <UserIcon />
       </div>
       <div className="border border-black w-11/12 lg:w-5/6"></div>
       </>
    )
}