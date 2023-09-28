import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom"


export function UserIcon (){

    return (
        <div className="relative">
            <FontAwesomeIcon icon={faUser} className="text-2xl hover:scale-110 cursor-pointer"/>
            <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-md w-[150px]">
                <div className="block px-2 py-1 hover:bg-gray-200 rounded-lg"><Link to="/">Create New User</Link></div>
                <div className="block px-2 py-1 hover:bg-gray-200 rounded-lg"><Link to="/">Sign Out</Link></div>
            </div>
        </div>
    )
}