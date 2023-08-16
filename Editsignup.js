Certainly! I've added more color and design enhancements to your Signup component. Here's the updated code with improved styling:

```jsx
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function Signup({ user }) {
    const [first, setfirst] = useState(false);
    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [account, setaccount] = useState();
    const [load, setloading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (localStorage.getItem("jwt")) {
            router.push("/");
        }
    }, []);

    const onchange = () => {
        setfirst(!first);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setloading(true);
        const data1 = {
            email: email,
            username: name,
            Account_type: account,
            password: password,
        };
        let res = await fetch(`http://localhost:1337/api/auth/local/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data1),
        });
        const data = await res.json();
        setloading(false);

        if (!data.error) {
            toast.success("Sign-up successful!", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

            localStorage.setItem("jwt", data.jwt);

            if (account === "admin") {
                router.push("/");
            } else if (account === "user") {
                router.push("/vendor");
            }
        } else {
            const errorMessage = data.error.message;
            const phoneNumberTakenMessage = "This attribute must be unique";

            if (errorMessage === phoneNumberTakenMessage) {
                toast.error("Phone number already taken!", {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } else {
                toast.error(errorMessage, {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        }
    };

    const change = (e) => {
        if (e.target.name === "name") {
            setname(e.target.value);
        } else if (e.target.name === "email") {
            setemail(e.target.value);
        } else if (e.target.name === "password") {
            setpassword(e.target.value);
        } else if (e.target.name === "account") {
            setaccount(e.target.value);
        }
    };

    return (
        <div className="bg-gradient-to-b from-blue-700 to-blue-900 min-h-screen flex items-center justify-center">
            <div className="bg-white p-6 shadow-md rounded-xl w-full md:w-1/2 lg:w-2/5">
                <ToastContainer />
                <form onSubmit={onSubmit} className="text-left">
                    <h1 className="text-xl md:text-3xl my-5 font-extrabold text-center text-gray-800">
                        Create an account
                    </h1>
                    <div className="mb-4">
                        <label
                            htmlFor="account"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Select an option
                        </label>
                        <select
                            onChange={change}
                            name="account"
                            value={account || ""}
                            id="account"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2"
                        >
                            <option defaultValue>Choose Admin/User</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Your name
                        </label>
                        <input
                            onChange={change}
                            type="text"
                            id="name"
                            name="name"
                            value={name || ""}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                            placeholder="Your name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Your email
                        </label>
                        <input
                            onChange={change}
                            type="email"
                            id="email"
                            name="email"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                            placeholder="name@flowbite.com"
                            value={email || ""}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Your password
                        </label>
                        <input
                            onChange={change}
                            name="password"
                            type="password"
                            id="password"
                            value={password || ""}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                            placeholder="Password"
                            required
                            minLength={6}
                        />
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input
                                onChange={onchange}
                                id="terms"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-orange-300"
                                required
                            />
                        </div>
                        <label
                            htmlFor="terms"
                            className="ml-
