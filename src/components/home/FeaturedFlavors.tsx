import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import FlavorCard from '../ui/FlavorCard';

const featuredFlavors = [
  {
    id: 2,
    name: "Chocolate Delight",
    description: "Decadent chocolate ice cream loaded with rich chocolate chips and a deep cocoa flavor.",
    imageUrl: "/Chacolate Delight.png",
    tags: ["Ice Cream", "Chocolate", "Rich", "Dessert"],
    featured: false,
    category: "Ice Cream",
    price: "₹300",
    rating: 4.9,
    prepTime: "5 min",
  },
  {
    id: 3,
    name: "Pistachio Bliss",
    description: "Nutty and creamy pistachio ice cream with crunchy pistachio bits for extra delight.",
    imageUrl: "/Pista.png",
    tags: ["Ice Cream", "Pistachio", "Nutty", "Premium"],
    featured: true,
    category: "Ice Cream",
    price: "₹200",
    rating: 4.7,
    prepTime: "5 min",
  },
  {
    id: 4,
    name: "Strawberry Swirl",
    description: "Fresh strawberry ice cream swirled with juicy strawberry chunks and a fruity aroma.",
    imageUrl: "/Starayberry.png",
    tags: ["Ice Cream", "Strawberry", "Fruity", "Dessert"],
    featured: true,
    category: "Ice Cream",
    price: "₹200",
    rating: 4.6,
    prepTime: "5 min",
  },
  {
    id: 5,
    name: "Muskmelon Magic",
    description: "Refreshing muskmelon-flavored ice cream that brings a cool tropical twist to your day.",
    imageUrl: "/Muskmelon.png",
    tags: ["Ice Cream", "Melon", "Fruity", "Summer Treat"],
    featured: true,
    category: "Ice Cream",
    price: "₹300",
    rating: 4.5,
    prepTime: "5 min",
  },
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