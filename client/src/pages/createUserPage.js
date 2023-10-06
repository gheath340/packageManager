import React from "react";
import { NavBar } from '../components/navBar'
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


export function CreateUserPage(adduser) {
    const [newUser, setNewUser] = useState({username: "", password: "", type: "", 
        driverID: ""})

    //update package info everytime a field is changed
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewUser({...newUser, [name]: value,})
    }

    const handleSubmitPress = (event) => {
        if (event.key === "Enter") {
            errorCheck()
        }
    }

    const onSubmit = () => {
        toast.done('User successfully created')
        //addUser(newUser)
    }

    const EmptyInputsError = () => {
        toast.error('Please fill in all fields', { hideProgressBar: true, 
            closeOnClick: true, pauseOnHover: true });
    }

    const UsedUsernameError = () => {
        toast.error('Username has already been assigned', { hideProgressBar: true, 
            closeOnClick: true, pauseOnHover: true });  
    }

    const errorCheck = () => {
        let failed = false
        if (newUser["username"] === "" || newUser["password"] === "" || 
            newUser["type"] === "" || 
            (newUser["type"] === "driver" && newUser["city"] === "")){
            EmptyInputsError()
            failed = true
        }else{
    //         package.forEach(p => {
    //             if (newPackage["tba"] === p.tba){
    //                 UsedTbaError()
    //                 failed = true
    //             }
    //         })
        }
       if (!failed){
            onSubmit()
       }
    }
    

    return (
        <div className="flex flex-col items-center h-full">
            <NavBar />
            <div className="text-4xl mt-5 xl:mt-10">Create User</div>
            <div className="flex flex-col justify-center items-center w-full h-full gap-5">
            <div onKeyDown={handleSubmitPress} className="flex justify-center
                items-center gap-4">
            <div className="flex flex-col items-center">
                    <label>Username</label>
                    <label>Password</label>
                    <label>Type</label>
                    {newUser.type === "Driver" && (
                        <label>DriverID</label>
                    )}
            </div>
            <div className="flex flex-col divide-y divide-gray-300">
                <input className="focus:outline-none" 
                        placeholder="Username" 
                        value={newUser.username}  
                        onChange={handleInputChange} 
                        name="username"></input>
                <input className="focus:outline-none" 
                        placeholder="Password" 
                        value={newUser.password} 
                        onChange={handleInputChange} 
                        name="password"></input>
                <select className="focus:outline-none" 
                        placeholder="Type" 
                        value={newUser.type} 
                        onChange={handleInputChange} 
                        name="type">
                        <option></option>
                        <option>Driver</option>
                        <option>Admin</option>
                        </select>
                {newUser.type === "Driver" && (
                    <input className="focus:outline-none cursor-pointer" 
                    placeholder="DriverID" 
                    value={newUser.driverID}
                    onChange={handleInputChange} 
                    name="DriverID"></input>
                )
                }
                <div></div>
            </div>
            </div>
            <button onClick={errorCheck} className="border border-gray-700 rounded-md 
            hover:scale-110 hover:duration-200 p-1">
                Add User</button>
            </div>
        </div>
    )
}