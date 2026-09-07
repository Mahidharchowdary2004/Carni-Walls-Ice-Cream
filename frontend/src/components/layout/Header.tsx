import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Sparkles, Heart, MapPin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const location = useLocation()
  const pathname = location.pathname

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false) // scrolling down → hide
      } else {
        setShowHeader(true) // scrolling up → show
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navLinks = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "Flavors", path: "/flavors", icon: "🍦" },
    { name: "Locations", path: "/locations", icon: <MapPin size={16} /> },
    { name: "About", path: "/about", icon: "💫" },
    { name: "Contact", path: "/contact", icon: "💌" },
  ]

  return (
    <>
      {/* Decorative background blur for header */}

      <motion.header
        initial={{ y: 0 }}
        animate={{ y: showHeader ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed w-full z-50 py-4 transition-all duration-300"
      >
        {/* Floating header container */}
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-white/80 via-pink-50/80 to-purple-50/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 px-6 py-3 flex justify-between items-center relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-pink-200/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-purple-200/20 rounded-full blur-lg"></div>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 relative z-10" tabIndex={-1} aria-label="Home">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
                <div className="h-14 flex items-center justify-center">
                  <img src="/Logo.png" alt="Carni Walls Logo" className="h-14 w-auto object-contain" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Carni Walls
                  </h1>
                  <p className="text-xs text-gray-500 font-medium">Ice Cream Dreams</p>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block relative z-10">
              <ul className="flex space-x-2">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.path
                  return (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        className={`px-4 py-2 rounded-2xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 relative overflow-hidden ${
                          isActive
                            ? "bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white shadow-lg"
                            : "text-gray-700 hover:bg-gradient-to-r hover:from-pink-100 hover:via-purple-100 hover:to-indigo-100 hover:text-gray-800"
                        }`}
                        tabIndex={0}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <span className="text-base">{link.icon}</span>
                        {link.name}
                        {isActive && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-2xl -z-10"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-3 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl text-gray-700 hover:from-pink-200 hover:to-purple-200 focus:outline-none transition-all duration-300 relative z-10"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden absolute top-full left-4 right-4 mt-2"
            >
              <div className="bg-gradient-to-br from-white/90 via-pink-50/90 to-purple-50/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 relative overflow-hidden">
                {/* Decorative elements for mobile menu */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-pink-200/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-purple-200/20 rounded-full blur-xl"></div>

                <nav className="relative z-10">
                  <ul className="space-y-3">
                    {navLinks.map((link, index) => {
                      const isActive = pathname === link.path
                      return (
                        <motion.li
                          key={link.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`w-full text-left p-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                              isActive
                                ? "bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white shadow-lg"
                                : "text-gray-700 hover:bg-gradient-to-r hover:from-pink-100 hover:via-purple-100 hover:to-indigo-100"
                            }`}
                            tabIndex={0}
                            aria-current={isActive ? "page" : undefined}
                          >
                            <span className="text-xl">{link.icon}</span>
                            <span>{link.name}</span>
                            {isActive && (
                              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-auto">
                                <Sparkles size={16} className="text-white" />
                              </motion.div>
                            )}
                          </Link>
                        </motion.li>
                      )
                    })}
                  </ul>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}

export default Header
