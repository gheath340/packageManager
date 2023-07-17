import { Link } from "react-router-dom"
import { PackageAddButton } from "./packageAddButton"

export function NewPackageForm({ addPackage, toggleModal }) {
    
    return (
        <>
            <div className="flex flex-col justify-center gap-y-1">
                <label>TBA</label>
                <input placeholder="TBA" name='tba' type="text" id="tbaInput" class="border border-black rounded"></input>
                <label>Item</label>
                <input placeholder="Item" name='tba' type="text" id="tbaInput" class="border border-black rounded"></input>
                <label>Weight</label>
                <input placeholder="Weight" name='tba' type="text" id="tbaInput" class="border border-black rounded"></input>
                <label>Location</label>
                <input placeholder="Location" name='tba' type="text" id="tbaInput" class="border border-black rounded"></input>
                <label>City</label>
                <input placeholder="City" name='tba' type="text" id="tbaInput" class="border border-black rounded"></input>
                <label>Driver ID</label>
                <input placeholder="Driver ID" name='tba' type="text" id="tbaInput" class="border border-black rounded"></input>
            </div>
            <div className="w-full flex flex-col items-center">
                <PackageAddButton addPackage={addPackage}/>
                <button onClick={toggleModal} className="border border-black rounded-md hover:scale-110 hover:duration-200 p-1 mt-3 w-1/2"><Link to="/packages">Cancel</Link></button>
            </div>
        </>
    )
}