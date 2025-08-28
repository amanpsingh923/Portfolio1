import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Monitor, Server, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Monitor,
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: ['Node.js', 'Express.js'],
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MySQL', 'MongoDB'],
      color: 'from-yellow-500 to-amber-600',
    },
    {
      title: 'Programming',
      icon: Code,
      skills: ['Java', 'C++', 'Python'],
      color: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'VS Code'],
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 hover:scale-105 transition-transform duration-300"
              >
                <div
                  className={`w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r ${category.color} text-white`}
                >
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition-colors duration-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
