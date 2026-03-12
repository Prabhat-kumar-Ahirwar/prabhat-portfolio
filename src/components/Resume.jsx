import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { FaGraduationCap, FaDownload, FaBriefcase } from "react-icons/fa";

const Resume = () => {
  const education = [
    {
      title: "Bachelor of Technology",
      school: "Acropolis Institute of Technology & Research, Indore",
      period: "2023 – Present",
      details: "Computer Science and Engineering (7.61 CGPA)",
      icon: FaGraduationCap
    },
    {
      title: "Higher Secondary Certificate (Class XII)",
      school: "Little Star Shailesh Memorial School, Sagar",
      period: "2022 – 2023",
      details: "CBSE BOARD (81%)",
      icon: FaGraduationCap
    },
    {
      title: "Secondary School Certificate (Class X)",
      school: "Little Star Shailesh Memorial School, Sagar",
      period: "2020 – 2021",
      details: "CBSE BOARD (84%)",
      icon: FaGraduationCap
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <motion.section 
      className="mb-24 px-4 sm:px-6 md:px-8 mt-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-3">
            <div className="p-2.5 bg-accent-primary/10 rounded-xl text-accent-primary">
              <FaBriefcase size={22} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Career <span className="text-gradient">Journey</span>
            </h2>
          </motion.div>
          <motion.p variants={itemVariants} className="text-gray-400 text-base max-w-2xl ml-1">
            My educational background and professional timeline.
          </motion.p>
        </div>

        {/* Resume Button */}
        <motion.div variants={itemVariants}>
          <a
            href="https://github.com/Prabhat-kumar-Ahirwar/MyResume/blob/main/myresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-6 py-3.5 text-sm font-bold text-white glass-card rounded-2xl hover:border-accent-primary/50 transition-all shadow-[0_0_20px_rgba(99,102,241,0.1)] hover:shadow-[0_0_25px_rgba(99,102,241,0.25)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-accent-primary/10 group-hover:bg-accent-primary/20 transition-colors"></div>
            <span className="relative z-10 text-accent-primary group-hover:text-white transition-colors"><FaDownload size={16} /></span>
            <span className="relative z-10 tracking-wide uppercase">Download Resume</span>
          </a>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 lg:gap-20">
        {/* Education Timeline */}
        <div className="relative">
          {/* Connecting glowing line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-accent-primary via-accent-secondary to-transparent opacity-30 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="relative pl-16 group"
              >
                {/* Timeline Node */}
                <div className="absolute left-3 top-1 w-6 h-6 rounded-full bg-dark-bg border-[3px] border-accent-primary group-hover:border-accent-secondary group-hover:scale-125 transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Content Card */}
                <div className="glass p-6 rounded-3xl border border-white/5 group-hover:border-accent-primary/20 transition-colors shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h4 className="text-white font-bold text-lg sm:text-xl tracking-tight group-hover:text-accent-primary transition-colors">
                      {edu.title}
                    </h4>
                    <span className="inline-block px-3 py-1 text-xs font-mono font-semibold text-accent-secondary bg-accent-secondary/10 rounded-full border border-accent-secondary/20">
                      {edu.period}
                    </span>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <p className="text-base font-medium text-gray-300 flex items-center gap-2">
                      <edu.icon className="text-gray-500" />
                      {edu.school}
                    </p>
                    <div className="w-full h-px bg-white/5 my-2"></div>
                    <p className="text-sm font-medium text-gray-400 leading-relaxed bg-dark-bg/50 p-3 rounded-xl border border-white/5">
                      {edu.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default Resume;
