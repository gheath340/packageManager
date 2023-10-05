import { Link } from "react-router-dom"
import { useState } from "react"
import { toast } from "react-toastify"

export function NewDriverForm({ addDriver, toggleModal, drivers }) {
    const [newDriver, setNewDriver] = useState({"username": "", "password": "", "driverID": "", "packages": [], "active": false, "lastStop": "N/A", "nextStop": "N/A", "city": ""})

    const handleSubmitPress = (event) => {
        if (event.key === "Enter") {
            errorCheck()
        }
    }

    const onSubmit = () => {
        toggleModal()
        addDriver(newDriver, "add")
    }

    //updates driver evertime a field is changed
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewDriver({...newDriver, [name]: value,})
    }

    const EmptyInputsError = () => {
        toast.error('Please fill in all fields.', { hideProgressBar: true, closeOnClick: true, pauseOnHover: true });
    }
    
    const usedUsernameError = () => {
        toast.error('Username has already been assigned', { hideProgressBar: true, closeOnClick: true, pauseOnHover: true });  
    }

    const UsedError = () => {
        toast.error('Driver ID or city has already been assigned', { hideProgressBar: true, closeOnClick: true, pauseOnHover: true });  
    }

    const errorCheck = () => {
        let failed = false
        if (newDriver["driverID"] === "" || newDriver["city"] === "") {
            EmptyInputsError()
            failed = true
        }else{
            drivers.forEach(d => {
                if (newDriver["driverID"] === d.driverID || newDriver["city"] === d.city){
                    UsedError()
                    failed = true
                }else if (newDriver['username'] === d.username){
                    usedUsernameError()
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
            <div onKeyDown={handleSubmitPress} className="flex justify-center items-center gap-x-2">
                <div className="flex flex-col items-center">
                    <label>Username</label>
                    <label>Password</label>
                    <label>Driver ID</label>
                    <label>City</label>
                </div>
                <div className="flex flex-col divide-y divide-gray-300">
                <input className="focus:outline-none" 
                        placeholder="Username" 
                        value={newDriver.username}  
                        onChange={handleInputChange} 
                        name="username"></input>
                        <input className="focus:outline-none" 
                        placeholder="Password" 
                        value={newDriver.password} 
                        onChange={handleInputChange} 
                        name="password"></input>
                <input className="focus:outline-none" 
                            placeholder="Driver ID" 
                            value={newDriver.driverID} 
                            onChange={handleInputChange}
                            name="driverID"></input>
                    <input className="focus:outline-none" 
                            placeholder="City" 
                            value={newDriver.city} 
                            onChange={handleInputChange} 
                            name="city"></input>
                    <div></div>
                </div>
            </div>
            <div className="flex w-1/2 items-center gap-x-2">
                <button onClick={errorCheck} className="border border-gray-700 rounded-md hover:scale-110 hover:duration-200 p-1 mt-3 w-full"><Link to="/drivers">Add</Link></button>
                <button onClick={toggleModal} className="border border-gray-700 rounded-md hover:scale-110 hover:duration-200 p-1 mt-3 w-full"><Link to="/drivers">Cancel</Link></button>
            </div>
        </>
    )
}