import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login({ user }) {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [loading, setloading] = useState(false);
    const [account, setaccount] = useState("");
    const router = useRouter();

    useEffect(() => {
        if (localStorage.getItem("jwt")) {
            router.push("/");
        }
    }, []);

    const change = (e) => {
        if (e.target.name === "email") {
            setemail(e.target.value);
        } else if (e.target.name === "password") {
            setpassword(e.target.value);
        } else if (e.target.name === "account") {
            setaccount(e.target.value);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setloading(true);
        const data1 = {
            identifier: email,
            password: password,
        };
        let res = await fetch(`http://localhost:1337/api/auth/local/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data1),
        });
        const data = await res.json();
        setloading(false);

        if (!data.error) {
            toast.success("Login successful!", {
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
            toast.error(data.error.message, {
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
    };

    return (
        <div className="bg-gradient-to-b from-blue-700 to-blue-900 min-h-screen flex items-center justify-center">
            <div className="bg-white p-6 shadow-md rounded-xl w-full md:w-1/2 lg:w-1/3">
                <ToastContainer />
                <form onSubmit={onSubmit} className="text-left">
                    <h1 className="text-3xl mb-6 font-extrabold text-gray-800">
                        Sign in to your account
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
                            <option value="" disabled>Choose Admin/User</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
                    </div>
                    {/* Rest of the form inputs */}
                    {/* ... */}

                    <button
                        type="submit"
                        className={`text-white mt-4 bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${loading ? "cursor-not-allowed opacity-70" : ""}`}
                        disabled={loading}
                    >
                        {loading ? (
                            <div className="flex items-center">
                                <svg
                                    aria-hidden="true"
                                    className="inline w-6 h-6 mr-2 animate-spin text-gray-200 fill-yellow-400"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {/* ... (animated spinner path data) */}
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        ) : (
                            "Sign in to account"
                        )}
                    </button>

                    <div className="flex text-xs lg:text-base text-gray-500 mt-6">
                        Not registered?
                        <Link
                            className="no-underline border-orange text-orange-600"
                            href="/signup"
                        >
                            <p>&nbsp; Create an account.</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
