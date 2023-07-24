import React from "react"
import { useState } from 'react'
import { NewDriverForm } from "./newDriverForm"


export function AddDriverModal({ addDriver }) {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <button onClick={toggleModal} className="border border-gray-700 rounded-md hover:scale-110 hover:duration-200 p-1">Add Driver</button>
            {modal && (
            <div className="fixed flex justify-center items-center w-full h-full bg-black/50">
                <div className="flex flex-col justify-center items-center w-2/3 h-1/2 lg:h-3/5 lg:w-2/5 bg-white border border-gray-700 rounded-lg gap-y-5">
                    <h1 className="text-3xl">Add Driver</h1>
                    <NewDriverForm addDriver={addDriver} toggleModal={toggleModal}/>
                </div>
            </div>
            )}
            
        </>
    )
}