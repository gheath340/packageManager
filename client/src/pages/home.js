import React from "react";
import { NavBar } from "../components/navBar"
import { PackagesButton } from "../components/packagesButton"
import { DriversButton } from "../components/driversButton";

export function Home() {
    return (
        <div className="flex flex-col">
            <NavBar />
            <div className="text-4xl">Home</div>
            <div className="flex">
                <PackagesButton />
                <DriversButton />
            </div>
        </div>
    )
}