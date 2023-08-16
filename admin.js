import { useState } from "react";

export default function Home() {
    const [isTrendsModalOpen, setTrendsModalOpen] = useState(false);
    const [isTransactionModalOpen, setTransactionModalOpen] = useState(false);
    const [isVendorsModalOpen, setVendorsModalOpen] = useState(false);

    const vendorDetails = [
        {
            id: 1,
            name: "Kumar Vegetables",
            email: "kumarveggies@example.com",
            phone: "9876543210",
            address: "12/34 Main Street, Pune",
        },
        {
            id: 2,
            name: "Sahara Sweets",
            email: "saharasweets@example.com",
            phone: "9988776655",
            address: "45/6 Sweet Lane, Mumbai",
        },
        // Add more entries...
        {
            id: 3,
            name: "Rajasthan Spices",
            email: "rajasthanspices@example.com",
            phone: "8765432109",
            address: "67/89 Spice Market, Jaipur",
        },
        {
            id: 4,
            name: "Chennai Fresh Mart",
            email: "chennaifreshmart@example.com",
            phone: "8877665544",
            address: "90/23 Fresh Avenue, Chennai",
        },
        {
            id: 5,
            name: "Kolkata Dairy Delight",
            email: "dairydelight@example.com",
            phone: "8899887766",
            address: "34/67 Milk Lane, Kolkata",
        },
    ];

    const topProducts = [
        {
            id: 1,
            productName: "Organic Mangoes",
            price: "₹200/kg",
            description: "Fresh and juicy mangoes from local farms.",
        },
        {
            id: 2,
            productName: "Basmati Rice",
            price: "₹100/kg",
            description: "Long-grain aromatic basmati rice.",
        },
        // Add more entries...
        {
            id: 3,
            productName: "Rose Sandesh",
            price: "₹20/piece",
            description: "Traditional rose-flavored dessert.",
        },
        {
            id: 4,
            productName: "Kashmiri Apples",
            price: "₹120/kg",
            description: "Crisp and sweet apples from Kashmir.",
        },
        {
            id: 5,
            productName: "Gujarati Dhokla",
            price: "₹30/piece",
            description: "Soft and spongy steamed snack.",
        },
    ];

    const transactionDetails = [
        {
            id: 1,
            productName: "Fresh Paneer",
            price: "₹150/kg",
            quantity: 2,
            total: "₹300",
        },
        {
            id: 2,
            productName: "Chole Masala",
            price: "₹50/packet",
            quantity: 3,
            total: "₹150",
        },
        // Add more entries...
        {
            id: 3,
            productName: "Alphonso Mangoes",
            price: "₹250/dozen",
            quantity: 1,
            total: "₹250",
        },
        {
            id: 4,
            productName: "Ghee",
            price: "₹180/500g",
            quantity: 2,
            total: "₹360",
        },
        
    ];

    function openModal(modalId) {
        if (modalId === "trendsModal") {
            setTrendsModalOpen(true);
        } else if (modalId === "transactionModal") {
            setTransactionModalOpen(true);
        } else if (modalId === "vendorsModal") {
            setVendorsModalOpen(true);
        }
    }

    function closeModal(modalId) {
        if (modalId === "trendsModal") {
            setTrendsModalOpen(false);
        } else if (modalId === "transactionModal") {
            setTransactionModalOpen(false);
        } else if (modalId === "vendorsModal") {
            setVendorsModalOpen(false);
        }
    }

    return (
        <div>
            {/* Your header */}
            <div className="bg-[#B2D2A4] p-6 shadow-md">
                <h1 className="text-3xl font-bold">Supermarket</h1>
                <p className="text-black-500 mt-2">Seasonal Regional Trends & Transaction Data</p>
            </div>

            {/* Modals */}
            {isTrendsModalOpen && (
                <div className="fixed inset-0 bg-[#B2D2A4] bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 shadow-md max-w-5xl w-full">
                        <h2 className="text-xl font-semibold mb-2">Seasonal Regional Trends</h2>
                        <h3 className="text-lg font-semibold mb-2">Top Products</h3>
                        {topProducts.map((product) => (
                            <div key={product.id} className="border p-4 rounded-md mb-4">
                                <p>Name: {product.productName}</p>
                                <p>Price: {product.price}</p>
                                <p>Description: {product.description}</p>
                            </div>
                        ))}
                        <button onClick={() => closeModal("trendsModal")}>Back</button>
                    </div>
                </div>
            )}
            {isTransactionModalOpen && (
                <div className="fixed inset-0 bg-[#B2D2A4] bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 shadow-md max-w-5xl w-full">
                        <h2 className="text-xl font-semibold mb-2">Transaction Data</h2>
                        {transactionDetails.map((transaction) => (
                            <div key={transaction.id} className="border p-4 rounded-md mb-4">
                                <p>Product Name: {transaction.productName}</p>
                                <p>Price: {transaction.price}</p>
                                <p>Quantity: {transaction.quantity}</p>
                                <p>Total: {transaction.total}</p>
                            </div>
                        ))}
                        <button onClick={() => closeModal("transactionModal")}>Back</button>
                    </div>
                </div>
            )}
            {isVendorsModalOpen && (
                <div className="fixed inset-0 bg-[#B2D2A4] bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 shadow-md max-w-5xl w-full">
                        <h2 className="text-xl font-semibold mb-2">Local Vendors</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {vendorDetails.map((vendor) => (
                                <div key={vendor.id} className="border p-4 rounded-md">
                                    <p>Name: {vendor.name}</p>
                                    <p>Email: {vendor.email}</p>
                                    <p>Phone: {vendor.phone}</p>
                                    <p>Address: {vendor.address}</p>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => closeModal("vendorsModal")}>Back</button>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="container mx-auto mt-6 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#B2D2A4] p-6 shadow-md">
                        <h2 className="text-xl font-semibold mb-2 cursor-pointer" onClick={() => openModal("trendsModal")}>Seasonal Regional Trends</h2>
                    </div>
                    <div className="bg-[#B2D2A4] p-6 shadow-md">
                        <h2 className="text-xl font-semibold mb-2 cursor-pointer" onClick={() => openModal("transactionModal")}>Transaction Data</h2>
                    </div>
                </div>
                <div className="mt-6 bg-[#B2D2A4] p-6 shadow-md">
                    <h2 className="text-xl font-semibold mb-2 cursor-pointer" onClick={() => openModal("vendorsModal")}>Local Vendors</h2>
                </div>
            </div>
        </div>
    );
}
