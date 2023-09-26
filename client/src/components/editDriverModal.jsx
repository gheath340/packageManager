import React from "react"
import { useState } from 'react'
import { EditDriverForm } from "./editDriverForm"


export function EditDriverModal({ id, driverID,city, editDriver }) {
    const [modal, setModal] = useState(false)

    //sets modal opened or closed
    const toggleModal = () => {
        setModal(!modal)
    }

    //edit button click toggles modal and gets correct Driver info to fill in forms
    return (
        <>
            <button onClick={toggleModal} className="border border-gray-700 rounded-md hover:scale-110 
                                                     hover:duration-200 px-3 py-1 mt-2">Edit</button>
            {modal && (
            <>
                <div onClick={toggleModal} className="absolute left-0 top-0 w-full h-full bg-black/50"></div>
                <div className="absolute flex flex-col justify-center items-center w-2/3 h-1/2 lg:h-3/5 lg:w-2/5 
                                bg-white border border-gray-700 rounded-lg gap-y-5 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                    <h1 className="text-3xl">Edit Driver</h1>
                    <EditDriverForm id={id} city={city} driverID={driverID} 
                    editDriver={editDriver} toggleModal={toggleModal}/>
                </div>
            </>
            )} 
        </>
    )
}

// {modal && (
//     <div onClick={toggleModal} className="absolute left-0 top-0 flex justify-center items-center w-full h-full bg-black/50">
//         <div className="flex flex-col justify-center items-center w-2/3 h-1/2 lg:h-3/5 lg:w-2/5 
//                       bg-white border border-gray-700 rounded-lg gap-y-5">
//             <h1 className="text-3xl">Edit Driver</h1>
//             <EditDriverForm id={id} city={city} driverID={driverID} 
//             editDriver={editDriver} toggleModal={toggleModal}/>
//         </div>
//     </div>
//     )}