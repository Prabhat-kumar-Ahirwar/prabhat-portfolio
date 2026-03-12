import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion"; // eslint-disable-line no-unused-vars

import Navbar from "./components/Navbar";
import TopNav from "./components/TopNav";

import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

// Subtle animated background component with floating elements
const BackgroundElements = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-dark-bg">
    {/* Large Blobs */}
    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent-primary/20 blur-[120px] animate-blob"></div>
    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent-secondary/20 blur-[120px] animate-blob animation-delay-2000"></div>
    
    {/* Small Floating Elements (Dots/Orbs) */}
    <div className="absolute top-[20%] left-[15%] w-20 h-20 rounded-full bg-white/5 blur-[40px] animate-pulse"></div>
    <div className="absolute top-[60%] left-[80%] w-32 h-32 rounded-full bg-accent-primary/10 blur-[60px] animate-blob animation-delay-4000"></div>
    <div className="absolute bottom-[20%] left-[40%] w-24 h-24 rounded-full bg-white/5 blur-[50px] animate-pulse animation-delay-3000"></div>
    
    {/* Grid Overlay for texture */}
    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>
  </div>
);

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-dark-bg text-gray-200 flex justify-center items-center p-4 md:p-10 relative">
      <BackgroundElements />
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 lg:gap-10 relative z-10">

        {/* LEFT SIDEBAR */}
        <aside className="h-fit lg:sticky lg:top-10 z-20">
          <Navbar />
        </aside>

        {/* RIGHT CONTENT */}
<<<<<<< HEAD
        <div className="relative flex flex-col min-h-[80vh]">
          <main className="glass rounded-[2rem] p-6 sm:p-8 lg:p-10 flex-1 flex flex-col pb-24 md:pb-10 transition-all duration-300">
            <div className="hidden md:block">
              <TopNav />
            </div>

            {/* PAGE ANIMATION */}
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <Routes location={location}>
                  {/* Default */}
                  <Route path="/" element={<Navigate to="/about" replace />} />

                  {/* Pages */}
                  <Route path="/about" element={<About />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </motion.div>
            </AnimatePresence>

            {/* Footer */}
            <footer className="mt-auto pt-10 text-center text-gray-500 text-sm border-t border-white/5">
              <p className="flex items-center justify-center gap-1">
                © 2026 Prabhat
              </p>
            </footer>
          </main>
          
          {/* Mobile Navigation (Outside main glass to avoid backdrop-blur container constraint) */}
          <div className="md:hidden">
            <TopNav />
          </div>
        </div>
=======
        <main className="glass rounded-[2rem] p-6 sm:p-8 lg:p-10 relative min-h-[80vh] flex flex-col">
          <TopNav />

          {/* PAGE ANIMATION */}
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <Routes location={location}>
                {/* Default */}
                <Route path="/" element={<Navigate to="/about" replace />} />

                {/* Pages */}
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </motion.div>
          </AnimatePresence>

          {/* Footer */}
          <footer className="mt-auto pt-10 text-center text-gray-500 text-sm border-t border-white/5">
            <p className="flex items-center justify-center gap-1">
              © 2026 Prabhat
            </p>
          </footer>
        </main>
>>>>>>> 3e612d4750973ef8eec23790e5dd4b13a261889e

      </div>
    </div>
  );
}

export default App;
