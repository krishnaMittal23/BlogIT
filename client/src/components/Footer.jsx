import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-gray-800">BlogIt</h2>
            <p className="text-gray-500 mt-2">© {new Date().getFullYear()} BlogIt. All rights reserved.</p>
          </div>

          <div className="flex space-x-6 text-gray-500">
            <a href="#" className="hover:text-indigo-500 transition duration-200">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-indigo-500 transition duration-200">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-indigo-500 transition duration-200">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-indigo-500 transition duration-200">
              <FaLinkedinIn size={20} />
            </a>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-gray-600 text-sm text-center md:text-left">
            <a href="#" className="hover:text-indigo-500 transition duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-500 transition duration-200">Terms of Service</a>
            <a href="#" className="hover:text-indigo-500 transition duration-200">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
