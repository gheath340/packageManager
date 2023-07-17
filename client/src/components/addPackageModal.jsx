import React from "react"
import { useState, useEffect } from 'react'


export function AddPackageModal(addPackage) {
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
                    <h1>Hello Modal</h1>
                    <button onClick={toggleModal}>Close</button>
                </div>
            </div>
            )}
            
        </>
    )
}