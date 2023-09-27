import React from "react"
import { NavBar } from "../components/navBar"
import { useState, useEffect } from 'react'
import { DriverList } from "../components/driverList"
import { AddDriverModal } from "../components/addDriverModal"

const API_BASE = "http://localhost:3001"

export function DriverPage() {
    const [drivers, setDrivers] = useState([])
    const [openDriverItems, setOpenDriverItems] = useState([])

    //get all drivers on page load
    useEffect(() => {
    getDrivers()
    }, [])

    //change which drivers are open for showing package lists
    const toggleOpenDriverItems = (driverID) => {
        setOpenDriverItems(openDriverItems => {
            if (openDriverItems.includes(driverID)) {
               return openDriverItems.filter(item => item !== driverID)
            } else {
                return [...openDriverItems, driverID]
            }
        })
        }

    const getDrivers = () => {
        fetch(API_BASE + "/drivers")
        .then(res => res.json())
        .then(data => setDrivers(data))
        .catch(err => console.error("Error: ", err))
      }

    const deleteDriver = async id => {
        const data = await fetch(API_BASE + "/driver/delete/" + id, {
          method: "DELETE"})
          .then(res => res.json())
        
        if (data === false){
            setDrivers(drivers => drivers.filter(d => d._id !== id))
        }else{
            alert("Can only delete drivers with no packages assigned.")
        }
    }

    //makes sure fields are filled out properly
    const checkNewDriverFields = (newDriverInfo, type) => {
        if (type === "add"){
            addDriver(newDriverInfo)
        }else if (type === "edit") {
            editDriver(newDriverInfo["id"], newDriverInfo)
        }
    }

    const addDriver = async (newDriverInfo) => {
        const data = await fetch(API_BASE + "/driver/add" , {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({driverID: newDriverInfo["driverID"], packages: newDriverInfo["packages"], 
            active: newDriverInfo["active"], lastStop: newDriverInfo["lastStop"], 
            nextStop: newDriverInfo["nextStop"], city: newDriverInfo["city"]})
        }).then(res => res.json())

        setDrivers([...drivers, data])
    }

    //add a check when updating city, do not allow if driver has packages assigned
    const editDriver = async (id, newDriverInfo) => {
        const data = await fetch(API_BASE + "/driver/update/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({city: newDriverInfo["city"], driverID: newDriverInfo["driverID"]})
        }).then(res => res.json())

        let newDrivers = drivers
        const index = newDrivers.findIndex((el) => el._id === data._id)
        newDrivers[index] = data
        setDrivers(newDrivers)
        getDrivers()
    }

    return (
        <>
        <div className="flex flex-col items-center h-full">
            <NavBar />
            <div className="text-4xl mt-5 xl:mt-10">Drivers</div>
            <div className="flex flex-col lg:flex-row w-full pt-36 pb-4 justify-evenly items-center">
                <DriverList drivers={drivers} deleteDriver={deleteDriver} editDriver={checkNewDriverFields} 
                toggleOpenDriverItems={toggleOpenDriverItems} openDriverItems={openDriverItems}/>
            </div>
            <AddDriverModal addDriver={checkNewDriverFields} drivers={drivers}/>
        </div>
        </>
    )
}