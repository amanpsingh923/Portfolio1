import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Star } from 'lucide-react';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const achievements = [
    {
      title: 'Smart India Hackathon 2024',
      description: 'Participated in Smart India Hackathon 2024 at school level, demonstrating problem-solving skills and innovative thinking in technology solutions.',
      icon: Trophy,
      year: '2024',
      category: 'Competition'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Achievements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition and milestones that highlight my commitment to excellence and continuous learning.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <achievement.icon size={28} className="text-white" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {achievement.title}
                    </h3>
                    <div className="flex items-center space-x-4 mt-2 md:mt-0">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {achievement.category}
                      </span>
                      <span className="text-gray-500 font-medium">{achievement.year}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional achievements placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-600 rounded-full">
            <Star size={20} className="mr-2" />
            More achievements coming soon...
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;