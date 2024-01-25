// App.js
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const Delivery = () => {
  const [order, setOrder] = useState({
    item: '',
    quantity: 10,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order submission logic here
    console.log('Order Submitted:', order);
  };

  return (
    <div className="bg-gray-100 font-sans min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6">Welcome to Awesome Delivery</h1>
        <p className="text-gray-600 mb-8">Fast and reliable delivery service right at your doorstep.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Order Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Place Your Order</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="item" className="block text-sm font-medium text-gray-600">Item</label>
                <input
                  type="text"
                  id="item"
                  name="item"
                  value={order.item}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-600">Quantity</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={order.quantity}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Place Order</button>
            </form>
          </div>

          {/* Delivery Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Delivery Information</h2>
            <div className="bg-gray-50 p-4 rounded-md">
              {/* Display delivery details */}
              <p className="text-sm text-gray-600"><span className="font-semibold">Delivery Address:</span> 123 Main St, Cityville</p>
              <p className="text-sm text-gray-600"><span className="font-semibold">Delivery Time:</span> Within 45 minutes</p>
              <p className="text-sm text-gray-600"><span className="font-semibold">Contact:</span> (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
