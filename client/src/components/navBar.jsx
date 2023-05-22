import { Link } from "react-router-dom"

export function NavBar({ onSubmit }) {
    
    return (
       <div className="navBar">
        <div className="profile"></div>
        <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/packages">Packages</Link></li>
            <li><Link to="/drivers">Drivers</Link></li>
        </ul>
       </div>
    )
}