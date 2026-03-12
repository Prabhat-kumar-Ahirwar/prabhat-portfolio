import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { 
  FaJava, FaLeaf, FaDatabase, FaServer, FaShieldAlt, 
  FaTools, FaGithub, FaCogs, FaLightbulb, FaAward, FaVideo
} from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

const SectionTitle = ({ title, icon: Icon }) => (
  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
    {Icon && <Icon className="text-accent-primary" />}
    {title}
  </h3>
);

const GlassCard = ({ children, className = "" }) => (
  <motion.div variants={itemVariants} className={`glass p-6 sm:p-8 rounded-3xl relative overflow-hidden group ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative z-10">{children}</div>
  </motion.div>
);

const SkillBadge = ({ skill, icon: Icon }) => (
  <motion.div 
    whileHover={{ y: -3, scale: 1.02 }}
    className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card text-gray-200 font-medium cursor-default border border-white/5 hover:border-accent-primary/30 transition-all shadow-sm shadow-black/20"
  >
    {Icon && <Icon className="text-accent-primary text-sm" />}
    <span className="text-sm">{skill}</span>
  </motion.div>
);

const Skills = () => {

  return (
    <motion.section 
      id="skills" 
      className="scroll-mt-24 px-4 sm:px-6 md:px-8 space-y-12 pb-10 mt-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* HEADER */}
      <motion.div variants={itemVariants} className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
          Skills & <span className="text-gradient">Expertise</span>
        </h2>
        <p className="text-gray-400 text-base max-w-2xl">
          The technologies and tools I use to build robust backend systems.
        </p>
      </motion.div>

      {/* TECHNICAL SKILLS */}
      <GlassCard>
        <SectionTitle title="Core Technologies" icon={FaServer} />
        <div className="flex flex-wrap gap-3">
          <SkillBadge skill="Java" icon={FaJava} />
          <SkillBadge skill="Spring Boot" icon={FaLeaf} />
          <SkillBadge skill="Spring Security" icon={FaShieldAlt} />
          <SkillBadge skill="RESTful APIs" icon={FaServer} />
          <SkillBadge skill="JWT Auth" icon={FaShieldAlt} />
          <SkillBadge skill="Hibernate (JPA)" icon={FaDatabase} />
          <SkillBadge skill="MySQL" icon={FaDatabase} />
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* TOOLS & PLATFORMS */}
        <GlassCard>
          <SectionTitle title="Tools & Platforms" icon={FaTools} />
          <div className="flex flex-wrap gap-3">
            <SkillBadge skill="Git & GitHub" icon={FaGithub} />
            <SkillBadge skill="Postman" icon={FaTools} />
            <SkillBadge skill="IntelliJ IDEA" icon={FaCogs} />
            <SkillBadge skill="MySQL Workbench" icon={FaDatabase} />
          </div>
        </GlassCard>

        {/* SOFT SKILLS */}
        <GlassCard>
          <SectionTitle title="Soft Skills" icon={FaLightbulb} />
          <ul className="space-y-3">
            {[
              "Strong communication & interpersonal skills",
              "Adaptability & continuous learning mindset",
              "Team collaboration & ownership",
              "Analytical & problem-solving approach"
            ].map(skill => (
              <li key={skill} className="flex items-start gap-3 text-gray-400 text-sm">
                <span className="text-accent-primary mt-1">▹</span>
                <span className="leading-tight">{skill}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>

      {/* CERTIFICATIONS */}
      <GlassCard>
        <SectionTitle title="Certifications & Achievements" icon={FaAward} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { text: "Database Management Certification", link: "https://drive.google.com/drive/folders/1hupHkMuzoRumq94NRziCwmrEuBhsnb3W?usp=drive_link" },
            { text: "NPTEL Certification (IIT)", link: "https://drive.google.com/drive/folders/1hupHkMuzoRumq94NRziCwmrEuBhsnb3W?usp=drive_link" },
            { text: "Participation in Hackathons", link: null },
            { text: "Volunteering Experience", link: null },
          ].map((item, i) => (
            item.link ? (
              <a 
                key={i} 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-dark-bg/50 border border-white/5 hover:border-accent-primary/30 group transition-all"
              >
                <div className="p-2 bg-accent-primary/10 rounded-lg text-accent-primary group-hover:scale-110 transition-transform">
                  <FaAward />
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{item.text}</span>
              </a>
            ) : (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-dark-bg/50 border border-white/5">
                <div className="p-2 bg-white/5 rounded-lg text-gray-400">
                  <FaAward />
                </div>
                <span className="text-sm font-medium text-gray-400">{item.text}</span>
              </div>
            )
          ))}
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* AREAS OF INTEREST */}
        <GlassCard>
          <SectionTitle title="Focus Areas" icon={FaLightbulb} />
          <div className="flex flex-wrap gap-3">
            <SkillBadge skill="Backend Development" />
            <SkillBadge skill="Database Management" />
            <SkillBadge skill="REST API Design & Security" />
          </div>
        </GlassCard>

        {/* HOBBIES & INTERESTS */}
        <GlassCard>
          <SectionTitle title="Hobbies & Interests" icon={FaVideo} />
          <p className="text-xs text-gray-500 mb-4 -mt-2">External links open in a new tab</p>
          <div className="flex flex-wrap gap-3">
            <a 
              href="https://drive.google.com/drive/folders/1z8-TRNG1RAOZ9yj87A6N3jb4Cucu9rsL?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SkillBadge skill="Video Editing (View Portfolio)" icon={FaVideo} className="border-accent-primary/50 text-accent-primary hover:bg-accent-primary/10" />
            </a>
            <SkillBadge skill="Visual Storytelling" />
          </div>
        </GlassCard>
      </div>

    </motion.section>
  );
};

export default Skills;
