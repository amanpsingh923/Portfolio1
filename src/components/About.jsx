import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Utensils, Target } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const hobbies = [
    { name: 'Cricket', icon: Trophy, description: 'Passionate about cricket, playing and following the sport regularly' },
    { name: 'Cooking', icon: Utensils, description: 'Love experimenting with new recipes and cuisines' },
    { name: 'Chess', icon: Target, description: 'Strategic thinking through chess games and puzzles' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond academics and coding, I believe in maintaining a balanced lifestyle through various interests and hobbies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="text-center p-8 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-blue-600 rounded-full flex items-center justify-center">
                <hobby.icon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{hobby.name}</h3>
              <p className="text-gray-600">{hobby.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;