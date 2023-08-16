import { useState } from "react";

export default function Home() {
    const [isTrendsModalOpen, setTrendsModalOpen] = useState(false);
    const [isTransactionModalOpen, setTransactionModalOpen] = useState(false);
    const [isVendorsModalOpen, setVendorsModalOpen] = useState(false);

    function openModal(modalId) {
        if (modalId === 'trendsModal') {
            setTrendsModalOpen(true);
        } else if (modalId === 'transactionModal') {
            setTransactionModalOpen(true);
        } else if (modalId === 'vendorsModal') {
            setVendorsModalOpen(true);
        }
    }

    function closeModal(modalId) {
        if (modalId === 'trendsModal') {
            setTrendsModalOpen(false);
        } else if (modalId === 'transactionModal') {
            setTransactionModalOpen(false);
        } else if (modalId === 'vendorsModal') {
            setVendorsModalOpen(false);
        }
    }

    return (
        <div>
            {/* Your header */}
            <div className="bg-blue-600 p-6 shadow-md text-white">
                <h1 className="text-3xl font-bold">Supermarket</h1>
                <p className="text-gray-300 mt-2">Seasonal Regional Trends & Transaction Data</p>
            </div>

            {/* Modals */}
            {isTrendsModalOpen && (
                <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center">
                    {/* Modal content for trends prediction */}
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Seasonal Regional Trends</h2>
                        {/* Add content for trends prediction */}
                        <img src="https://via.placeholder.com/200" alt="Trends" className="mb-4 rounded-lg" />
                        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg" onClick={() => closeModal('trendsModal')}>Close</button>
                    </div>
                </div>
            )}
            {isTransactionModalOpen && (
                <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center">
                    {/* Modal content for transaction data */}
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Transaction Data</h2>
                        {/* Add content for transaction data */}
                        <img src="https://via.placeholder.com/200" alt="Transaction" className="mb-4 rounded-lg" />
                        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg" onClick={() => closeModal('transactionModal')}>Close</button>
                    </div>
                </div>
            )}
            {isVendorsModalOpen && (
                <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center">
                    {/* Modal content for vendors info */}
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Local Vendors</h2>
                        {/* Add content for vendors info */}
                        <img src="https://via.placeholder.com/200" alt="Vendors" className="mb-4 rounded-lg" />
                        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg" onClick={() => closeModal('vendorsModal')}>Close</button>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="container mx-auto mt-6 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-400 p-6 shadow-md rounded-lg">
                        <h2 className="text-xl font-semibold mb-2 cursor-pointer text-blue-600" onClick={() => openModal('trendsModal')}>Seasonal Regional Trends</h2>
                    </div>
                    <div className="bg-purple-400 p-6 shadow-md rounded-lg">
                        <h2 className="text-xl font-semibold mb-2 cursor-pointer text-blue-600" onClick={() => openModal('transactionModal')}>Transaction Data</h2>
                    </div>
                </div>
                <div className="mt-6 bg-pink-400 p-6 shadow-md rounded-lg">
                    <h2 className="text-xl font-semibold mb-2 cursor-pointer text-blue-600" onClick={() => openModal('vendorsModal')}>Local Vendors</h2>
                </div>
            </div>
        </div>
    );
}
