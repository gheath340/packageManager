import { Link } from "react-router-dom"
import { useState } from "react"

export function NewDriverForm({ addDriver, toggleModal }) {
    const [newDriver, setNewDriver] = useState({"tba": "", "item": "", "weight": "", "location": "", "city": "", "driverID": ""})

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewDriver({...newDriver, [name]: value,})
    }

    //need to autofill in other driver info when adding in

    return (
        <>
            <div className="flex justify-center items-center gap-x-2">
                <div className="flex flex-col items-center">
                    <label>Driver ID</label>
                    <label>City</label>
                </div>
                <div className="flex flex-col divide-y divide-gray-300">
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
                <button onClick={() => { addDriver(newDriver); toggleModal() }} className="border border-gray-700 rounded-md hover:scale-110 hover:duration-200 p-1 mt-3 w-full"><Link to="/drivers">Add</Link></button>
                <button onClick={toggleModal} className="border border-gray-700 rounded-md hover:scale-110 hover:duration-200 p-1 mt-3 w-full"><Link to="/drivers">Cancel</Link></button>
            </div>
        </>
    )
}