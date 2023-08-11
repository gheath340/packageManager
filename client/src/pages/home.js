import React from "react";
import { NavBar } from "../components/navBar"
import { PackagesButton } from "../components/packagesButton"
import { DriversButton } from "../components/driversButton";

export function Home() {
    return (
        <div className="flex flex-col items-center h-full">
            <NavBar />
            <div className="text-4xl mt-5 xl:mt-10">Home</div>
            <div className="flex flex-col lg:flex-row w-full h-full justify-evenly items-center lg">
                <PackagesButton />
                <DriversButton />
            </div>
        </div>
    )
}
