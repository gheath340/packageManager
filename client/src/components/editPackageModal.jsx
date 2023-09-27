import React from "react"
import { useState } from 'react'
import { EditPackageForm } from "./editPackageForm"


export function EditPackageModal({ tba, weight, item, location, city, driverID, editPackage, packageID, cities, packages }) {
    const [modal, setModal] = useState(false)

    //changes if modal is opened or closed
    const toggleModal = () => {
        setModal(!modal)
    }

    //edit button click toggles modal and gets correct package info to fill in forms
    return (
        <>
            <button onClick={toggleModal} className="border border-gray-700 rounded-md hover:scale-110 hover:duration-200 p-1 w-full mt-2">Edit</button>
            {modal && (
            <>
                <div onClick={toggleModal} className="absolute left-0 top-0 flex justify-center items-center w-full h-full bg-black/50"></div>
                <div className="absolute flex flex-col justify-center items-center w-2/3 h-1/2 lg:h-3/5 lg:w-2/5 
                                bg-white border border-gray-700 rounded-lg gap-y-5 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                    <h1 className="text-3xl">Edit Package</h1>
                    <EditPackageForm tba={tba} weight={weight} item={item} location={location} city={city} driverID={driverID} 
                    editPackage={editPackage} toggleModal={toggleModal} packageID={packageID} cities={cities} packages={packages}/>
                </div>
            </>
            )}
        </>
    )
}