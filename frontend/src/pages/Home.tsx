import React, { useEffect } from 'react';
import SEO from '../components/utils/SEO';
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
      <SEO
        title="Premium Handcrafted Ice Cream"
        description="Welcome to Carni Walls - the home of premium handcrafted ice cream in Kovur, Andhra Pradesh. Discover unique flavors made with natural ingredients."
        url="/"
      />
      <Hero />
      <FeaturedFlavors />
      <AboutPreview />
      <ContactPreview />
    </div>
  );
};

export default Home;