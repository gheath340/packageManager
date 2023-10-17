import { Link } from "react-router-dom"
import { useState } from "react"
import { toast } from "react-toastify"


export function CreateUserForm({ addUser, toggleModal, users, cities }) {
    const [newUser, setNewUser] = useState({username: "", password: "", type: "", 
        driverID: "", city: ""})

    const handleSubmitPress = (event) => {
        if (event.key === "Enter") {
            errorCheck()
        }
    }

    const onSubmit = () => {
        toggleModal()
        addUser(newUser)
        toast.done('User successfully created')
    }

    //updates driver info whenever a field is changed
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewUser({...newUser, [name]: value,})
    }

    const EmptyInputsError = () => {
        toast.error('Please fill in all fields.', { hideProgressBar: true, 
            closeOnClick: true, pauseOnHover: true });
    }

    const UsedError = () => {
        toast.error('Username or driverID has already been assigned', { hideProgressBar: true, 
            closeOnClick: true, pauseOnHover: true });
    }
    //add new error checks
    const errorCheck = () => {
        let failed = false
        if (newUser["username"] === "" || newUser["password"] === "" || 
            newUser["type"] === "" || 
            (newUser["type"] === "driver" && newUser["driverID"] === "") || 
            (newUser["type"] === "driver" && newUser["city"] === "")){
            EmptyInputsError()
            failed = true
        }else{
            users.forEach(user => {
                if (newUser["driverID"] === user.driverID || 
                    newUser["username"] === user.username){
                    UsedError()
                    failed = true
                }
            })
       }
       if (!failed){
            onSubmit()
       }
    }

    return (
        <>
            <div onKeyDown={handleSubmitPress} className="flex justify-center items-center 
                gap-x-2">
                <div className="flex flex-col items-center">
                    <label>Username</label>
                    <label>Password</label>
                    <label>Type</label>
                    {newUser.type === "Driver" && (
                        <>
                            <label>DriverID</label>
                            <label>City</label>
                        </>
                    )}
                </div>
                <div className="flex flex-col divide-y divide-gray-300">
                <input className="focus:outline-none" 
                        placeholder="Username" 
                        value={newUser.username}  
                        onChange={handleInputChange} 
                        name="username"></input>
                <input className="focus:outline-none" 
                        placeholder="Password" 
                        value={newUser.password} 
                        onChange={handleInputChange}
                        type="password" 
                        name="password"></input>
                <select className="focus:outline-none" 
                        placeholder="Type" 
                        value={newUser.type} 
                        onChange={handleInputChange} 
                        name="type">
                        <option></option>
                        <option>Driver</option>
                        <option>Admin</option>
                        </select>
                {newUser.type === "Driver" && (
                    <>
                        <input className="focus:outline-none" 
                            placeholder="DriverID" 
                            value={newUser.driverID}
                            onChange={handleInputChange} 
                            name="driverID"></input>
                        <input className="focus:outline-none" 
                            placeholder="City"
                            value={newUser.city}
                            onChange={handleInputChange} 
                            name="city"></input>
                    </>
                )
                }
                <div></div>
            </div>
            </div>
            <div className="flex w-1/2 items-center gap-x-2">
                <button onClick={errorCheck} className="border border-gray-700 rounded-md 
                    hover:scale-110 hover:duration-200 p-1 mt-3 w-full">
                    <Link to="/drivers">Submit</Link></button>
                <button onClick={toggleModal} className="border border-gray-700 
                    rounded-md hover:scale-110 hover:duration-200 p-1 mt-3 w-full">
                    <Link to="/drivers">Cancel</Link></button>
            </div>
        </>
    )
}