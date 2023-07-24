import { EditDriverModal } from "./editDriverModal";

export function DriverItem({ id, driverID, packages, active, lastStop, nextStop, city, deleteDriver, editDriver }) {

    //going to want to change how packages are showed
    
    return (
        <li key={id} className="flex justify-between gap-x-6 py-5">
            <div className="min-w-0 flex-auto items-start">
                <p className="text-md font-semibold leading-6 text-gray-900">{driverID}</p>
                <p className="mt-1 truncate text-sm leading-5 text-gray-500">{city}</p>
                <p className="mt-1 truncate text-sm leading-5 text-gray-500">{active}</p>
            </div>
            <div className="flex-auto">
                <div className="mt-1 items-end gap-x-1.5">
                    <p className="text-md font-semibold leading-6 text-gray-900">{packages}</p>
                    <p className="text-sm leading-5 text-gray-500">{lastStop}</p>
                    <p className="text-sm leading-5 text-gray-500">{nextStop}</p>
                </div>

            </div>
            <div className="flex flex-col items-center">
                <button onClick={() => deleteDriver(id)} className="border border-gray-700 rounded-md hover:scale-110 hover:duration-200 p-1 w-full">Delete</button>
                <EditDriverModal driverID={driverID} packages={packages} active={active} lastStop={lastStop} nextStop={nextStop} city={city} editDriver={editDriver}/>
            </div>
        </li>

    )
}