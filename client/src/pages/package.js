import React from "react";
import { NavBar } from "../components/navBar";

export function Package() {
    return (
        <>
        <div className="flex flex-col items-center h-full">
            <NavBar />
            <div className="text-4xl mt-5 xl:mt-10">Packages</div>
            <div className="flex flex-col lg:flex-row w-full h-full justify-evenly items-center lg">
                
            </div>
        </div>
        </>
    )
}