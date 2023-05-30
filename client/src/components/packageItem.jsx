
export function PackageItem({ id, tba, weight, item, location, city, driverID, deletePackage, editPackage }) {
    
    return (
        <>
        <li className="flex flex-col justify-center gap-x-6 items-center flex-wrap lg:flex-row">
            <div id="tba" className="">{tba}</div>
            <div>
                <div id="weight" className="border">Weight: {weight}</div>
                <div id="items" className="border">Item: {item}</div>
                <div id="location" className="border">Location: {location}</div>
                <div id="city" className="border">City: {city}</div>
                <div id="driverID" className="border">Driver: {driverID}</div>
            </div>
            <div className="flex gap-x-2">
                <button onClick={() => deletePackage(id)} className="border rounded-md hover:bg-black hover:text-white hover:duration-200 px-2">Delete</button>
                <button onClick={() => editPackage(id)} className="border rounded-md hover:bg-black hover:text-white hover:duration-200 px-2">Edit</button>
            </div>
        </li>
        </>

    )
}