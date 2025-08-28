import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, User } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 to-teal-500 flex items-center justify-center shadow-lg">
                <User size={80} className="text-white" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-gray-800 mb-4"
          >
            Aman Prakash Singh
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-blue-600 font-medium mb-8"
          >
            Computer Science Student
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            A final-year Computer Science student with a strong inclination toward research and 
            innovation in tech. My academic journey has been backed by solid fundamentals in data 
            structures, algorithms, and software development, which I've applied across multiple 
            projects. I consider adaptability, analytical thinking, and perseverance as my core strengths.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              <Download size={20} className="mr-2" />
              Download Resume
            </button>
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={500}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-medium rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors shadow-lg hover:shadow-xl cursor-pointer"
            >
              <Mail size={20} className="mr-2" />
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;