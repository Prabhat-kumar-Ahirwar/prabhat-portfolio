import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
            const Icon = item.icon;
            return (
              <li
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`relative px-4 py-2 text-sm sm:text-base font-medium cursor-pointer transition-colors duration-300 flex items-center gap-2
                  ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="desktop-active-nav"
                    className="absolute inset-0 bg-white/10 rounded-xl"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <Icon className="text-sm opacity-70" />
                <span className="relative z-10">{item.label}</span>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Bottom Nav */}
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
      </nav>
    </>
  );
};

export default TopNav;
