import React from "react"
import { NavBar } from "../components/navBar"
import { NewPackage } from "../components/newPackage"

export function AddPackagePage() {
    return (
        <>
        <div className="flex flex-col items-center h-full">
            <NavBar />
            <div className="text-4xl mt-5 xl:mt-10">Add Package</div>
            <div className="flex flex-col lg:flex-row w-full h-full justify-evenly items-center lg">
                <NewPackage/>
            </div>
        </div>
        </>
    )
}