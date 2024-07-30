"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

// Define the props interface
interface PageTransitionProps {
  children: React.ReactNode; // Accepts any valid React children
}

// Define the PageTransition component
const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    const pathName = usePathname();
    return (
    <AnimatePresence>
        <div key={pathName}>
            <motion.div 
                initial={{ opacity: 0}} // Initial state
                animate={{
                    opacity: 1,
                    transition: {delay: 1, duration: 0.4, ease: 'easeInOut'}
                }} 
                className='h-screen w-screen  bg-primary top-0 '  
            >
                {children}
            </motion.div>
        </div>
    </AnimatePresence>
  );
};

export default PageTransition;