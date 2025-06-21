import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import FeaturedFlavors from '../components/home/FeaturedFlavors';
import AboutPreview from '../components/home/AboutPreview';
import ContactPreview from '../components/home/ContactPreview';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Carni Walls';
  }, []);

  return (
    <div className="pt-10">
      <Hero />
      <FeaturedFlavors />
      <AboutPreview />
      <ContactPreview />
    </div>
  );
};

export default Home;