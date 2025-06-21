import React from 'react';
import { motion } from 'framer-motion';

interface FlavorCardProps {
  name: string;
  description: string;
  imageUrl: string;
  tags: string[];
  featured?: boolean;
}

const FlavorCard: React.FC<FlavorCardProps> = ({ 
  name, 
  description, 
  imageUrl, 
  tags, 
  featured = false 
}) => {
  return (
    <motion.div 
      className={`card group ${featured ? 'border-2 border-primary-400' : ''}`}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative overflow-hidden h-60">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        {featured && (
          <div className="absolute top-3 right-3 bg-primary-400 text-white px-3 py-1 rounded-full font-display text-sm">
            Featured
          </div>
        )}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
      </div>
      
      <div className="p-5">
        <h3 className="font-display text-xl mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className={`text-xs px-2 py-1 rounded-full ${
                tag === 'Vegan' ? 'bg-secondary-300 text-gray-800' : 
                tag === 'Gluten-Free' ? 'bg-accent-300 text-gray-800' : 
                'bg-gray-200 text-gray-800'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FlavorCard;