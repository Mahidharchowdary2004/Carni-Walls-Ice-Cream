import type React from "react"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, ExternalLink, Instagram, Facebook, Twitter, Star, Heart } from "lucide-react"
import { Link } from "react-router-dom"

// Single location data
const location = {
  id: 1,
  name: "Get In Touch",
  address: "2-13-80, Servey No:411-A,411-B,2nd Ward Eastside of, National Highway Road, Kovur, Andhra Pradesh 524137",
  phone: "+91 8688131949",
  email: "carniwallss@gmail.com",
  hours: {
    monday: "9AM-9PM",
    tuesday: "9AM-9PM",
    wednesday: "9AM-9PM",
    thursday: "9AM-9PM",
    friday: "9AM-9PM",
    saturday: "9AM-9PM",
    sunday: "9AM-9PM",
  },
  mapUrl: "https://maps.app.goo.gl/66o1gA7zL52KAMUh7",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.3889314104144!2d79.98635697487111!3d14.519731885957112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c8d6cd281ee91%3A0xfbcf32f767f4f00e!2sCarni%20walls%20ice%20creams!5e0!3m2!1sen!2sin!4v1745640515646!5m2!1sen!2sin",
  image:
    "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  specialties: ["All Signature Flavors", "Ice Cream Cakes", "Sundae Bar", "Artisanal Coffee", "Baked Goods"],
  about:
    "Our flagship store offers the complete Sundae Dreams experience with our full range of handcrafted ice creams, specialty sundaes, and custom ice cream cakes. The spacious seating area and outdoor patio make it perfect for gatherings with family and friends.",
  parking: "Free parking available in our dedicated lot",
  accessibility: "Accessible entrance and restrooms",
  gallery: [
    "/shop.jpg",
    "https://images.pexels.com/photos/1682462/pexels-photo-1682462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1756665/pexels-photo-1756665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ],
  socialMedia: {
    instagram: "https://instagram.com/sundaedreams",
    facebook: "https://facebook.com/sundaedreams",
    twitter: "https://twitter.com/sundaedreams",
  },
}

// SectionTitle component
const SectionTitle = ({
  title,
  subtitle,
  center = false,
}: {
  title: string
  subtitle: string
  center?: boolean
}) => {
  return (
    <div className={`${center ? "text-center" : ""} mb-12`}>
      <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  )
}

const Locations: React.FC = () => {
  useEffect(() => {
    document.title = "Our Location | Sundae Dreams"
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-green-200/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 py-20 pt-32 relative overflow-hidden">
        {/* Floating ice cream scoops */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-400/30 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-400/30 rounded-full blur-xl animate-bounce delay-300"></div>
        <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-blue-400/30 rounded-full blur-xl animate-bounce delay-700"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            className="text-white font-bold text-4xl md:text-5xl lg:text-6xl text-center drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Visit Our Sweet Shop
          </motion.h1>
          <motion.p
            className="text-white/90 text-center mt-4 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience the magic of Sundae Dreams in person at our flagship location 🍦
          </motion.p>
        </div>
      </div>

      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <motion.div
              className="flex space-x-2 bg-gradient-to-r from-pink-100 to-purple-100 p-3 rounded-2xl shadow-lg border border-pink-200/50"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <MapPin size={18} className="text-pink-600" />
              <span className="font-medium text-gray-700">Kovur, Andhra Pradesh</span>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 relative group">
                <img
                  src={location.image || "/placeholder.svg"}
                  alt={location.name}
                  className="w-full h-64 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="mt-8 bg-gradient-to-br from-white via-pink-50/30 to-purple-50/30 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  About Our Sweet Store
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{location.about}</p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/50">
                    <div className="bg-green-200 p-2 rounded-full">
                      <MapPin size={18} className="text-green-700" />
                    </div>
                    <span className="text-green-800 font-medium">{location.parking}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                    <div className="bg-blue-200 p-2 rounded-full">
                      <Heart size={18} className="text-blue-700" />
                    </div>
                    <span className="text-blue-800 font-medium">{location.accessibility}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-24"
            >
              <div className="bg-gradient-to-br from-white via-pink-50/30 to-purple-50/30 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/50">
                <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
                  <h3 className="text-2xl font-bold text-white mb-1 relative z-10">{location.name}</h3>
                  <p className="text-white/90 relative z-10">Your local ice cream destination 🍨</p>
                </div>

                <div className="p-6 space-y-6">
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl border border-pink-200/50">
                    <div className="bg-pink-200 p-2 rounded-full">
                      <MapPin size={20} className="text-pink-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-pink-800">Address</h4>
                      <address className="not-italic text-gray-600 text-sm leading-relaxed">{location.address}</address>
                      <a
                        href={location.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-pink-600 hover:text-pink-700 inline-flex items-center gap-1 mt-2 font-medium transition-colors"
                      >
                        Get Directions
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl border border-purple-200/50">
                    <div className="bg-purple-200 p-2 rounded-full">
                      <Clock size={20} className="text-purple-700" />
                    </div>
                    <div className="w-full">
                      <h4 className="font-semibold text-purple-800 mb-2">Store Hours</h4>
                      <div className="text-sm space-y-1 text-gray-600">
                        {Object.entries(location.hours).map(([day, hours]) => (
                          <div key={day} className="flex justify-between items-center py-1">
                            <span className="capitalize font-medium">{day}</span>
                            <span className="bg-purple-100 px-2 py-1 rounded-lg text-purple-700 font-medium">
                              {hours}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/50">
                      <div className="bg-green-200 p-2 rounded-full">
                        <Phone size={20} className="text-green-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800">Phone</h4>
                        <a
                          href={`tel:${location.phone}`}
                          className="text-gray-600 hover:text-green-600 transition-colors text-sm"
                        >
                          {location.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                      <div className="bg-blue-200 p-2 rounded-full">
                        <Mail size={20} className="text-blue-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800">Email</h4>
                        <a
                          href={`mailto:${location.email}`}
                          className="text-gray-600 hover:text-blue-600 transition-colors text-sm break-all"
                        >
                          {location.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200/50">
                    <h4 className="font-semibold mb-3 text-yellow-800 flex items-center gap-2">
                      <Star size={18} className="text-yellow-600" />
                      Our Specialties
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {location.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="bg-gradient-to-r from-yellow-200 to-orange-200 px-3 py-2 rounded-full text-sm text-yellow-800 font-medium border border-yellow-300/50"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl border border-pink-200/50">
                    <h4 className="font-semibold mb-3 text-pink-800">Follow Our Sweet Journey</h4>
                    <div className="flex gap-3">
                      <a
                        href={location.socialMedia.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-pink-200 to-rose-200 p-3 rounded-2xl text-pink-700 hover:from-pink-300 hover:to-rose-300 transition-all duration-300 transform hover:scale-105"
                      >
                        <Instagram size={20} />
                        <span className="sr-only">Instagram</span>
                      </a>
                      <a
                        href={location.socialMedia.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-200 to-indigo-200 p-3 rounded-2xl text-blue-700 hover:from-blue-300 hover:to-indigo-300 transition-all duration-300 transform hover:scale-105"
                      >
                        <Facebook size={20} />
                        <span className="sr-only">Facebook</span>
                      </a>
                      <a
                        href={location.socialMedia.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-purple-200 to-pink-200 p-3 rounded-2xl text-purple-700 hover:from-purple-300 hover:to-pink-300 transition-all duration-300 transform hover:scale-105"
                      >
                        <Twitter size={20} />
                        <span className="sr-only">Twitter</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200/30 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-200/30 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="Find Our Sweet Spot"
            subtitle="We're conveniently located in the heart of the community, ready to serve you the sweetest treats!"
            center
          />

          <motion.div
            className="rounded-3xl overflow-hidden shadow-2xl h-[500px] mt-12 border-4 border-white/50"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              src={location.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sundae Dreams Location"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-pink-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-28 h-28 bg-purple-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white via-pink-50/50 to-purple-50/50 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50"
            >
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Have Sweet Questions? 🍦
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                We'd love to hear from you! Contact us for catering inquiries, special events, custom ice cream cakes,
                or any questions about our delicious treats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white font-semibold hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
                  >
                    Contact Us Today
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Locations
