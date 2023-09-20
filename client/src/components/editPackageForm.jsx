import { Link } from "react-router-dom"
import { useState } from "react"

export function EditPackageForm({ tba, weight, item, location, city, driverID, editPackage, toggleModal, 
                                  packageID, cities }) {
    const [newPackage, setNewPackage] = useState({"tba": tba, "item": item, "weight": weight, 
                                   "location": location, "city": city, "driverID": driverID})
    
    //update package info everytime a field is changed
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewPackage({...newPackage, [name]: value,})
    }

    return (
        <>
            <div className="flex justify-center items-center gap-x-2">
                <div className="flex flex-col items-center">
                    <label>TBA</label>
                    <label>Item</label>
                    <label>Weight</label>
                    <label>Location</label>
                    <label>City</label>
                </div>
                <div className="flex flex-col divide-y divide-gray-300">
                    <input className="focus:outline-none" 
                            placeholder="TBA" 
                            value={newPackage.tba} 
                            onChange={handleInputChange} 
                            name="tba"></input>
                    <input className="focus:outline-none" 
                            placeholder="Item" 
                            value={newPackage.item} 
                            onChange={handleInputChange} 
                            name="item"></input>
                    <input className="focus:outline-none" 
                            placeholder="Weight" 
                            value={newPackage.weight} 
                            onChange={handleInputChange} 
                            name="weight"></input>
                    <select className="focus:outline-none cursor-pointer" 
                            value={newPackage.location}
                            onChange={handleInputChange} 
                            name="location">
                            <option></option>
                            <option>FC</option>
                            <option>On Truck</option>
                            <option>Delivered</option>
                    </select>
                    <select className="focus:outline-none cursor-pointer" 
                            value={newPackage.city}
                            onChange={handleInputChange} 
                            name="city">
                            {cities 
                                ? cities.map((city) => {
                                    return <option key={city}>{city}</option>})
                                : null} 
                    </select>
                    <div></div>
                </div>
            </div>
            <div className="flex w-1/2 items-center gap-x-2">
                <button onClick={() => { editPackage(packageID, newPackage); toggleModal() }} 
                className="border border-gray-700 rounded-md hover:scale-110 hover:duration-200 p-1 mt-3 
                                          w-full"><Link to="/packages">Submit</Link></button>
                <button onClick={toggleModal} className="border border-gray-700 rounded-md hover:scale-110 
                             hover:duration-200 p-1 mt-3 w-full"><Link to="/packages">Cancel</Link></button>
            </div>
        </>
    )
}