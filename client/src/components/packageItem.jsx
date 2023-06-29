
export function PackageItem({ id, tba, weight, item, location, city, driverID, deletePackage, editPackage }) {
    
    return (
        // <>
        // <li className="flex flex-col justify-center gap-x-6 items-center flex-wrap lg:flex-row">
        //     <div id="tba" className="">{tba}</div>
        //     <div>
        //         <div id="weight" className="border">Weight: {weight}</div>
        //         <div id="items" className="border">Item: {item}</div>
        //         <div id="location" className="border">Location: {location}</div>
        //         <div id="city" className="border">City: {city}</div>
        //         <div id="driverID" className="border">Driver: {driverID}</div>
        //     </div>
        //     <div className="flex gap-x-2">
        //         <button onClick={() => deletePackage(id)} className="border rounded-md hover:bg-black hover:text-white hover:duration-200 px-2">Delete</button>
        //         <button onClick={() => editPackage(id)} className="border rounded-md hover:bg-black hover:text-white hover:duration-200 px-2">Edit</button>
        //     </div>
        // </li>
        // </>

        <li key={id} className="flex justify-between gap-x-6 py-5">
            <div className="min-w-0 flex-auto items-start">
                <p className="text-md font-semibold leading-6 text-gray-900">{tba}</p>
                <p className="mt-1 truncate text-sm leading-5 text-gray-500">{location}</p>
                <p className="mt-1 truncate text-sm leading-5 text-gray-500">{weight}</p>
            </div>
            <div className="flex-auto">
                <p className="text-md leading-6 text-gray-900">{item}</p>
                <div className="mt-1 items-end gap-x-1.5">
                    <p className="text-sm leading-5 text-gray-500">{city}</p>
                    <p className="text-sm leading-5 text-gray-500">{driverID}</p>
                </div>

            </div>
            <div className="flex flex-col items-center">
                <button onClick={() => deletePackage(id)} className="border rounded-md hover:scale-110 hover:duration-200 px-2 w-full">Delete</button>
                <button onClick={() => editPackage(id)} className="border rounded-md hover:scale-110 hover:duration-200 px-2 w-full">Edit</button>
            </div>
        </li>

    )
}