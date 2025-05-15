import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Simple Grid Icon SVG component
const GridIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
    </svg>
);

const FloatingNavButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  // --- Configuration --- 
  const logoSize = 50; // <<< Adjust logo size here (in pixels)
  const buttonSize = 60; // Size of the main button
  const menuBottomOffset = buttonSize + 15; // Position menu above the button
  const menuGap = '0.5rem'; // Space between logos
  // ---------------------

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        buttonRef.current && 
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24, staggerChildren: 0.05 }
    },
    closed: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 400, damping: 15 }
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 }
    }
  };

  const navItems = [
    { path: '/', icon: '/icons/group_icon.webp' },
    { path: '/leather', icon: '/icons/biosolutions_icon.webp' },
    { path: '/construction', icon: '/icons/construction_icon.webp' },
  ];

  // --- Style Objects --- 
  const buttonStyle = {
    background: 'linear-gradient(145deg, #5899e0, #3a7bc0)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: `${buttonSize}px`,
    height: `${buttonSize}px`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.25)',
    fontSize: '24px'
  };

  const menuStyle = {
    position: 'absolute',
    bottom: `${menuBottomOffset}px`,
    right: 0,
    listStyle: 'none',
    padding: '0.8rem',
    margin: 0,
    background: 'rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    borderRadius: '15px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    gap: menuGap,
  };

  const listItemStyle = {
    width: `${logoSize}px`,
    height: `${logoSize}px`,
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden', // Hide potential overflow if needed
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    width: '100%',
    height: '100%',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  };
  // ----------------------

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000 }}>
      <motion.button
        ref={buttonRef}
        onClick={toggleOpen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={buttonStyle}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <GridIcon />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            ref={menuRef}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            style={menuStyle}
          >
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                style={listItemStyle}
              >
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  style={linkStyle}
                >
                  <img src={item.icon} style={imageStyle} />
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingNavButton; 