"use client";
import { useState } from "react";
import InputField from "../inputs/Input";

const SignIn: React.FC = () => {
    interface UserState {
        email: string,
        password: string
    }
    const initialState: UserState = {
        email: "",
        password: ""
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
        <div>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>

                <InputField
                    label= "Email"
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
                    Sign In
                </button>

            </form>
        </div>
    )
}