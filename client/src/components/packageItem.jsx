
export function PackageItem({ id, tba, weight, item, location, city, driverID, deletePackage, editPackage }) {
    
    return (
        <li key={id} className="flex justify-between gap-x-6 py-5">
            <div className="min-w-0 flex-auto items-start">
                <p className="text-md font-semibold leading-6 text-gray-900">{tba}</p>
                <p className="mt-1 truncate text-sm leading-5 text-gray-500">{item}</p>
                <p className="mt-1 truncate text-sm leading-5 text-gray-500">{weight}</p>
            </div>
            <div className="flex-auto">
                <p className="text-md leading-6 text-gray-900">{location}</p>
                <div className="mt-1 items-end gap-x-1.5">
                    <p className="text-sm leading-5 text-gray-500">{city}</p>
                    <p className="text-sm leading-5 text-gray-500">{driverID}</p>
                </div>

            </div>
            <div className="flex flex-col lg:flex-row items-center">
                <button onClick={() => deletePackage(id)} className="border border-black rounded-md hover:scale-110 hover:duration-200 p-1 w-full lg:w-2/3 lg:h-2/4 lg:mr-2">Delete</button>
                <button onClick={() => editPackage(id)} className="border border-black rounded-md hover:scale-110 hover:duration-200 p-1 w-full lg:w-2/3 mt-2 lg:mt-0 lg:h-2/4">Edit</button>
            </div>
        </li>

    )
}