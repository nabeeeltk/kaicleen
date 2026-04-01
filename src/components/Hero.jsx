import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

import productGreen from '../assets/product-green.jpg';
import productBlue from '../assets/product-blue.jpg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-glow green-glow"></div>
      <div className="hero-glow blue-glow"></div>
      
      <div className="container hero-container">
        
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="hero-badge">NEW FORMULA</motion.div>
          <motion.h1 variants={itemVariants} className="hero-title">
            The Ultimate <br/>
            <span className="text-gradient-green">Skin Safe</span> <span className="text-gradient-blue">Degreaser</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="hero-description">
            Power through the toughest grime without risking your skin. 
            Kaicleen brings industrial strength with an eco-conscious touch.
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-actions">
            <button className="btn-primary flex-center">
              Shop Now <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-images"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 70 }}
        >
          <div className="image-wrapper green-wrapper">
            <img src={productGreen} alt="Kaicleen Green Product" className="hero-img" />
          </div>
          <div className="image-wrapper blue-wrapper">
            <img src={productBlue} alt="Kaicleen Blue Product" className="hero-img" />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
