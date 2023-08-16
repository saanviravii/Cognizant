import Image from 'next/image';
import { useState } from 'react';
import { FaEdit, FaList, FaStoreAlt } from 'react-icons/fa';

export default function Home() {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [predictedProducts, setPredictedProducts] = useState([
    'Product A',
    'Product B',
    'Product C',
  ]);
  const [nearestVendors, setNearestVendors] = useState([
    { name: 'Vendor A', distance: '2 miles' },
    { name: 'Vendor B', distance: '3 miles' },
    { name: 'Vendor C', distance: '5 miles' },
  ]);
  const [locallySourcedProducts, setLocallySourcedProducts] = useState([
    { name: 'Organic Mangoes', price: '₹200/kg', description: 'Fresh and juicy mangoes from local farms.' },
    { name: 'Basmati Rice', price: '₹100/kg', description: 'Aromatic long-grain basmati rice.' },
    // Add more locally sourced products...
  ]);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="bg-white p-6 shadow-md">
        <h1 className="text-3xl font-bold flex items-center">
          <FaStoreAlt className="mr-2 text-blue-500" />
          Vendor Dashboard
        </h1>
        <p className="text-gray-500 mt-2">Update Product Details & View Transactions</p>
      </div>

      <div className="container mx-auto mt-6 p-6 grid gap-6 grid-cols-1 sm:grid-cols-2">
        <div className="bg-white p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Product Details</h2>
          <ul className="list-disc pl-6">
            {locallySourcedProducts.map((product, index) => (
              <li key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-blue-600">{product.price}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Predicted Products</h2>
          <ul className="list-disc pl-6">
            {predictedProducts.map((product, index) => (
              <li key={index} className="flex items-center">
                <FaList className="mr-2 text-blue-500" />
                {product}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Nearest Vendors</h2>
          <ul className="list-disc pl-6">
            {nearestVendors.map((vendor, index) => (
              <li key={index} className="flex items-center">
                <FaEdit className="mr-2 text-blue-500" />
                {vendor.name} - {vendor.distance}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

