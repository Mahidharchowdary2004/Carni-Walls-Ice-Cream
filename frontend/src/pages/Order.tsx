import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { Check, Plus, Minus, ShoppingBag } from 'lucide-react';

const Order: React.FC = () => {
  useEffect(() => {
    document.title = 'Carni Walls';
  }, []);

  return (
    <div className="pt-32">
      <div className="bg-secondary-400 py-20 pt-32">
        <div className="container-custom">
          <motion.h1 
            className="text-gray-800 font-display text-4xl md:text-5xl lg:text-6xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Order Your Favorite Scoops
          </motion.h1>
        </div>
      </div>
      
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Build Your Ice Cream Box" 
            subtitle="Create your own perfect collection of scoops, delivered right to your door in our special insulated packaging."
            center
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            {/* Step 1: Choose Size */}
            <div className="mb-12">
              <h3 className="font-display text-2xl mb-6 flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-400 text-white mr-3 text-sm">1</span>
                Choose Your Box Size
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {['Small (4 scoops)', 'Medium (6 scoops)', 'Large (8 scoops)'].map((size, index) => (
                  <motion.div 
                    key={index}
                    className="border-2 border-gray-200 rounded-xl p-6 text-center cursor-pointer hover:border-primary-400 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <h4 className="font-display text-xl mb-2">{size}</h4>
                    <p className="text-gray-500 text-sm mb-4">
                      {index === 0 ? 'Perfect for 1-2 people' : 
                       index === 1 ? 'Great for 3-4 people' : 
                                   'Ideal for parties & gatherings'}
                    </p>
                    <p className="font-display font-bold text-lg text-primary-500">
                      ${(index + 1) * 12}.99
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Step 2: Choose Flavors */}
            <div className="mb-12">
              <h3 className="font-display text-2xl mb-6 flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-400 text-white mr-3 text-sm">2</span>
                Select Your Flavors
              </h3>
              
              <div className="space-y-4">
                {['Dreamberry Delight', 'Mint Chocolate Dream', 'Vanilla Cloud', 'Salted Caramel Bliss'].map((flavor, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center justify-between bg-gray-50 p-4 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-lg overflow-hidden">
                        <img 
                          src={`https://images.pexels.com/photos/${1132558 + index * 200000}/pexels-photo-${1132558 + index * 200000}.jpeg`} 
                          alt={flavor}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold">{flavor}</h4>
                        <div className="flex mt-1">
                          {index % 2 === 0 ? (
                            <span className="text-xs bg-secondary-300 px-2 py-0.5 rounded-full text-gray-800">Vegan</span>
                          ) : (
                            <span className="text-xs bg-accent-300 px-2 py-0.5 rounded-full text-gray-800">Gluten-Free</span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <button className="p-1 rounded-full border border-gray-300 hover:bg-gray-100">
                          <Minus size={16} />
                        </button>
                        <span className="mx-3 font-medium">1</span>
                        <button className="p-1 rounded-full border border-gray-300 hover:bg-gray-100">
                          <Plus size={16} />
                        </button>
                      </div>
                      <div className="w-6">
                        <Check size={20} className="text-green-500" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <button className="text-primary-500 font-display font-medium hover:text-primary-600 transition-colors">
                  + View more flavors
                </button>
              </div>
            </div>
            
            {/* Step 3: Add-ons */}
            <div className="mb-12">
              <h3 className="font-display text-2xl mb-6 flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-400 text-white mr-3 text-sm">3</span>
                Add Extra Toppings
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Chocolate Sprinkles', 
                  'Rainbow Sprinkles', 
                  'Caramel Sauce', 
                  'Hot Fudge', 
                  'Crushed Cookies', 
                  'Fresh Fruit Mix'
                ].map((topping, index) => (
                  <motion.div 
                    key={index}
                    className="border border-gray-200 rounded-xl p-4 flex items-center justify-between"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <span>{topping}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-500">+$1.50</span>
                      <button className="w-6 h-6 rounded-full border-2 border-gray-300 hover:border-primary-400 flex items-center justify-center transition-colors">
                        <Plus size={14} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Order Summary */}
            <motion.div 
              className="bg-gray-50 rounded-2xl p-6 md:p-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-display text-2xl mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Medium Box (6 scoops)</span>
                  <span>$24.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Extra Toppings (2)</span>
                  <span>$3.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>$4.99</span>
                </div>
                <div className="border-t border-gray-300 pt-4 flex justify-between font-display font-bold">
                  <span>Total</span>
                  <span>$32.98</span>
                </div>
              </div>
              
              <button className="btn btn-primary w-full flex items-center justify-center gap-2">
                <ShoppingBag size={18} />
                Proceed to Checkout
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Delivery Information */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              title="Delivery Information" 
              subtitle="Here's everything you need to know about our delivery service. We deliver our ice cream in special insulated packaging to ensure it arrives in perfect condition."
              center
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-display text-xl mb-4">Delivery Areas</h3>
                <p className="text-gray-600 mb-4">
                  We currently deliver to the following areas:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Sweet City - Free delivery on orders over $30</li>
                  <li>Ice Cream Lane - $2.99 delivery fee</li>
                  <li>Surrounding areas - $4.99 delivery fee</li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="font-display text-xl mb-4">Delivery Times</h3>
                <p className="text-gray-600 mb-4">
                  We offer delivery during the following hours:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Monday - Thursday: 2PM - 8PM</li>
                  <li>Friday - Sunday: 12PM - 9PM</li>
                  <li>Orders are typically delivered within 45-60 minutes</li>
                </ul>
              </motion.div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm mt-8">
              <h3 className="font-display text-xl mb-4">Special Requests & Events</h3>
              <p className="text-gray-600">
                Planning a special event or need a custom order? We offer catering services for birthday parties, 
                weddings, corporate events, and more! Contact us at <a href="mailto:events@carniwalls.com" className="text-primary-500 hover:underline">events@carniwalls.com</a> or 
                call <a href="tel:+1234567890" className="text-primary-500 hover:underline">(123) 456-7890</a> for details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;