import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { motion } from "framer-motion";
import { 
  FaUser, 
  FaFileAlt, 
  FaCode, 
  FaTools, 
  FaEnvelope 
} from "react-icons/fa";

const navLinks = [
  { label: "About", path: "/about", icon: FaUser },
  { label: "Resume", path: "/resume", icon: FaFileAlt },
  { label: "Projects", path: "/projects", icon: FaCode },
  { label: "Skills", path: "/skills", icon: FaTools },
  { label: "Contact", path: "/contact", icon: FaEnvelope },
=======
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Resume", path: "/resume" },
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Contact", path: "/contact" },
>>>>>>> 3e612d4750973ef8eec23790e5dd4b13a261889e
];

const TopNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {/* Desktop / Tablet Nav */}
      <nav className="hidden md:flex justify-end mb-10 px-4 sm:px-0 lg:-mt-10 lg:-mr-10">
        <ul className="flex bg-dark-surface/80 backdrop-blur-md border border-white/5 rounded-bl-[2rem] rounded-tr-[2rem] px-8 py-4 shadow-lg shadow-black/20">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path;
<<<<<<< HEAD
            const Icon = item.icon;
=======
>>>>>>> 3e612d4750973ef8eec23790e5dd4b13a261889e
            return (
              <li
                key={item.path}
                onClick={() => navigate(item.path)}
<<<<<<< HEAD
                className={`relative px-4 py-2 text-sm sm:text-base font-medium cursor-pointer transition-colors duration-300 flex items-center gap-2
=======
                className={`relative px-4 py-2 text-sm sm:text-base font-medium cursor-pointer transition-colors duration-300
>>>>>>> 3e612d4750973ef8eec23790e5dd4b13a261889e
                  ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="desktop-active-nav"
                    className="absolute inset-0 bg-white/10 rounded-xl"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
<<<<<<< HEAD
                <Icon className="text-sm opacity-70" />
=======
>>>>>>> 3e612d4750973ef8eec23790e5dd4b13a261889e
                <span className="relative z-10">{item.label}</span>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Bottom Nav */}
<<<<<<< HEAD
      <nav className="fixed bottom-4 left-4 right-4 md:hidden z-[100]">
        <div className="glass rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <ul className="flex justify-around items-center p-2">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              return (
                <li
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`relative flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all duration-300 cursor-pointer
                    ${isActive ? "text-accent-primary" : "text-gray-400"}`}
                >
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    className="flex flex-col items-center gap-1"
                  >
                    <div className={`p-1.5 rounded-lg transition-colors ${isActive ? "bg-accent-primary/10" : ""}`}>
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-medium tracking-tight whitespace-nowrap">
                      {item.label}
                    </span>
                  </motion.div>
                  
                  {isActive && (
                    <motion.div
                      layoutId="mobile-active-glow"
                      className="absolute -bottom-1 w-1 h-1 bg-accent-primary rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
=======
      <nav className="fixed bottom-0 left-0 w-full md:hidden glass border-t-white/10 z-50 rounded-t-3xl">
        <ul className="flex justify-around items-center p-2 mb-safe">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`relative flex-1 text-center py-3 text-xs sm:text-sm font-medium cursor-pointer transition-colors
                  ${isActive ? "text-accent-primary" : "text-gray-400 hover:text-white"}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobile-active-nav"
                    className="absolute inset-x-0 bottom-0 h-1 bg-accent-primary rounded-t-full mx-auto w-1/2"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {item.label}
              </li>
            );
          })}
        </ul>
>>>>>>> 3e612d4750973ef8eec23790e5dd4b13a261889e
      </nav>
    </>
  );
};

export default TopNav;
