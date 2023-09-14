import React from "react"
import { NavBar } from "../components/navBar"
import { PackageList } from "../components/packageList"
import { useState, useEffect } from 'react'
import { AddPackageModal } from "../components/addPackageModal"

const API_BASE = "http://localhost:3001"

export function PackagePage() {
    const [packages, setPackages] = useState([])
    const [newPackage, setNewPackage] = useState("")
    const [cities, setCities] = useState([])
//use effect for cities, finding what even should trigger the function
    useEffect(() => {
    getPackages()
    }, [])

    const getPackages = () => {
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

    //and when adding a package make sure associated drivers package list is updated
    const addPackage = async (newPackageInfo) => {
        const driverID = await getDriverID(newPackageInfo["city"])
        const data = await fetch(API_BASE + "/package/add" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({tba: newPackageInfo["tba"], weight: newPackageInfo["weight"], 
            item: newPackageInfo["item"], location: newPackageInfo["location"], city: newPackageInfo["city"], 
            driverID: driverID})
        }).then(res => res.json())

        setPackages([...packages, data])
        setNewPackage("")
    }
    //if package city is edited driverID needs to update too
    const editPackage = async (id, newPackageInfo) => {
        const data = await fetch(API_BASE + "/package/update/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({tba: newPackageInfo["tba"], weight: newPackageInfo["weight"], 
            item: newPackageInfo["item"], location: newPackageInfo["location"], city: newPackageInfo["city"], 
            driverID: newPackageInfo["driverID"]})
        }).then(res => res.json())

        let newPackages = packages
        const index = newPackages.findIndex((el) => el._id === data._id)
        newPackages[index] = data
        setPackages(newPackages)
        setNewPackage("")
        getPackages()
    }

    const getDriverID = async driverCity => {
        const drivers = await getDrivers(driverCity)
        return drivers[0].driverID
    }

    const getDrivers =  async (driverCity) => {
        const data = await fetch(API_BASE + "/driver/" + driverCity)
        .then(res => res.json())
        .catch(err => console.error("Error: ", err))
        return data
      }

    const getCities = () => {
        fetch(API_BASE + "/driver/cities")
        .then(res => res.json())
        .then(data => setCities(data))
        .catch(err => console.error("Error: ", err))
    }

    return (
        <>
        <div className="flex flex-col items-center h-full">
            <NavBar />
            <div className="text-4xl mt-5 mb-5 xl:mt-10 xl:mb-10">Packages</div>
            <div className="flex flex-row w-full justify-evenly items-start py-10">
                <PackageList packages={packages} deletePackage={deletePackage} editPackage={editPackage}/>
            </div>
            <AddPackageModal addPackage={addPackage} getCities={getCities}/>
        </div>
        </>
    )
}
