import React from "react"
import { NavBar } from "../components/navBar"
import { PackageList } from "../components/packageList"
import { useState, useEffect } from 'react'
import { AddPackageModal } from "../components/addPackageModal"

const API_BASE = "http://localhost:3001"

export function PackagePage() {
    const [packages, setPackages] = useState([])
    const [cities, setCities] = useState([])
    const [users, setUsers] = useState([])

    //get all packages and cities on page load
    useEffect(() => {
        getPackages()
        getCities()
        getUsers()
    }, [])

    const getPackages = () => {
        fetch(API_BASE + "/packages")
        .then(res => res.json())
        .then(data => setPackages(data))
        .catch(err => console.error("Error: ", err))
    }

    const getUsers = async () => {
        await fetch(API_BASE + "/users")
        .then(res => res.json())
        .then(data => setCities(data))
        .catch(err => console.error("Error: ", err))
    }

    const getCities = () => {
        fetch(API_BASE + "/drivers/cities")
        .then(res => res.json())
        .then(data => setCities(data))
        .catch(err => console.error("Error: ", err))
    }

    const deletePackage = async (id, dID) => {
        const data = await fetch(API_BASE + "/packages/delete/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ driverID: dID })
            })
            .then(res => res.json())
    
        setPackages(packages => packages.filter(p => p._id !== data._id))
    }

    //makes sure fields are filled out properly
    const checkNewPackageFields = (newPackageInfo, id, type) => {
       if (type === "add"){
            addPackage(newPackageInfo)
       }else if (type === "edit") {
            editPackage(id, newPackageInfo)
       }
    }

    const addPackage = async (newPackageInfo) => {
        const driverID = await getDriverID(newPackageInfo["city"])
        const data = await fetch(API_BASE + "/packages/add" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({tba: newPackageInfo["tba"], 
                weight: newPackageInfo["weight"], item: newPackageInfo["item"], 
                location: newPackageInfo["location"], city: newPackageInfo["city"], 
                driverID: driverID})
        }).then(res => res.json())

        setPackages([...packages, data])
    }

    const editPackage = async (id, newPackageInfo) => {
        const newDriverID = await getDriverID(newPackageInfo["city"])
        const data = await fetch(API_BASE + "/packages/update/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({tba: newPackageInfo["tba"], 
            weight: newPackageInfo["weight"], item: newPackageInfo["item"], 
            location: newPackageInfo["location"], city: newPackageInfo["city"], 
            driverID: newPackageInfo["driverID"], newDriverID: newDriverID})
        }).then(res => res.json())

        let newPackages = packages
        const index = newPackages.findIndex((el) => el._id === data._id)
        newPackages[index] = data
        setPackages(newPackages)
        getPackages()
    }

    const getDriverID = async driverCity => {
        const drivers = await getDrivers(driverCity)
        return drivers[0].driverID
    }

    const getDrivers =  async (driverCity) => {
        const data = await fetch(API_BASE + "/drivers/city/" + driverCity)
        .then(res => res.json())
        .catch(err => console.error("Error: ", err))
        return data
    }

    const addUser = async (newUser) => {
        await fetch(API_BASE + "/users/add" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username: newUser["username"], 
                password: newUser["password"], type: newUser["type"], 
                driverID: newUser["driverID"], city: newUser["city"]})
        }).then(res => res.json())
    }

    return (
        <div className="flex flex-col items-center h-full">
            <NavBar cities={cities} addUser={addUser} users={users}/>
            <div className="text-4xl mt-5 mb-5 xl:mt-10 xl:mb-10">Packages</div>
            <div className="flex flex-row w-full justify-evenly items-start py-10">
                <PackageList packages={packages} deletePackage={deletePackage} 
                    editPackage={checkNewPackageFields} 
                    cities={cities}/>
            </div>
            <AddPackageModal addPackage={checkNewPackageFields} cities={cities} 
                packages={packages}/>
        </div>
    )
}
