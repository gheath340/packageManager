import React from "react";
import { NavBar } from "../components/navBar";
import { PackageList } from "../components/packageList";
import { PackageItem } from "../components/packageItem";
import { useState, useEffect } from 'react'

const API_BASE = "http://localhost:3001"

export function PackagePage() {
    const [packages, setPackages] = useState([])
    const [newPackage, setNewPackage] = useState("")

    useEffect(() => {
    GetPackages()
    }, [])

    const GetPackages = () => {
        fetch(API_BASE + "/packages")
        .then(res => res.json())
        .then(data => setPackages(data))
        .catch(err => console.error("Error: ", err))
      }

    return (
        <>
        <div className="flex flex-col items-center h-full">
            <NavBar />
            <div className="text-4xl mt-5 xl:mt-10">Packages</div>
            <div className="flex flex-col lg:flex-row w-full h-full justify-evenly items-center lg">
                <PackageList packages={packages}/>
            </div>
        </div>
        </>
    )
}