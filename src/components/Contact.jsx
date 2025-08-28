import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, Send, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! This is a demo form.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'Email',
      url: 'mailto:amanprakashsingh39@gmail.com',
      icon: Mail,
      color: 'text-red-600 hover:text-red-700',
      bgColor: 'bg-red-50 hover:bg-red-100',
      displayText: 'amanprakashsingh39@gmail.com'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aman-prakash-singh-0a4565257',
      icon: Linkedin,
      color: 'text-blue-600 hover:text-blue-700',
      bgColor: 'bg-blue-50 hover:bg-blue-100',
      displayText: 'Connect on LinkedIn'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/amanpsingh923',
      icon: Github,
      color: 'text-gray-800 hover:text-gray-900',
      bgColor: 'bg-gray-50 hover:bg-gray-100',
      displayText: 'View GitHub Profile'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Feel free to reach out to me through any of the following channels. I'll get back to you as soon as possible!
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target={link.name !== 'Email' ? '_blank' : '_self'}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : ''}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className={`flex items-center p-4 rounded-xl transition-colors ${link.bgColor} group`}
                >
                  <div className={`p-3 rounded-full ${link.color} transition-colors`}>
                    <link.icon size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">{link.name}</h4>
                    <p className="text-gray-600 text-sm">{link.displayText}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  <User size={16} className="inline mr-2" />
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail size={16} className="inline mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare size={16} className="inline mr-2" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;