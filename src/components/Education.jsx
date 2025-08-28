import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const educationData = [
    {
      institution: 'Dr. D. Y. Patil Institute of Technology',
      degree: 'B.E. in Computer Engineering',
      grade: 'CGPA: 9.21/10',
      year: 'Expected Graduation: 2026',
      type: 'Bachelor\'s Degree',
      current: true
    },
    {
      institution: 'Kendriya Vidyalaya Koliwada, Mumbai',
      degree: '12th (CBSE)',
      grade: '91.60%',
      year: '2021',
      type: 'Higher Secondary',
      current: false
    },
    {
      institution: 'Kendriya Vidyalaya Koliwada, Mumbai',
      degree: '10th (CBSE)',
      grade: '95.20%',
      year: '2019',
      type: 'Secondary',
      current: false
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey showcasing consistent excellence and dedication to learning.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full hidden md:block"></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block z-10"></div>

              {/* Content card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-full ${edu.current ? 'bg-green-100' : 'bg-blue-100'}`}>
                      {edu.current ? <GraduationCap size={24} className="text-green-600" /> : <Award size={24} className="text-blue-600" />}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {edu.year}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.institution}</h3>
                  <h4 className="text-lg text-blue-600 font-medium mb-2">{edu.degree}</h4>
                  <p className="text-gray-600 mb-2">{edu.type}</p>
                  <p className={`font-semibold ${edu.current ? 'text-green-600' : 'text-blue-600'}`}>{edu.grade}</p>
                  
                  {edu.current && (
                    <span className="inline-block mt-4 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                      Currently Pursuing
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;