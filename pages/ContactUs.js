// ContactUs.js

import React from "react";

const ContactUs = () => {
   
     const handleSubmit = (e) => {
    e.preventDefault();
          // Handle form submission logic here
        };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md p-8 bg-white shadow-md rounded-md">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          We'd love to hear from you. Feel free to reach out if you have any
          questions or feedback.
        </p>

        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Sneakz"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="sneakzshoehub@gmail"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="How can we assist you?"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
