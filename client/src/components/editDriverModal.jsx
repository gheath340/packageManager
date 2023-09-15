import React from "react"
import { useState } from 'react'
import { EditDriverForm } from "./editDriverForm"


export function EditDriverModal({ city, driverID, editDriver }) {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    //edit button click toggles modal and gets correct Driver info to fill in forms
    return (
        <>
            <button onClick={toggleModal} className="border border-gray-700 rounded-md hover:scale-110 
                                                     hover:duration-200 px-3 py-1 mt-2">Edit</button>
            {modal && (
            <div className="absolute left-0 top-0 flex justify-center items-center w-full h-full bg-black/50">
                <div className="flex flex-col justify-center items-center w-2/3 h-1/2 lg:h-3/5 lg:w-2/5 
                              bg-white border border-gray-700 rounded-lg gap-y-5">
                    <h1 className="text-3xl">Edit Driver</h1>
                    <EditDriverForm city={city} driverID={driverID} 
                    editDriver={editDriver} toggleModal={toggleModal}/>
                </div>
            </div>
            )}
            
        </>
    )
}