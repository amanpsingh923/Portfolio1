import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <span className="text-lg font-medium">Made with</span>
            <Heart size={20} className="mx-2 text-red-500" />
            <span className="text-lg font-medium">using React & Tailwind CSS</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 Aman Prakash Singh. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;