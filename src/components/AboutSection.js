import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import '../styles/components/AboutSection.css';


const AboutSection = () => {
  return (
    <div className="about" id="about">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Here is some information about me...
      </motion.p>
      <Link href="/about">
        <a className="btn">Read More</a>
      </Link>
    </div>
  );
};

export default AboutSection;
