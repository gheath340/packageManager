import { EditPackageModal } from "./editPackageModal";

export function PackageItem({ id, tba, weight, item, location, city, driverID, deletePackage, editPackage, cities }) {
    
    return (
            <div className="flex py-5">
                <div className="flex-auto items-start">
                    <p className="font-semibold text-gray-900">TBA: {tba}</p>
                    <p className="mt-1 truncate text-sm text-gray-500">Item: {item}</p>
                    <p className="mt-1 truncate text-sm text-gray-500">Weight: {weight}</p>
                </div>
                <div className="flex-auto">
                    <p className="text-md text-gray-900">Location: {location}</p>
                    <div className="mt-1 items-end gap-x-1.5">
                        <p className="text-sm text-gray-500">City: {city}</p>
                        <p className="text-sm text-gray-500">Driver ID: {driverID}</p>
                    </div>

                </div>
                <div className="flex flex-col">
                    <button onClick={() => deletePackage(id, driverID)} className="border border-gray-700 rounded-md hover:scale-110 hover:duration-200 p-1 w-full">Delete</button>
                    <EditPackageModal tba={tba} weight={weight} item={item} location={location} city={city} 
                    driverID={driverID} editPackage={editPackage} packageID={id} cities={cities}/>
                </div>
            </div>
    )
}