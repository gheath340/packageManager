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
                <div className="">
                <div className="overlay"></div>
                <div className="modal-content">
                    <NewPackageForm addPackage={addPackage} toggleModal={toggleModal}/>
                </div>
            </div>
            )}
            
        </>
    )
}