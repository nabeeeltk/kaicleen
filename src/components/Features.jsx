import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Zap, Clock } from 'lucide-react';
import './Features.css';

const featuresData = [
  {
    icon: <ShieldCheck size={32} className="text-gradient-blue" />,
    title: '100% Skin Safe',
    description: 'Developed with safety in mind. No harsh solvents that strip your skin, just clean results.',
    colorStyle: 'blue'
  },
  {
    icon: <Zap size={32} className="text-gradient-green" />,
    title: 'Industrial Strength',
    description: 'Cuts through grease, oil, and grime instantly. Meets high performance standards.',
    colorStyle: 'green'
  },
  {
    icon: <Leaf size={32} className="text-gradient-green" />,
    title: 'Eco-Friendly',
    description: 'Biodegradable formula that is as kind to the environment as it is to your hands.',
    colorStyle: 'green'
  },
  {
    icon: <Clock size={32} className="text-gradient-blue" />,
    title: 'Fast Acting',
    description: 'Penetrates dirt and grease in seconds, reducing scrubbing time and effort.',
    colorStyle: 'blue'
  }
];

const Features = () => {
  return (
    <section className="section features" id="features">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Why Choose <span className="text-gradient-green">Kaicleen</span>?</h2>
          <p className="section-subtitle">The perfect balance between uncompromising power and gentle care.</p>
        </div>
        
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <motion.div 
              key={index}
              className={`feature-card card-${feature.colorStyle}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
