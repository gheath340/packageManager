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

    const deletePackage = async id => {
        const data = await fetch(API_BASE + "/package/delete/" + id, {
          method: "DELETE"})
          .then(res => res.json())
    
        setPackages(packages => packages.filter(p => p._id !== data._id))
    }

    //pass in id you want updated and dict of names and values
    const editPackage = async (id, newPackageInfo) => {
        const data = await fetch(API_BASE + "/package/update/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({tba: newPackageInfo["tba"], weight: newPackageInfo["weight"], item: newPackageInfo["item"], location: newPackageInfo["location"], city: newPackageInfo["city"], driverID: newPackageInfo["driverID"]})
        }).then(res => res.json())

        setPackages([...packages])
    }

    return (
        <>
        <div className="flex flex-col items-center h-full">
            <NavBar />
            <div className="text-4xl mt-5 mb-5 xl:mt-10 xl:mb-10">Packages</div>
            <div className="flex flex-col lg:flex-row w-full h-full justify-evenly items-center ">
                <PackageList packages={packages} deletePackage={deletePackage} editPackage={editPackage}/>
            </div>
        </div>
        </>
    )
}