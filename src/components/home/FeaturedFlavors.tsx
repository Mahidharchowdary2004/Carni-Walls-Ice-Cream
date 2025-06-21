import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import FlavorCard from '../ui/FlavorCard';

const featuredFlavors = [
  {
    id: 1,
    name: 'Dreamberry Delight',
    description: 'Swirls of strawberry, blueberry, and raspberry in our signature cream base.',
    imageUrl: 'https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg',
    tags: ['Signature', 'Seasonal'],
    featured: true
  },
  {
    id: 2,
    name: 'Mint Chocolate Dream',
    description: 'Cool mint infused with chunks of dark chocolate for a refreshing treat.',
    imageUrl: 'https://images.pexels.com/photos/1739347/pexels-photo-1739347.jpeg',
    tags: ['Bestseller', 'Gluten-Free'],
    featured: true
  },
  {
    id: 3,
    name: 'Vanilla Cloud',
    description: 'Our special vanilla bean ice cream whipped to cloud-like perfection.',
    imageUrl: 'https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg',
    tags: ['Classic', 'Vegan'],
    featured: false
  },
  {
    id: 4,
    name: 'Salted Caramel Bliss',
    description: 'Rich caramel with just the right touch of sea salt in every bite.',
    imageUrl: 'https://images.pexels.com/photos/2846337/pexels-photo-2846337.jpeg',
    tags: ['Customer Favorite', 'Gluten-Free'],
    featured: false
  }
];

const FeaturedFlavors: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <SectionTitle 
          title="Featured Flavors" 
          subtitle="Indulge in our most beloved and seasonal creations, crafted with care and premium ingredients."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredFlavors.map((flavor) => (
            <FlavorCard 
              key={flavor.id}
              name={flavor.name}
              description={flavor.description}
              imageUrl={flavor.imageUrl}
              tags={flavor.tags}
              featured={flavor.featured}
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/flavors" className="btn btn-secondary">
            View All Flavors
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedFlavors;