import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export function NavBar() {
    
    return (
        <>
       <div className="flex justify-around w-full py-1 lg:py-2">
            <div className="text-xl hover:scale-110"><Link to="/">Home</Link></div>
            <div className="text-xl hover:scale-110"><Link to="/packages">Packages</Link></div>
            <div className="text-xl hover:scale-110"><Link to="/drivers">Drivers</Link></div>
            <FontAwesomeIcon icon={faUser} className="text-2xl hover:scale-110 cursor-pointer"/>
       </div>
       <div className="border border-black w-11/12 lg:w-5/6"></div>
       </>
    )
}