import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars

const About = () => {
  const techStack = [
    "Java",
    "Spring Boot",
    "REST APIs",
    "JWT",
    "SQL",
    "MySQL",
    "Git",
    "Maven",
  ];

  const quickStats = [
    { value: "4+", label: "Projects Built" },
    { value: "5+", label: "Certifications" },
    { value: "100%", label: "Dedication" },
  ];

  const featuredProjects = [
    {
      title: "Portfolio Website",
      img: "/src/assets/portfolio-preview.png",
      url: "https://myportfolioprabhat.vercel.app/",
      description:
        "Personal portfolio showcasing experience, skills, and achievements.",
      tech: ["React", "Tailwind", "Framer Motion"]
    },
    {
      title: "Study Hub",
      img: "/src/assets/studyhub.png",
      url: "https://terminal.prabhat.dev",
      description:
        "A collaborative Study Hub platform designed for students to share, access, and organize study materials interactively.",
      tech: ["Java", "Spring Boot", "React", "MySQL"]
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-24"
    >
      {/* HERO / ABOUT SECTION */}
      <section id="about" className="scroll-mt-24 px-4 sm:px-6 md:px-8 mt-4">
        <motion.div variants={itemVariants} className="inline-block mb-4">
          <span className="bg-accent-primary/10 text-accent-primary border border-accent-primary/20 px-4 py-1.5 rounded-full text-sm font-mono shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            Hello, World! 👋
          </span>
        </motion.div>

        <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
          I'm <span className="text-gradient">Prabhat Kumar</span>,<br />
          Building Scalable Backends.
        </motion.h2>

        <motion.div variants={itemVariants} className="w-20 h-1.5 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full mb-8 shadow-[0_0_10px_rgba(236,72,153,0.5)]"></motion.div>

        <motion.div variants={itemVariants} className="text-gray-400 text-base sm:text-lg leading-relaxed space-y-6 max-w-3xl">
          <p>
            A passionate Java Backend Developer and B.Tech Computer Science student. I specialize in designing and building robust, high-performance APIs and scalable system architectures.
          </p>

          <p>
            My expertise lies in core backend technologies including{" "}
            <span className="text-gray-200 font-semibold border-b border-accent-secondary/50 pb-0.5">Java, Spring Boot, REST APIs, and SQL</span>, with a strong emphasis on clean code, secure authentication (JWT), and efficient database modeling.
          </p>

          <p>
            Driven by a constant desire to learn and solve complex engineering problems in collaborative, professional environments.
          </p>
        </motion.div>

        {/* TECH STACK CHIPS */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mt-10">
          {techStack.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-5 py-2 text-sm rounded-xl glass-card text-gray-200 font-medium cursor-pointer"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* QUICK STATS */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">
          {quickStats.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h4 className="text-4xl font-bold text-white mb-2 tracking-tight group-hover:text-accent-primary transition-colors">{item.value}</h4>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FEATURED PROJECTS PREVIEW */}
      <section
        id="featured-portfolios"
        className="px-4 sm:px-6 md:px-8 pb-10"
      >
        <motion.div variants={itemVariants} className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-gray-400 text-base max-w-2xl">
            A selection of my recent engineering projects.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -8 }}
              className="glass rounded-3xl overflow-hidden group border border-white/10 hover:border-accent-primary/30 transition-all duration-500"
            >
              <div className="w-full h-56 sm:h-64 bg-dark-bg overflow-hidden relative">
                <div className="absolute inset-0 bg-accent-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#6366F1_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <img
                  src={project.img}
                  alt={`${project.title} Interface`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-0"
                  style={{ objectPosition: "top" }}
                  onError={(e) => {
                    e.target.style.display = 'none'; // Hide broken images gracefully
                  }}
                />
              </div>
              <div className="p-8 relative">
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-dark-surface border border-white/10 px-4 py-1.5 rounded-full text-xs font-mono text-gray-400 shadow-xl group-hover:border-accent-primary/30 transition-colors">
                  {project.url}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-mono text-accent-secondary bg-accent-secondary/10 px-2 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default About;
