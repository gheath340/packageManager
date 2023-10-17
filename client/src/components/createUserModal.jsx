import React from "react"
import { useState } from 'react'
import { CreateUserForm } from "./createUserForm"
import { UserIcon } from "./userIcon";



export function CreateUserModal({ id, driverID, city, editDriver, drivers, cities }) {
    const [modal, setModal] = useState(false)

    //sets modal opened or closed
    const toggleModal = () => {
        setModal(!modal)
    }

    //edit button click toggles modal and gets correct Driver info to fill in forms
    return (
        <>
            <UserIcon toggleModal={toggleModal}/>
            {modal && (
            <>
                <div onClick={() => toggleModal()} className="absolute left-0 top-0 w-full 
                    h-full bg-black/50"></div>
                <div className="absolute flex flex-col justify-center items-center w-2/3 
                    h-1/2 lg:h-3/5 lg:w-2/5 bg-white border border-gray-700 rounded-lg 
                    gap-y-5 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                    <h1 className="text-3xl">Create User</h1>
                    <CreateUserForm id={id} city={city} driverID={driverID} 
                    editDriver={editDriver} toggleModal={toggleModal} drivers={drivers} 
                    cities={cities}/>
                </div>
            </>
            )} 
        </>
    )
}