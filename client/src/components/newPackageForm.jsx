import { Link } from "react-router-dom"
import { useState } from "react"

export function NewPackageForm({ addPackage, toggleModal, getCities }) {
    const cities = getCities()
    const [newPackage, setNewPackage] = useState({"tba": "", "item": "", "weight": "", "location": "", 
                                                  "city": ""})

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewPackage({...newPackage, [name]: value,})
    }
//MAKING CITIES A DROP DOWN OF ALL CITIES THAT ARE ASSIGNED TO DRIVERS
//need to take list of current cities in args
//need to make an option tag for each city
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
                    <input className="focus:outline-none" 
                            placeholder="Location" 
                            value={newPackage.location} 
                            onChange={handleInputChange} 
                            name="location"></input>
                    <select className="focus:outline-none" 
                            placeholder="City" 
                            value={newPackage.city} 
                            onChange={handleInputChange} 
                            name="city"> 
                            {cities 
                                ? cities.map((city) => {
                                    return <option>{city.name}</option>})
                                : null} 
                    </select>
                    {/* <input className="focus:outline-none" 
                            placeholder="City" 
                            value={newPackage.city} 
                            onChange={handleInputChange} 
                            name="city"></input> */}
                    <div></div>
                </div>
            </div>
            <div className="flex w-1/2 items-center gap-x-2">
                <button onClick={() => { addPackage(newPackage); toggleModal() }} className="border 
                  border-gray-700 rounded-md hover:scale-110 hover:duration-200 p-1 mt-3 w-full">
                                                           <Link to="/packages">Add</Link></button>
                <button onClick={toggleModal} className="border border-gray-700 rounded-md hover:scale-110 
                             hover:duration-200 p-1 mt-3 w-full"><Link to="/packages">Cancel</Link></button>
            </div>
        </>
    )
}