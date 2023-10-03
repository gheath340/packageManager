import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom"
import { useState } from "react";


export function UserIcon (){
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="relative">
            <FontAwesomeIcon icon={faUser} onClick={toggleOpen} className="text-2xl hover:scale-110 cursor-pointer"/>
            {isOpen && (
                <>
                <div onClick={toggleOpen} className="fixed inset-0 w-full h-full"></div>
                <div className="absolute right-0 mt-2 py-1 bg-white rounded-lg border shadow-md w-[150px]">
                    <div className="block px-2 py-1 hover:bg-gray-200 rounded-lg"><Link to="/create">Create User</Link></div>
                    <div className="block px-2 py-1 hover:bg-gray-200 rounded-lg"><Link to="/login">Sign Out</Link></div>
                </div>
                </>
            )}
        </div>
    )
}