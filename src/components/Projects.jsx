import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from 'react-icons/fa';
import FoodWasteImg from '../assets/FoodWaste.png';
import CEMOS from '../assets/CEMOS.png';
import StudyHubImg from '../assets/studyhub.png';
import portfolioPreview from '../assets/portfolio-preview.png';
import ChatView from '../assets/ChatView1.png';

const projectsData = [
  {
    title: "CEMOS Campus Electricity Monitoring",
    img: CEMOS,
    description: "Smart campus solution for monitoring, maintaining, and optimizing electricity usage with real-time tracking and analytics.",
    link: "https://github.com/Priyanshikhorwal/CEMOS",
    demo: null,
    tech: ["React", "Spring Boot", "MySQL", "IoT Analytics"]
  },
  {
    title: "Study Hub",
    img: StudyHubImg,
    description: "Collaborative platform for students to share and access notes and study materials interactively.",
    link: "https://github.com/Prabhat-kumar-Ahirwar",
    demo: "https://terminal.prabhat.dev",
    tech: ["Java", "Spring Boot", "React", "REST API"]
  },
  {
    title: "Portfolio Website",
    img: portfolioPreview,
    description: "Personal portfolio showcasing skills, projects, and achievements built with React and Tailwind.",
    link: "https://github.com/Prabhat-kumar-Ahirwar/MyPortfolio.git",
    demo: "https://prabhat.dev",
    tech: ["React", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Chating Group application",
    img: ChatView,
    description: "A chatting application built with Java Springboot and react, featuring real-time messaging and user-friendly interface.",
    link: "https://github.com/Prabhat-kumar-Ahirwar/chat-app",
    demo: null,
    tech: ["Java Spring Boot", "WebSockets", "React", "Tailwind"]
  },
  {
    title: "Food Waste Management",
    img: FoodWasteImg,
    description: "Platform to track, reduce, and manage food waste in institutions, with analytics and donation coordination.",
    link: "https://www.figma.com/design/jpc0nYvnh4jlKOJoXluXpc/Untitled?node-id=0-1&t=QOSE9E742qQuf0CS-1",
    demo: null,
    tech: ["Figma", "UI/UX Design", "Prototyping"]
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <motion.section 
      id="projects" 
      className="scroll-mt-24 px-4 sm:px-6 md:px-8 pb-10 mt-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="mb-12">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2.5 bg-accent-primary/10 rounded-xl text-accent-primary">
            <FaFolderOpen size={24} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>
        <p className="text-gray-400 text-base max-w-2xl ml-1">
          A showcase of my technical projects, complete with source code and live demos.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projectsData.map((project, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="group glass rounded-3xl overflow-hidden flex flex-col border border-white/5 hover:border-accent-primary/30 transition-all duration-500 shadow-xl"
          >
            {/* Image Container */}
            <div className="relative w-full h-56 sm:h-64 bg-dark-surface overflow-hidden">
              <div className="absolute inset-0 bg-accent-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              {/* Fallback pattern */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-0"
                style={{ objectPosition: "top" }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              
              {/* Hover overlay actions */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4 backdrop-blur-sm">
                {project.link && (
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                    title="View Source Code"
                  >
                    <FaGithub size={22} />
                  </motion.a>
                )}
                {project.demo && (
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-accent-primary text-white rounded-full shadow-lg shadow-accent-primary/30 hover:opacity-90 transition-opacity"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt size={20} />
                  </motion.a>
                )}
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 sm:p-8 flex flex-col flex-1 relative bg-gradient-to-b from-transparent to-dark-surface/50">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-accent-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 flex-1 leading-relaxed mb-6">
                {project.description}
              </p>
              
              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                {project.tech.map(t => (
                  <span key={t} className="text-xs font-mono font-medium text-accent-secondary bg-accent-secondary/10 px-2.5 py-1 rounded-md border border-accent-secondary/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
