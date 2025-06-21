import React from 'react';
import { motion } from 'framer-motion';

const Newsletter: React.FC = () => {
  return (
    <section className="relative bg-accent-300 py-16">
      <div className="container-custom relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Stay Updated on Sweet News!
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to be the first to know about new flavors, 
            special offers, events, and ice cream insights.
          </p>
          
          <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-400"
              required
            />
            <button 
              type="submit"
              className="btn btn-primary whitespace-nowrap"
            >
              Sign Up
            </button>
          </form>
          
          <p className="text-sm text-gray-600 mt-4">
            We respect your privacy and will never share your information.
          </p>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-primary-400/30 blur-xl" />
      <div className="absolute bottom-1/4 right-10 w-24 h-24 rounded-full bg-secondary-400/40 blur-xl" />
    </section>
  );
};

export default Newsletter;