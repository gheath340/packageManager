import React from "react"
import { useState, useEffect } from 'react'
import { NewPackageForm } from "./newPackageForm"


export function AddPackageModal({ addPackage }) {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <button onClick={toggleModal} className="border border-gray-700 rounded-md hover:scale-110 hover:duration-200 p-1">Add Package</button>
            {modal && (
            <div className="fixed flex justify-center items-center w-full h-full bg-gray-500/50">
                <div className="flex justify-center items-center w-2/3 h-1/2 lg:h-3/5 lg:w-2/5 bg-white border border-gray-700 rounded-lg">
                    <NewPackageForm addPackage={addPackage} toggleModal={toggleModal}/>
                </div>
            </div>
            )}
            
        </>
    )
}