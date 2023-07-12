import { Link } from "react-router-dom"

export function NewPackage(addPackage) {
    
    return (
        <div className="flex flex-col justify-center">
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

            <button onClick={() => addPackage()} className="border rounded-md hover:scale-110 hover:duration-200 p-1"><Link to="/packages">Add</Link></button>
            <button className="border rounded-md hover:scale-110 hover:duration-200 p-1"><Link to="/packages">Cancel</Link></button>
        </div>
    )
}