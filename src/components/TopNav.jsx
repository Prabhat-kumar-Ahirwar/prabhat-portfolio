import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Resume", path: "/resume" },
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Contact", path: "/contact" },
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
            return (
              <li
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`relative px-4 py-2 text-sm sm:text-base font-medium cursor-pointer transition-colors duration-300
                  ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="desktop-active-nav"
                    className="absolute inset-0 bg-white/10 rounded-xl"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Bottom Nav */}
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
      </nav>
    </>
  );
};

export default TopNav;
