import React from 'react';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import Link from 'next/link';
import '../styles/components/HeroSection.css';
import ThreeDModel from './ThreeDModel';

const HeroSection = () => {
  return (
    <Parallax bgImage="/images/custom-artwork/background.png" strength={500}>
      <div className="hero" id="hero">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Discover my work and projects
        </motion.p>
        <ThreeDModel />
        <Link href="/projects">
          <a className="btn">View Projects</a>
        </Link>
      </div>
    </Parallax>
  );
};

export default HeroSection;
