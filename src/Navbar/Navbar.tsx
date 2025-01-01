import React, { useState } from "react";

const SearchWithDropdown: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
    <div className="container-nav flex items-center justify-between gap-2 bg-orange-600 p-2 text-white">
        <div className="logo">
            <h1 className="hover:text-orange-500 cursor-pointer">Jbilling</h1>
        </div>
        <div className="navbar-section">
            <ul className="flex items-center justify-between gap-4">
                <li className="text-orange-400 cursor-pointer">Solent</li>
                <li className="text-orange-400 cursor-pointer">Hello Solent</li>
                <li className="hover:text-orange-400 cursor-pointer">Impersonate</li>
                <li className="hover:text-orange-400 cursor-pointer">My Account</li>
                <li className="hover:text-orange-400 cursor-pointer">jBillingTraining</li>
                <li className="hover:text-orange-400 cursor-pointer">Help</li>
                <li className="hover:text-orange-400 cursor-pointer">Logout</li>
            </ul>
        </div>
   
    <div className="relative w-30 mt-4   ">
      <input
        type="text"
        placeholder="Search for..."
        className="w[10px] px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {/* Icon */}
      <div
        onClick={toggleDropdown}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
      >
        ▼ {/* Unicode for Down Arrow */}
      </div>
      {/* Dropdown */}
      {showDropdown && (
        <ul className="absolute top-full left-0 w-full bg-white border rounded-md shadow-md mt-1 z-10">
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Customer ID</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Order ID</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Invoice ID</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Payment ID</li>
        </ul>
      )}
    </div>
    </div>
    </>
  );
};

export default SearchWithDropdown;
