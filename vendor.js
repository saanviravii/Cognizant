import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
    const [showUpdateForm, setShowUpdateForm] = useState(false);

    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="bg-white p-6 shadow-md">
                <h1 className="text-3xl font-bold">Vendor Dashboard</h1>
                <p className="text-gray-500 mt-2">Update Product Details & View Transactions</p>
            </div>

            <div className="container mx-auto mt-6 p-6">
                <div className="bg-white p-6 shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Product Details</h2>
                    {showUpdateForm ? (
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Product Name</label>
                                <input
                                    type="text"
                                    className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm"
                                    // Add product name input field here
                                />
                            </div>
                            {/* Add more input fields for product details */}
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                            >
                                Update Product Details
                            </button>
                        </form>
                    ) : (
                        <button
                            onClick={() => setShowUpdateForm(true)}
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                        >
                            Update Product Details
                        </button>
                    )}
                </div>

                <div className="mt-6 bg-white p-6 shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Transaction Data</h2>
                    {/* Display transaction data here */}
                </div>
            </div>
        </div>
    );
}
