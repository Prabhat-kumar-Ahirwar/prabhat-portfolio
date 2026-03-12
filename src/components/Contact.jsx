import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from './emailjsConfig';

const Contact = () => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    setSent(false);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setSent(true);
      formRef.current.reset();
      setTimeout(() => setSent(false), 5000); // Clear success message after 5 seconds
    } catch {
      setError('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <motion.section 
      id="contact" 
      className="scroll-mt-24 px-4 sm:px-6 md:px-8 pb-16 mt-6 pt-10 border-t border-white/5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="mb-12 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-gray-400 text-base max-w-2xl mx-auto md:mx-0">
          Have a project in mind or just want to chat? Send me a message!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 items-center">
        
        {/* Left Info Card */}
        <motion.div variants={itemVariants} className="glass rounded-[2rem] p-8 sm:p-10 h-full flex flex-col justify-center relative overflow-hidden group border border-white/5 hover:border-accent-primary/20 transition-all duration-500">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-primary to-accent-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          
          <div className="p-4 bg-accent-primary/10 w-fit rounded-2xl text-accent-primary mb-6 group-hover:scale-110 transition-transform duration-300">
            <FaPaperPlane size={32} />
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-6 leading-tight">Ready to build<br/>something <span className="text-accent-primary">great?</span></h3>
          
          <p className="text-gray-400 mb-10 leading-relaxed max-w-sm">
            I'm currently open to new backend development opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <a
            href="mailto:prabhatmmg007@gmail.com"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent-primary text-white font-bold rounded-2xl hover:opacity-90 transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] active:scale-95 w-fit"
          >
            Say Hello 👋
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={itemVariants} className="glass rounded-[2rem] p-6 sm:p-10 border border-white/5 relative">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 relative z-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-accent-primary transition-colors">
                  <FaUser />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full bg-dark-bg/50 text-white pl-11 pr-4 py-4 rounded-2xl border border-white/10 focus:border-accent-primary outline-none transition-all placeholder-gray-500 focus:bg-dark-surface hover:border-white/20"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-accent-secondary transition-colors">
                  <FaEnvelope />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  className="w-full bg-dark-bg/50 text-white pl-11 pr-4 py-4 rounded-2xl border border-white/10 focus:border-accent-secondary outline-none transition-all placeholder-gray-500 focus:bg-dark-surface hover:border-white/20"
                  required
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="relative group">
              <div className="absolute top-5 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-white transition-colors">
               <FaCommentAlt />
              </div>
              <textarea
                name="message"
                rows={5}
                placeholder="What's on your mind?"
                className="w-full bg-dark-bg/50 text-white pl-11 pr-4 py-4 rounded-2xl border border-white/10 focus:border-white/30 outline-none transition-all placeholder-gray-500 focus:bg-dark-surface hover:border-white/20 resize-none font-sans"
                required
              ></textarea>
            </div>

            {/* Submit Button & Status */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 bg-white text-dark-bg font-bold rounded-2xl hover:bg-gray-200 transition-all shadow-lg active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                disabled={sending}
              >
                {sending ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-dark-bg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>

              {sent && (
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 text-green-400 font-medium px-4 py-2 bg-green-400/10 rounded-xl border border-green-400/20 w-full sm:w-auto justify-center">
                  <FaCheckCircle /> Message sent!
                </motion.div>
              )}
              {error && (
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 text-red-400 font-medium px-4 py-2 bg-red-400/10 rounded-xl border border-red-400/20 w-full sm:w-auto justify-center text-sm">
                  <FaExclamationCircle /> {error}
                </motion.div>
              )}
            </div>
          </form>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Contact;
