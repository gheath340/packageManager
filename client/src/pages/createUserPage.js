import React from "react";
import { NavBar } from "../components/navBar";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Logo from "../box.png";

const API_BASE = "http://localhost:3001";

export function CreateUserPage() {
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    type: "",
    driverID: "",
  });

  const clearFields = () => {
    setNewUser({ username: "", password: "", type: "", driverID: "" });
  };

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
    toast.success("User created", {
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
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
    const users = await getUsers();
    for (let i = 0; i <= users.length - 1; i++) {
      if (users[i]["username"] === newUser["username"]) {
        toast.error("Username has already been assigned", {
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        });
        return false;
      }
    }
    return true;
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
      <div className="flex min-h-full flex-1 flex-col justify-start py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-12 w-auto" src={Logo} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create Account
          </h2>
        </div>
        <div
          className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
          onKeyDown={handleSubmitPress}
        >
          <div className="space-y-4" action="#" method="POST">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  value={newUser.username}
                  onChange={handleInputChange}
                  name="username"
                  id="username"
                  type="username"
                  autoComplete="username"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={newUser.password}
                  onChange={handleInputChange}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="type"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Type
                </label>
              </div>
              <div className="mt-2">
                <select
                  value={newUser.type}
                  onChange={handleInputChange}
                  id="type"
                  name="type"
                  type="type"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white h-9"
                >
                  <option></option>
                  <option>Driver</option>
                  <option>Admin</option>
                </select>
              </div>
            </div>
            {newUser.type === "Driver" && (
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="driverID"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Driver ID
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    value={newUser.driverID}
                    onChange={handleInputChange}
                    id="driverID"
                    name="driverID"
                    type="driverID"
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            )}
            <button
              onClick={() => {
                errorCheck();
                clearFields();
              }}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create user
            </button>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
