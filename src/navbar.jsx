import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 rounded">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold dark:text-white">Flowbite</span>
        </a>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden block text-gray-500 hover:text-gray-700">
          {isOpen ? '✖' : '☰'}
        </button>
        <div className={`w-full md:flex md:w-auto ${isOpen ? 'block' : 'hidden'}`}> 
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8">
            {['Home', 'About', 'Services', 'Pricing', 'Contact'].map((item) => (
              <li key={item}>
                <a href="#" className="block py-2 px-3 text-gray-900 dark:text-white">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
