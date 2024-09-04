"use client";

import { useState } from "react";
import InputField from "../inputs/Input";

const SignUp: React.FC =()=>{
    interface UserState{
        email: string;
        password:string;
    }

    const initialState:UserState ={
        email:'',
        password:''
    }

    const [user, setUser] = useState<UserState>(initialState);
    const handleSubmit = () => { }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 dark:bg-gray-800">
      <div className="w-full max-w-sm bg-gray-800 dark:bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-100 dark:text-gray-300 mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Email"
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
    )
}