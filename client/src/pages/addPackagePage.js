import React from "react"
import { NavBar } from "../components/navBar"
import { NewPackageForm } from "../components/newPackageForm"

const API_BASE = "http://localhost:3001"

export function AddPackagePage(addPackage) {
    
    return (
        <>
        <div className="flex flex-col items-center h-full">
            <NavBar />
            <div className="text-4xl my-5 xl:my-5">Add Package</div>
            <div className="flex flex-col justify-evenly items-center py-10">
                <NewPackageForm addPackage={addPackage} />
            </div>
        </div>
        </>
    )
}