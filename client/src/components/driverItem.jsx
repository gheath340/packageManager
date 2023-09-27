import { EditDriverModal } from "./editDriverModal";
import { DriverPackageList } from "./driverPackageList";
import { Arrow } from "../components/arrow"
import { useState } from 'react'

export function DriverItem({ id, driverID, packages, active, lastStop, nextStop, city, deleteDriver, 
                             editDriver, toggleOpenDriverItems, openDriverItems, drivers }) {
    const [list, setList] = useState(false)

    //changes if package list is showing or not
    const toggleList = () => {
        setList(!list)
    }
    
    return (
        <div className="flex flex-col">
            <div key={id} className="flex py-5">
                <div className="flex-auto items-start">
                    <p className="text-md font-semibold leading-6 text-gray-900">Driver ID: {driverID}</p>
                    <p className="mt-1 truncate text-sm leading-5 text-gray-500">City: {city}</p>
                    <p className="mt-1 truncate text-sm leading-5 text-gray-500">Active: {active}</p>
                </div>
                <div className="flex-auto">
                    <p className="text-sm leading-5 text-gray-500">Last Stop: {lastStop}</p>
                    <p className="mt-2 text-sm leading-5 text-gray-500">Next Stop: {nextStop}</p>
                </div>
                <div className="flex flex-col">
                    <button onClick={() => deleteDriver(id)} className="border border-gray-700 rounded-md 
                                            hover:scale-110 hover:duration-200 p-1">Delete</button>
                    <EditDriverModal id={id} driverID={driverID} city={city} editDriver={editDriver} drivers={drivers}/>
                </div>
            </div>
            <button onClick={() => { toggleOpenDriverItems(driverID); toggleList() }} className="self-center">
                <Arrow className={`${openDriverItems.includes(driverID) ? "-rotate-180" : ""} 
                                    w-6 h-6 text-gray-500 self-center transition`} />
            </button>
            <DriverPackageList packages={packages} list={list}/>
        </div>

)}
