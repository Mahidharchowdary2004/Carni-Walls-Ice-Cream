"use client"

import type React from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Heart, Sparkles, Star } from "lucide-react"
import { Link } from "react-router-dom"

const ContactPreview: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-green-200/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="bg-gradient-to-br from-white/80 via-pink-50/80 to-purple-50/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative elements inside card */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-pink-200/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-200/20 rounded-full blur-lg"></div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🍦</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Come Say Hello!
                </h2>
              </motion.div>

              <motion.p
                className="mb-8 text-gray-600 leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                We'd love to meet you in person! Visit our sweet shop to experience the magic of Carni Walls, or reach
                out to us with any questions about our flavors, catering, or special events. 🎉
              </motion.p>

              <div className="space-y-6">
                <motion.div
                  className="flex items-start gap-4 p-4 bg-gradient-to-r from-pink-100/50 to-rose-100/50 rounded-2xl border border-pink-200/50"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="bg-pink-200 p-2 rounded-full">
                    <MapPin size={20} className="text-pink-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-pink-800 mb-1">Our Sweet Location</h3>
                    <address className="not-italic text-gray-600 leading-relaxed">
                      2-13-80, Servey No:411-A,411-B,2nd Ward Eastside of,
                      <br />
                      National Highway Road, Kovur,
                      <br />
                      Andhra Pradesh 524137
                    </address>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-100/50 to-indigo-100/50 rounded-2xl border border-purple-200/50"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="bg-purple-200 p-2 rounded-full">
                    <Clock size={20} className="text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-purple-800 mb-1">Opening Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <div className="flex justify-between items-center">
                        <span>Monday - Sunday:</span>
                        <span className="bg-purple-100 px-2 py-1 rounded-lg text-purple-700 font-medium text-sm">
                          9AM - 9PM
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-100/50 to-emerald-100/50 rounded-2xl border border-green-200/50"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="bg-green-200 p-2 rounded-full">
                    <Phone size={20} className="text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-green-800 mb-1">Call Us</h3>
                    <a
                      href="tel:+918688131949"
                      className="text-gray-600 hover:text-green-600 transition-colors font-medium"
                    >
                      +91 8688131949
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-100/50 to-indigo-100/50 rounded-2xl border border-blue-200/50"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="bg-blue-200 p-2 rounded-full">
                    <Mail size={20} className="text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-blue-800 mb-1">Email Us</h3>
                    <a
                      href="mailto:carniwallss@gmail.com"
                      className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                    >
                      carniwallss@gmail.com
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="rounded-3xl overflow-hidden shadow-2xl h-[500px] lg:h-auto border-4 border-white/50 relative group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.3889314104144!2d79.98635697487111!3d14.519731885957112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c8d6cd281ee91%3A0xfbcf32f767f4f00e!2sCarni%20walls%20ice%20creams!5e0!3m2!1sen!2sin!4v1745640515646!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carni Walls Sweet Location"
              className="transition-all duration-300 group-hover:scale-105"
            ></iframe>

            {/* Floating location pin */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute top-4 right-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white p-3 rounded-2xl shadow-lg z-20"
            >
              <MapPin size={20} />
            </motion.div>

            {/* Sweet location badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-2 shadow-lg z-20 flex items-center gap-2"
            >
              <Star size={16} className="text-yellow-500 fill-current" />
              <span className="text-sm font-semibold text-gray-800">Sweet Spot Located!</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to action section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-white/80 via-pink-50/80 to-purple-50/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Ready for a Sweet Adventure? 🍦
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Whether you're craving a classic scoop or want to try our latest flavor creation, we're here to make your
              day a little sweeter!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/locations">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 transition-all duration-300"
                >
                  Visit Our Shop
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactPreview