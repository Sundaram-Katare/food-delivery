import { useState } from "react";

function Footer() {
  const meCompo = () => {
    console.log("Sundaram");
  };

  return (
    <>
      <footer className="w-full bg-gray-900 text-white p-10">
        {/* Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-sm text-gray-300">
          {/* Column 1 */}
          <div>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">About</ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Career</ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Blogs</ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Lead</ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Value</ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Privacy</ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Terms</ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Security</ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">FAQs</ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Mobile</ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Contact</ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer" onClick={meCompo}>
              Contributer
            </ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Seller</ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Deliver</ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Franchise</ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Warehouse</ul>
          </div>

          {/* Column 4 */}
          <div>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Vegetables & Fruits</ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Cold Drinks & Juices</ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Bakery & Biscuits</ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Dry Fruits, Masala & Oil</ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Paan Corner</ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Pharma & Wellness</ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Ice Creams & Frozen Desserts</ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Beauty & Cosmetics</ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Electronics & Electricals</ul>
          </div>

          {/* Column 5 */}
          <div>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">About</ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Career</ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Blogs</ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Lead</ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Value</ul>
          </div>

          {/* Column 6 */}
          <div>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">About</ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Career</ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Blogs</ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Lead</ul>
            <ul className="mb-2 hover:text-blue-500 cursor-pointer">Value</ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
