import React from "react"
import { useState } from 'react'
import { AddPackageForm } from "./addPackageForm"


export function AddPackageModal({ addPackage, cities, packages }) {
    const [modal, setModal] = useState(false)

    //change if modal is opened or closed
    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <button onClick={toggleModal} className="border border-gray-700 rounded-md hover:scale-110 
                                          hover:duration-200 p-1">Add Package</button>
            {modal && (
            <>
            <div onClick={toggleModal} className="fixed flex justify-center items-center w-full h-full bg-black/50"></div>
                <div className="absolute flex flex-col justify-center items-center w-2/3 h-1/2 lg:h-3/5 lg:w-2/5 
                                bg-white border border-gray-700 rounded-lg gap-y-5 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                    <h1 className="text-3xl">Add Package</h1>
                    <AddPackageForm addPackage={addPackage} toggleModal={toggleModal} cities={cities} packages={packages}/>
                </div>
            </>
            )} 
        </>
    )
}