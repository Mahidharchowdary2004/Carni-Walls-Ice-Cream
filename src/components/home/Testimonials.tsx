import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Los Angeles, CA",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stars: 5,
    text: "The Dreamberry Delight is absolutely incredible! I've never tasted ice cream this fresh and flavorful. It's become my weekend treat that I look forward to all week."
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "San Francisco, CA",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stars: 5,
    text: "As someone who's lactose intolerant, finding the Vegan Vanilla Cloud was a game-changer. It's creamy, delicious, and I can enjoy it without any issues. Sundae Dreams has become my go-to!"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "New York, NY",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    stars: 5,
    text: "I ordered a custom birthday cake with their Mint Chocolate Dream ice cream, and it was the highlight of the party! Everyone was asking where I got it. The flavor and presentation were perfect."
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="section bg-primary-50 py-20">
      <div className="container-custom">
        <SectionTitle 
          title="Happy Customers" 
          subtitle="Don't just take our word for it—here's what our customers have to say about their Sundae Dreams experience."
          center
        />
        
        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Testimonial Cards */}
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <motion.div 
                    className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-6 items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="md:w-1/4 flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mx-auto border-4 border-primary-100"
                      />
                    </div>
                    
                    <div className="md:w-3/4 text-center md:text-left">
                      <div className="flex justify-center md:justify-start text-accent-400 mb-2">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star key={i} size={18} fill="#FFF3B0" />
                        ))}
                      </div>
                      
                      <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                      
                      <div>
                        <h4 className="font-display font-bold">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-primary-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-primary-400 w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-primary-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;