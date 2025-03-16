import { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import Cart from "./Cart";

import Modal from "./Modal.jsx"; // Import the modal component

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between border-2 border-grey-500 rounded-lg p-2 lg: p-4">
        {/* Left: Logo */}
        <div>
          <h1 className="text-blue-500 font-bold sm:text-xl md:text-2xl lg:lg:text-4xl ml-1">
            Zippy<span className="text-black">Grocers</span>
          </h1>
        </div>

        {/* Center: Search Bar */}
        <div className="flex items-center border-2 border-gray-500 rounded-lg px-2">
          <input
            type="text"
            placeholder="Get every item in 10 minutes"
            className="text-center outline-none w-20 sm:w-60 sm:h-5 md:w-80 md:h-10 lg:w-80 lg:h-10"
          />

          <FaSearch className="text-gray-500 ml-2" />
        </div>

        {/* Right: Login & Cart */}
        <div className="flex space-x-3 flex-col justify-center align-center md:flex-row items-center space-x-6">
          {/* Open Modal on Click */}
          <span
            className="hidden md:flex visible cursor-pointer font-semibold"
            onClick={() => setIsModalOpen(true)}
          >
            Login
          </span>

          <FaShoppingCart className="w-6 h-6 text-gray-700 cursor-pointer" 
                          onClick={() => setIsCartOpen(true)} 
          />
        </div>

        {/* <span
            className="cursor-pointer font-semibold flex md:hidden"
            onClick={() => setIsModalOpen(true)}
          >
            <AiOutlineMenu />
          </span> */}
      </nav>

      {/* Use the Modal Component */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
