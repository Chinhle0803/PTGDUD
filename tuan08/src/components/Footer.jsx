import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-8 py-12 rounded-t-xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <p className="text-sm mb-4">
            Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-l-md px-3 py-1 text-black w-full text-sm"
              style={{color: 'white'}}
            />
            <button className="bg-pink-500 text-white px-4 py-1 rounded-r-md text-sm flex items-center gap-1">
              Send <FaPaperPlane size={12} />
            </button>
          </div>
        </div>

        {/* Learn More */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Learn More</h3>
          <ul className="text-sm space-y-1">
            <li>Our Cooks</li>
            <li>See Our Features</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Shop</h3>
          <ul className="text-sm space-y-1">
            <li>Gift Subscription</li>
            <li>Send Us Feedback</li>
          </ul>
        </div>

        {/* Recipes */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Recipes</h3>
          <ul className="text-sm space-y-1">
            <li>What to Cook This Week</li>
            <li>Pasta</li>
            <li>Dinner</li>
            <li>Healthy</li>
            <li>Vegetarian</li>
            <li>Vegan</li>
            <li>Christmas</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-4 text-xs text-gray-400">
        <div className="flex items-center gap-2 mb-4 md:mb-2">
          <img src={"../public/logo.jpg"} alt="Cheffify Logo" className="w-6 h-6"  style={{width: '150px'}}/>
        </div>
        <p>2025 Cheffify Company · <a href="#" className="underline">Terms of Service</a> · <a href="#" className="underline">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
