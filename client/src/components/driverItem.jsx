import { EditDriverModal } from "./editDriverModal";
import { DriverPackageList } from "./driverPackageList";
import { Arrow } from "../components/arrow"
import { useState } from 'react'

export function DriverItem({ id, driverID, packages, active, lastStop, nextStop, city, deleteDriver, editDriver, toggleOpenDriverItems, openDriverItems }) {
    const [list, setList] = useState(false)

    const toggleList = () => {
        setList(!list)
    }
    
    return (
        <div className="flex flex-col">
            <div key={id} className="w-full flex justify-between gap-x-6 py-5">
                <div className="min-w-0 flex-auto items-start">
                    <p className="max-w-min text-md font-semibold leading-6 text-gray-900">{driverID}</p>
                    <p className="max-w-min mt-1 truncate text-sm leading-5 text-gray-500">{city}</p>
                    <p className="max-w-min mt-1 truncate text-sm leading-5 text-gray-500">{active}</p>
                </div>
                <div className="flex-auto">
                    <div className="mt-1 items-end gap-x-1.5">
                        <p className="max-w-min text-sm leading-5 text-gray-500">{lastStop}</p>
                        <p className="max-w-min text-sm leading-5 text-gray-500">{nextStop}</p>
                    </div>

                </div>
                <div className="flex flex-col items-center">
                    <button onClick={() => deleteDriver(id)} className="border border-gray-700 rounded-md 
                                            hover:scale-110 hover:duration-200 p-1 w-full">Delete</button>
                    <EditDriverModal driverID={driverID} packages={packages} active={active} lastStop={lastStop} 
                                                        nextStop={nextStop} city={city} editDriver={editDriver}/>
                </div>
            </div>
            <button onClick={() => { toggleOpenDriverItems(driverID); toggleList() }} className="self-center">
                <Arrow className={`${openDriverItems.includes(driverID) ? "-rotate-180" : ""} 
                                    w-6 h-6 text-gray-500 self-center transition`} />
            </button>
            <DriverPackageList packages={packages} list={list}/>
        </div>

    )
}
//have the list of packages hidden unless driver item is open
//if driver item is open show package list component