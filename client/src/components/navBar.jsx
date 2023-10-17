import { Link } from "react-router-dom"
import { CreateUserModal } from "./createUserModal";

export function NavBar({ cities, addUser, users }) {
    
    return (
        <>
       <div className="flex justify-around w-full py-1 lg:py-2">
            <div className="text-xl hover:scale-110"><Link to="/">Home</Link></div>
            <div className="text-xl hover:scale-110"><Link to="/packages">Packages</Link></div>
            <div className="text-xl hover:scale-110"><Link to="/drivers">Drivers</Link></div>
            <CreateUserModal cities={cities} addUser={addUser} users={users}/>
       </div>
       <div className="border border-black w-11/12 lg:w-5/6"></div>
       </>
    )
}