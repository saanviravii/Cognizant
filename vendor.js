import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [productName, setProductName] = useState('');
  const [productQty, setProductQty] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Create an authorization token if needed
  
    const authToken = localStorage.getItem("jwt"); // Replace with your actual authorization token

    const formData = new FormData();
    formData.append('product-name', productName);
    formData.append('product-qty', productQty);
    formData.append('product-price', productPrice);

    try {
      const response = await fetch('http://localhost:1337/api/products', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        body: formData,
      });

      if (response.ok) {
        // Product added successfully
        console.log('Product added successfully');
      } else {
        // Handle error
        console.error('Error adding product');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
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
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="product-name" className="block text-gray-600 font-medium">Product Name</label>
                <input
                  type="text"
                  id="product-name"
                  name="product-name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-indigo-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="product-qty" className="block text-gray-600 font-medium">Quantity</label>
                <input
                  type="number"
                  id="product-qty"
                  name="product-qty"
                  value={productQty}
                  onChange={(e) => setProductQty(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-indigo-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="product-price" className="block text-gray-600 font-medium">Price</label>
                <input
                  type="number"
                  step="0.01"
                  id="product-price"
                  name="product-price"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-indigo-300"
                  required
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
    </div >

  )
}
// export async function getServerSideProps(context) {
//   let res = await fetch(`http://localhost:3000/api/ai`, {
//     method: "GET",
//     headers: {
//       "Content-type": "application/json",
//     },
//   });
//   let d = await res.json();
//   // Assuming the JSON content is stored in the 'data' variable
//   const productsArray = d[0]?.candidates[0]?.content; // Access the JSON content

//   return {
//     props: { products: productsArray }, // will be passed to the page component as props
//   };
// }
