import React, { useState } from "react";
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaWhatsapp, 
  FaChevronDown, 
  FaChevronUp 
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; // eslint-disable-line no-unused-vars
import profileImg from '../assets/profile.JPG';

const ContactItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-4 text-left w-full group">
    <div className="p-3 glass-card rounded-xl text-accent-primary group-hover:text-accent-secondary group-hover:scale-110 transition-all duration-300 flex-shrink-0">
      {Icon && <Icon size={16} />}
    </div>
    <div className="truncate min-w-0 flex-1">
      <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-0.5">{label}</p>
      <p className="text-sm text-gray-200 truncate hover:text-white transition-colors">{value}</p>
    </div>
  </div>
);

const SocialLink = ({ icon: Icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-3 glass-card rounded-xl text-gray-400 hover:text-accent-primary hover:scale-110 transition-all duration-300"
  >
    {Icon && <Icon size={20} />}
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex glass rounded-[2rem] p-8 flex-col items-center text-center w-full max-w-[300px]">
        <div
          className="w-36 h-36 rounded-3xl overflow-hidden mb-6 bg-dark-surface border-2 border-white/10 p-1 group cursor-pointer"
          onClick={() => window.open(profileImg, "_blank")}
        >
          <img 
            src={profileImg} 
            alt="Prabhat" 
            className="w-full h-full object-cover rounded-2xl transition-all duration-500" 
          />
        </div>

        <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">Prabhat K. Ahirwar</h1>
        <div className="bg-white/5 border border-white/10 px-5 py-1.5 rounded-full text-sm font-medium text-gray-300 mb-8 shadow-inner shadow-white/5">
          Java Backend Developer
        </div>

        <hr className="w-full border-white/5 mb-8" />

        <div className="w-full space-y-6 mb-10 overflow-hidden">
          <ContactItem icon={FaEnvelope} label="Email" value="prabhatmmg007@gmail.com" />
          <ContactItem icon={FaMapMarkerAlt} label="Location" value="Indore, India" />
        </div>

        <div className="flex gap-4 mt-auto justify-center w-full">
          <SocialLink icon={FaLinkedin} href="https://www.linkedin.com/in/prabhat-ahirwar-24604033a" />
          <SocialLink icon={FaGithub} href="https://github.com/Prabhat-kumar-Ahirwar" />
          <SocialLink icon={FaWhatsapp} href="https://api.whatsapp.com/send?phone=917987593265&text=Hello%20Prabhat" />
        </div>
      </aside>

      {/* Mobile / Tablet Collapsible Card */}
      <div className="lg:hidden w-full flex justify-center z-50 mb-6">
        <div className="w-full glass rounded-[2rem] overflow-hidden">
          {/* Compact Card */}
          <div
            className="p-4 sm:p-6 flex items-center justify-between cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden bg-dark-surface p-0.5 border border-white/10">
                <img src={profileImg} alt="Prabhat" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div>
                <h1 className="text-white font-bold text-lg sm:text-xl">Prabhat K. Ahirwar</h1>
                <p className="text-gray-400 text-sm font-medium">Java Backend Developer</p>
              </div>
            </div>
            <div className="p-3 glass-card rounded-xl text-gray-300">
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <FaChevronDown size={16} />
              </motion.div>
            </div>
          </div>

          {/* Expanded Info */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="p-4 sm:p-6 pt-0 border-t border-white/5 space-y-6 mt-4">
                  <ContactItem icon={FaEnvelope} label="Email" value="prabhatmmg007@gmail.com" />
                  <ContactItem icon={FaMapMarkerAlt} label="Location" value="Indore, India" />

                  <div className="flex gap-4 justify-center pt-2">
                    <SocialLink icon={FaLinkedin} href="https://www.linkedin.com/in/prabhat-ahirwar-24604033a" />
                    <SocialLink icon={FaGithub} href="https://github.com/Prabhat-kumar-Ahirwar" />
                    <SocialLink icon={FaWhatsapp} href="https://api.whatsapp.com/send?phone=917987593265&text=Hello%20Prabhat" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Navbar;
