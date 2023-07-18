import { Link } from "react-router-dom"
import { PackageAddButton } from "./packageAddButton"

export function NewPackageForm({ addPackage, toggleModal }) {
    
    return (
            // <div className="flex flex-col justify-center gap-y-1">
            //     <div className="flex gap-x-2">
            //         <label>TBA</label>
            //         <input placeholder="TBA" type="text"className="border border-gray-700 rounded"></input>
            //     </div>
            //     <div className="flex justify-evenly">
            //         <label>Item</label>
            //         <input placeholder="Item" type="text" className="border border-gray-700 rounded"></input>
            //     </div>
            //     <div className="flex justify-around">
            //         <label>Weight</label>
            //         <input placeholder="Weight" type="text" className="border border-gray-700 rounded"></input>
            //     </div>
            //     <div className="flex gap-x-2">
            //         <label>Location</label>
            //         <input placeholder="Location" type="text" className="border border-gray-700 rounded"></input>
            //     </div>
            //     <div className="flex justify-around">
            //         <label>City</label>
            //         <input placeholder="City" type="text" className="border border-gray-700 rounded"></input>
            //     </div>
            //     <div className="flex justify-around">
            //         <label>Driver ID</label>
            //         <input placeholder="Driver ID" type="text" className="border border-gray-700 rounded"></input>
            //     </div>
            //     <div className="w-full flex flex-col items-center">
            //         <PackageAddButton addPackage={addPackage}/>
            //         <button onClick={toggleModal} className="border border-gray-700 rounded-md hover:scale-110 hover:duration-200 p-1 mt-3 w-1/2"><Link to="/packages">Cancel</Link></button>
            //     </div>
            // </div>
        <>
            <div className="flex justify-center items-center gap-x-2">
                <div className="flex flex-col items-center">
                    <label>TBA</label>
                    <label>Item</label>
                    <label>Weight</label>
                    <label>Location</label>
                    <label>City</label>
                    <label>Driver ID</label>
                </div>
                <div className="flex flex-col divide-y divide-gray-300">
                    <input className="focus:outline-none" placeholder="TBA"></input>
                    <input className="focus:outline-none" placeholder="Item"></input>
                    <input className="focus:outline-none" placeholder="Weight"></input>
                    <input className="focus:outline-none" placeholder="Location"></input>
                    <input className="focus:outline-none" placeholder="City"></input>
                    <input className="focus:outline-none" placeholder="Driver ID"></input>
                    <div></div>
                </div>
            </div>
            <div className="flex w-1/2 items-center gap-x-2">
                <PackageAddButton addPackage={addPackage}/>
                <button onClick={toggleModal} className="border border-gray-700 rounded-md hover:scale-110 hover:duration-200 p-1 mt-3 w-full"><Link to="/packages">Cancel</Link></button>
            </div>
        </>
    )
}