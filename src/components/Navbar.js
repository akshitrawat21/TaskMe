import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-5 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">TaskMe</a>
        <div className="space-x-4 flex items-center">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/about" className="hover:text-gray-300">About</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
