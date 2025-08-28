import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Image as ImageIcon } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const projects = [
    {
      title: 'Healthcare Management System',
      description: 'A desktop app for managing healthcare appointments efficiently using Java Swing and MySQL.',
      techStack: ['Java', 'Swing', 'SQL', 'JDBC'],
      github: 'https://github.com/amansingh923/Smart-healthcare-management',
      image: 'project1.png',
      featured: true
    },
    {
      title: 'Ayush Startup Registration Portal',
      description: 'A MERN stack web app for registering Ayush-based startups and practitioners with user authentication and admin dashboard.',
      techStack: ['HTML', 'CSS', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
      github: '#',
      liveDemo: '#',
      image: 'project2.png',
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing some of my best work that demonstrates my skills in full-stack development and software engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center">
                <ImageIcon size={64} className="text-blue-400" />
                <span className="ml-2 text-blue-600 font-medium">{project.image}</span>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-2" />
                    GitHub
                  </a>
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
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

export default Projects;