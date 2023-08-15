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
        if (first === true) {
            setfirst(false);
        } else {
            setfirst(true);
        }
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
            toast.success("sign-up successfull!", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            localStorage.setItem("jwt", data.jwt);

            if (account === "admin") {
                router.push("/");
            } else if (account === "user") {
                router.push("/vendor");
            }
        } else {
            if ("This attribute must be unique" === data.error.message) {
                toast.error("Phone number already taken!", {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                toast.error(data.error.message, {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
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
        <div>
            <ToastContainer />
            <form
                onSubmit={onSubmit}
                className="block shadow-2xl text-left w-full md:w-1/2 lg:w-2/5 mx-auto rounded-xl md:my-16 mb-5 py-5 md:py-10 md:px-20 px-10"
            >
                <h1 className="text-xl md:text-3xl md:m-5 my-5 font-extrabold text-center">
                    Create an account
                </h1>
                <div className="mb-3">
                    <label
                        htmlFor="account"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Select an option
                    </label>
                    <select
                        onChange={change}
                        type="text"
                        name="account"
                        value={account || ""}
                        id="account"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-2"
                    >
                        <option selected>Choose Admin/User</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
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
                <div className="mb-3">
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
                <div className="mb-3">
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
                        min={6}
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
                        className="ml-2 text-sm font-medium text-gray-900"
                    >
                        I agree with the{" "}
                        <a
                            href="#"
                            className="text-orange-600 hover:underline"
                        >
                            terms and conditions
                        </a>
                    </label>
                </div>
                {!load ? (
                    <button
                        type="submit"
                        className={`text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${!first && "cursor-not-allowed"}`}
                    >
                        Create an account
                    </button>
                ) : (
                    <button
                        type="submit"
                        className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-not-allowed"
                    >
                        <div className="flex" role="status">
                            <svg
                                aria-hidden="true"
                                className="inline w-8 h-6 mr-1 text-gray-200 animate-spin fill-yellow-400"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* ... (animated spinner path data) */}
                            </svg>
                            <span className="sr-only">Loading...</span>
                            <p>Loading....</p>
                        </div>
                    </button>
                )}
                <div className="flex text-xs text-gray-500 mt-6">
                    Already have an account?
                    <Link
                        className="no-underline border-orange text-orange-600"
                        href="/login"
                    >
                        <p>&nbsp; Login here.</p>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Signup;
