import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-sm bg-white">
      {/* Logo và Tên */}
      <div className="flex items-center space-x-2">
        <img src={"../public/logo.jpg"} alt="" />   
      </div>

      {/* Thanh tìm kiếm */}
      <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 w-72">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="What would you like to cook?"
          className="bg-transparent focus:outline-none w-full text-sm"
        />
      </div>

      {/* Menu */}
      <nav className="flex items-center space-x-6 text-sm text-gray-700">
        <a href="#">What to cook</a>
        <a href="#">Recipes</a>
        <a href="#">Ingredients</a>
        <a href="#">Occasions</a>
        <a href="#">About Us</a>
        <button className="bg-pink-100 text-pink-600 px-4 py-1 rounded-full" style={{backgroundColor: '#dfdfdf', color: '#da1598'}}>Login</button>
        <button className="bg-pink-500 text-white px-4 py-1 rounded-full" style={{backgroundColor: '#da1598', color: '#dfdfdf'}}>Subscribe</button>
      </nav>
    </header>
  );
};

export default Header;
