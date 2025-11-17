import { motion } from 'framer-motion';
import { useState } from 'react';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = ['Home', 'Menu', 'About', 'Shop'];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-forest-green/95 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white text-2xl font-bold tracking-[0.2em] font-heading"
        >
          BURGUR
        </motion.div>

        {/* Navigation Links */}
        <div className="flex gap-10">
          {navLinks.map((link, index) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              onClick={() => setActiveLink(link)}
              className={`text-white font-display text-base font-medium relative transition-colors duration-300 hover:text-amber-200 ${
                activeLink === link ? 'text-amber-200' : ''
              }`}
            >
              {link}
              {activeLink === link && (
                <motion.div
                  layoutId="activeLink"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-200"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
