import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { ArrowRight, Heart, Leaf, Star } from 'lucide-react';

const AboutPreview: React.FC = () => {
  const steps = [
    {
      icon: <Leaf size={24} className="text-secondary-400" />,
      title: "Locally Sourced",
      description: "We partner with local farmers to source the freshest, highest-quality ingredients for our ice cream."
    },
    {
      icon: <Star size={24} className="text-accent-300" />,
      title: "Crafted with Care",
      description: "Each small batch is made with attention to detail, ensuring perfect texture and flavor in every scoop."
    },
    {
      icon: <Heart size={24} className="text-primary-400" />,
      title: "Made with Love",
      description: "Our passion for exceptional ice cream drives everything we do—you can taste the difference!"
    }
  ];

  return (
    <section className="section bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Column */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1415555/pexels-photo-1415555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Ice cream preparation" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-5 -left-5 w-24 h-24 bg-primary-400/30 rounded-full blur-xl" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent-300/30 rounded-full blur-xl" />
          </motion.div>
          
          {/* Content Column */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle 
              title="Our Sweet Story" 
              subtitle="Founded in 2018, Carni Walls was born from a simple belief: ice cream should be an extraordinary experience, not just a dessert."
            />
            
            <div className="space-y-6 mb-8">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="mt-1 h-10 w-10 flex items-center justify-center rounded-full bg-gray-100">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-1">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Link to="/about" className="inline-flex items-center text-primary-500 font-display font-semibold hover:text-primary-600 transition-colors">
              Read our full story <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;