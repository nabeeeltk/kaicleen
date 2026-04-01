import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import './Products.css';

import productGreen from '../assets/product-green.jpg';
import productBlue from '../assets/product-blue.jpg';

const Products = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section className="section products" id="products">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Our <span className="text-gradient-blue">Selection</span></h2>
          <p className="section-subtitle">Choose the perfect formulation for your specific degreasing needs.</p>
        </div>

        <div className="products-filter">
          <button 
            className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Products
          </button>
          <button 
            className={`filter-btn ${activeTab === 'eco' ? 'active' : ''}`}
            onClick={() => setActiveTab('eco')}
          >
            Eco-Green
          </button>
          <button 
            className={`filter-btn ${activeTab === 'power' ? 'active' : ''}`}
            onClick={() => setActiveTab('power')}
          >
            Power-Blue
          </button>
        </div>

        <div className="products-grid">
          <AnimatePresence>
            {(activeTab === 'all' || activeTab === 'eco') && (
              <motion.div 
                className="product-card"
                key="eco"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <div className="product-image-container green-bg">
                  <img src={productGreen} alt="Kaicleen Green" className="product-image" />
                  <div className="product-badge">Naturel</div>
                </div>
                <div className="product-info">
                  <h3>Kaicleen Eco-Green</h3>
                  <p className="product-type text-gradient-green">Everyday Skin Safe Degreaser</p>
                  <div className="product-price-row">
                    <span className="price">₹199</span>
                    <button className="add-to-cart-btn btn-green">
                      <ShoppingCart size={18} /> Add
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {(activeTab === 'all' || activeTab === 'power') && (
              <motion.div 
                className="product-card"
                key="power"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <div className="product-image-container blue-bg">
                  <img src={productBlue} alt="Kaicleen Blue" className="product-image" />
                  <div className="product-badge blue-badge">New Release</div>
                </div>
                <div className="product-info">
                  <h3>Kaicleen Power-Blue</h3>
                  <p className="product-type text-gradient-blue">Heavy Duty Industrial Paste</p>
                  <div className="product-price-row">
                    <span className="price">₹249</span>
                    <button className="add-to-cart-btn btn-blue">
                      <ShoppingCart size={18} /> Add
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Products;
