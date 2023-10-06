import { Link } from "react-router-dom"
import { useState } from "react"
import { toast } from "react-toastify"


export function EditDriverForm({ id, city, driverID, editDriver, toggleModal, drivers }) {
    const [newDriver, setNewDriver] = useState({"id": id, "city": city, 
        "driverID": driverID})

    const handleSubmitPress = (event) => {
        if (event.key === "Enter") {
            errorCheck()
        }
    }

    const onSubmit = () => {
        toggleModal()
        editDriver(newDriver, "edit")
    }

    //updates driver info whenever a field is changed
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewDriver({...newDriver, [name]: value,})
    }

    const EmptyInputsError = () => {
        toast.error('Please fill in all fields.', { hideProgressBar: true, 
            closeOnClick: true, pauseOnHover: true });
    }

    const UsedError = () => {
        toast.error('Driver ID or city has already been assigned', { hideProgressBar: true, 
            closeOnClick: true, pauseOnHover: true });
    }
    
    const cityChangeError = () => {
        toast.error('Can not change city while packages are assigned.', { 
            hideProgressBar: true, closeOnClick: true, pauseOnHover: true });
    }

    const errorCheck = () => {
        let failed = false
        if (newDriver["driverID"] === "" || newDriver["city"] === "") {
            EmptyInputsError()
            failed = true
        }else{
            drivers.forEach(d => {
                if ((newDriver["driverID"] === d.driverID && id !== d._id) || 
                    (newDriver["city"] === d.city && id !== d._id)){
                    UsedError()
                    failed = true
                }
            })
            drivers.forEach(driver => {
                if (driver._id === id && driver.packages.length !== 0){
                    cityChangeError()
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