import React from "react";
import { NavBar } from "../components/navBar";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const API_BASE = "http://localhost:3001";

export function CreateUserPage() {
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    type: "",
    driverID: "",
  });

  //update package info everytime a field is changed
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmitPress = (event) => {
    if (event.key === "Enter") {
      errorCheck();
    }
  };

  const addUser = async () => {
    await fetch(API_BASE + "/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: newUser["username"],
        password: newUser["password"],
        type: newUser["type"],
        driverID: newUser["driverID"],
      }),
    }).then((res) => res.json());
  };

  const emptyInputsError = () => {
    if (
      newUser["username"] === "" ||
      newUser["password"] === "" ||
      newUser["type"] === "" ||
      (newUser["type"] === "driver" && newUser["driverID"] === "")
    ) {
      toast.error("Please fill in all fields", {
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
      return false;
    } else {
      return true;
    }
  };

  const getUsers = async () => {
    const data = await fetch(API_BASE + "/users/")
      .then((res) => res.json())
      .catch((err) => console.error("Error: ", err));
    return data;
  };

  const usedUsernameError = async () => {
    //get all usernames and check against them
    const users = await getUsers();
    for (let i = 0; i <= users.length; i++) {
      if (users[i]["username"] === newUser["username"]) {
        toast.error("Username has already been assigned", {
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        });
        return false;
      }
      return true;
    }
  };

  const errorCheck = async () => {
    let usernameErr = await usedUsernameError();
    let emptyErr = emptyInputsError();
    console.log(usernameErr);
    console.log(emptyErr);
    if (emptyErr & usernameErr) {
      addUser();
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center h-full">
        <div className="text-4xl mt-5 xl:mt-10">Create User</div>
        <div className="flex flex-col justify-center items-center w-full h-full gap-5">
          <div
            onKeyDown={handleSubmitPress}
            className="flex justify-center
                items-center gap-4"
          >
            <div className="flex flex-col items-center">
              <label>Username</label>
              <label>Password</label>
              <label>Type</label>
              {newUser.type === "Driver" && <label>DriverID</label>}
            </div>
            <div className="flex flex-col divide-y divide-gray-300">
              <input
                className="focus:outline-none"
                placeholder="Username"
                value={newUser.username}
                onChange={handleInputChange}
                name="username"
              ></input>
              <input
                className="focus:outline-none"
                placeholder="Password"
                value={newUser.password}
                onChange={handleInputChange}
                name="password"
              ></input>
              <select
                className="focus:outline-none"
                placeholder="Type"
                value={newUser.type}
                onChange={handleInputChange}
                name="type"
              >
                <option></option>
                <option>Driver</option>
                <option>Admin</option>
              </select>
              {newUser.type === "Driver" && (
                <input
                  className="focus:outline-none cursor-pointer"
                  placeholder="DriverID"
                  value={newUser.driverID}
                  onChange={handleInputChange}
                  name="DriverID"
                ></input>
              )}
              <div></div>
            </div>
          </div>
          <button
            onClick={errorCheck}
            className="border border-gray-700 rounded-md 
            hover:scale-110 hover:duration-200 p-1"
          >
            Add User
          </button>
        </div>
      </div>
    </>
  );
}
