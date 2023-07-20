import { EditPackageModal } from "./editPackageModal";

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
            <div className="flex flex-col items-center">
                <button onClick={() => deletePackage(id)} className="border border-gray-700 rounded-md hover:scale-110 hover:duration-200 p-1 w-full">Delete</button>
                <EditPackageModal editPackage={editPackage}/>
            </div>
        </li>

    )
}