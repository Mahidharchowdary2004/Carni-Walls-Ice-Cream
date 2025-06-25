import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { Heart, Leaf, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | Carni Walls';
  }, []);

  return (
    <>
      <div className="bg-primary-400 py-20 pt-32">
        <div className="container-custom">
          <motion.h1 
            className="text-white font-display text-4xl md:text-5xl lg:text-6xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Carni Walls
          </motion.h1>
        </div>
      </div>
      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle 
                title="Our Mission" 
                subtitle="Bringing joy to every scoop with the finest handcrafted ice cream, made for everyone to enjoy." 
              />
              <div className="space-y-4 text-gray-700">
                <p>
                  Carni Walls is dedicated to creating unforgettable ice cream experiences. We blend premium ingredients, creative flavors, and a passion for quality to serve happiness in every scoop.
                </p>
                <p>
                  Our team is committed to innovation, community, and sustainability. We believe in supporting local producers and delighting our customers with both classic and adventurous flavors.
                </p>
                <p>
                  Whether you visit us in-store or order online, Carni Walls is here to make your day sweeter, one scoop at a time.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* You can add relevant images here */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-xl overflow-hidden shadow-md h-40 md:h-56">
                    <img 
                      src="/Logo.png" 
                      alt="Carni Walls Ice Cream" 
                      className="w-full h-full object-contain bg-white"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-md h-64 md:h-80">
                    <img 
                      src="https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg" 
                      alt="Carni Walls shop" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                   <div className="rounded-xl overflow-hidden shadow-md h-40 md:h-56">
                    <img 
                      src="/1.jpg"
                      alt="Scoops" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-md h-40 md:h-56">
                    <img 
                      src="/3.png" 
                      alt="Ice cream ingredients" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-12">
                  <div className="rounded-xl overflow-hidden shadow-md h-64 md:h-80">
                    <img 
                      src="https://images.pexels.com/photos/1739347/pexels-photo-1739347.jpeg" 
                      alt="Scooping ice cream" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-md h-40 md:h-56">
                    <img 
                      src="https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg" 
                      alt="Ice cream ingredients" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-md h-64 md:h-80">
                    <img 
                      src="/2.jpg" 
                      alt="Scooping ice cream" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary-400/20 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-300/20 rounded-full blur-xl" />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Core Values Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Core Values" 
            subtitle="What makes Carni Walls special? Our commitment to quality, creativity, and community."
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <motion.div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-sm mb-4">
                <Heart className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="font-display text-xl mb-3">Passion</h3>
              <p className="text-gray-600">We pour our heart into every batch, ensuring every scoop is made with care and love for our craft.</p>
            </motion.div>
            <motion.div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-sm mb-4">
                <Leaf className="w-8 h-8 text-secondary-400" />
              </div>
              <h3 className="font-display text-xl mb-3">Quality Ingredients</h3>
              <p className="text-gray-600">We use only the best ingredients, sourced locally whenever possible, to create the freshest flavors.</p>
            </motion.div>
            <motion.div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}>
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-sm mb-4">
                <Award className="w-8 h-8 text-accent-300" />
              </div>
              <h3 className="font-display text-xl mb-3">Creativity</h3>
              <p className="text-gray-600">We love to experiment with new flavors and ideas, bringing you both timeless classics and bold new tastes.</p>
            </motion.div>
            <motion.div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }}>
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-sm mb-4">
                <Users className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="font-display text-xl mb-3">Community</h3>
              <p className="text-gray-600">Carni Walls is proud to be part of our local community, supporting events and sharing joy with every scoop.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;