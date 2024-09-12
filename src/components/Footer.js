import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-4">
      <div className="max-w-screen-xl mx-auto px-4">
        <p>&copy; 2024 TaskMe. All rights reserved.</p>
        <p>Crafted with React and styled elegantly using Tailwind CSS</p>
        
        {/* Social Media Links */}
        <div className="mt-4 flex justify-center space-x-6">
          <a href="https://twitter.com/akshitrawat21" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com/in/akshitrawat21" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/akshitrawat21" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
