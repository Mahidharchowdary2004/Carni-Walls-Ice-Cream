

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Sparkles, Star } from "lucide-react"

const heroProducts = [
  {
    name: "STRAWBERRY",
    description: "MADE WITH JUICY STRAWBERRIES AND RICH MILKY CREAM",
    image: "./strawberry.png",
    gradient: "from-[#fcb6c6] via-[#f87171] to-[#ef4444]",
    textGradient: "from-[#b91c1c] to-[#7f1d1d]",
    accentColor: "strawberry",
    tagline: "REAL FRESH FLAVOUR",
  },
  {
    name: "BLUEBERRY",
    description: "TANGY, CREAMY, AND FILLED WITH BLUEBERRY GOODNESS",
    image: "/Blueberry.png",
    gradient: "from-[#cdb4db] via-[#a084ca] to-[#5e60ce]",
    textGradient: "from-[#3c096c] to-[#240046]",
    accentColor: "blueberry",
    tagline: "WILD BERRY BURST",
  },
  {
    name: "DARK",
    tagline: "CHOCOLATE",
    description: "SINGLE-ORIGIN CACAO BLISS",
    image: "./CHOCOLATE.png",
    gradient: "from-[#5d4037] via-[#4e342e] to-[#3e2723]",
    textGradient: "from-[#3e2723] to-[#1b1b1b]",
    accentColor: "dark-chocolate",
  },
  {
    name: "SICILIAN",
    tagline: "PISTACHIO",
    description: "HAND-HARVESTED NUTS",
    image: "./pista home.png",
    gradient: "from-[#d1e7c0] via-[#c7e8b4] to-[#bfe3aa]",
    textGradient: "from-[#7cae70] to-[#6aa55d]",
    accentColor: "pista",
  },
  {
    name: "ALPHONSO",
    tagline: "MANGO",
    description: "TROPICAL FRUIT PERFECTION",
    image: "./Mango.png",
    gradient: "from-yellow-200 via-orange-200 to-amber-200",
    textGradient: "from-yellow-700 to-orange-800",
    accentColor: "yellow",
  },
  {
    name: "CHOCOLATE",
    tagline: "FUDGE",
    description: "CREAMY, MELTY, CHOCOLATE PERFECTION",
    image: "./Fudge.png",
    gradient: "from-[#a1887f] via-[#8d6e63] to-[#5d4037]",
    textGradient: "from-[#4e342e] to-[#3e2723]",
    accentColor: "chocolate-fudge",
  },
  {
    name: "BUTTERSCOTCH",
    description: "A TOASTY BLEND OF SWEET BUTTERSCOTCH AND CRUNCHY NUTS",
    tagline: "BUTTERED NUT BLISS",
    gradient: "from-[#ffe0b2] via-[#fbc88d] to-[#f5b263]",
    textGradient: "from-[#d18f32] to-[#a65a1f]",
    accentColor: "butterscotch",
    image: "./Butterscoch.png",
  },
  {
    name: "ROASTED ALMOND",
    tagline: "TOASTED GOLDEN NUTS",
    description: "SMOOTH & NUTTY INDULGENCE WITH A HINT OF CREAMY SWEETNESS",
    image: "./Caramel home.png",
    gradient: "from-[#f9e0c7] via-[#f6c28b] to-[#e8a87c]",
    textGradient: "from-[#a05a2c] to-[#6b3e1d]",
    accentColor: "roasted-almond",
  },
  {
    name: "BLACK",
    tagline: "FOREST",
    description: "RICH, CREAMY, CHERRY-CHOCOLATE FOREST DELIGHT",
    image: "./Black home.png",
    gradient: "from-[#8b3a3a] via-[#5a2e2e] to-[#2e1d1d]",
    textGradient: "from-[#6e1e1e] to-[#1c0e0e]",
    accentColor: "black-forest",
  },
  {
    name: "COCONUT",
    description: "TROPICAL PARADISE BLEND",
    image: "./Cocunent.png",
    gradient: "from-[#fefae0] via-[#fdf6e3] to-[#fffdf7]",
    textGradient: "from-[#bfae9e] to-[#6e665b]",
    accentColor: "coconut-cream",
    tagline: "ICE CREAM",
  },
  {
    name: "GUAVA",
    tagline: "SPICY",
    description: "SPICY GUAVA PUNCH IN EVERY BITE",
    image: "./Guva home.png",
    gradient: "from-red-200 via-pink-200 to-rose-200",
    textGradient: "from-red-700 to-pink-800",
    accentColor: "red",
  },
  {
    name: "MUSK MELON",
    description: "SMOOTH, CREAMY MELON PERFECTION IN EVERY BITE",
    image: "./musk home.png",
    gradient: "from-[#fefcc8] via-[#d8f3b4] to-[#bff5a3]",
    textGradient: "from-[#7ba73f] to-[#4b7e2e]",
    accentColor: "honey-melon",
    tagline: "DELIGHT",
  },
]

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroProducts.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const currentProduct = heroProducts[currentIndex]

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const navigate = (direction: "prev" | "next") => {
    setIsAutoPlaying(false)
    if (direction === "prev") {
      setCurrentIndex((prev) => (prev === 0 ? heroProducts.length - 1 : prev - 1))
    } else {
      setCurrentIndex((prev) => (prev + 1) % heroProducts.length)
    }
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`absolute inset-0 bg-gradient-to-br ${currentProduct.gradient}`}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-white/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-40 right-20 w-24 h-24 bg-white/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 2, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-40 left-1/4 w-40 h-40 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -4, 0],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-20 right-1/3 w-28 h-28 bg-white/12 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full py-16 lg:py-20">
          <motion.div
            className="text-center lg:text-left max-w-xl space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md px-5 py-3 text-sm font-semibold shadow-lg border border-white/40"
                >
                  <Sparkles size={16} className="text-amber-500" />
                  <span className="text-gray-900">100% Natural Ingredients</span>
                  <Star size={16} className="text-amber-500 fill-current" />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg"
                >
                  {currentProduct.name}
                </motion.h1>

                {currentProduct.tagline && (
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white/95 drop-shadow-lg"
                  >
                    {currentProduct.tagline}
                  </motion.h2>
                )}

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg md:text-xl lg:text-2xl font-serif tracking-wide text-white/90 drop-shadow-md leading-relaxed max-w-lg"
                >
                  {currentProduct.description}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white text-gray-900 px-8 font-bold text-lg shadow-2xl hover:bg-gray-50 hover:shadow-xl transition-all duration-300 border border-white"
                  >
                    <Sparkles size={20} />
                    Explore All Flavors
                    <ArrowRight size={20} />
                  </motion.button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="relative h-96 md:h-[500px] lg:h-[600px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full h-full"
              >
                <motion.div
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/40 backdrop-blur-sm"
                >
                  <img
                    src={currentProduct.image || "/placeholder.svg"}
                    alt={`${currentProduct.name} ${currentProduct.tagline} natural ice cream`}
                    className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3 text-sm font-bold shadow-xl border border-white/50"
                  >
                    <div className="flex items-center gap-2 text-gray-900">
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Organic • No Additives</span>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <motion.button
              onClick={() => navigate("prev")}
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-0 top-1/2 z-20 -translate-y-1/2 -translate-x-16 rounded-full bg-white shadow-xl p-4 transition-all hover:bg-gray-100 text-gray-900 font-bold"
              aria-label="Previous flavor"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </motion.button>

            <motion.button
              onClick={() => navigate("next")}
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-0 top-1/2 z-20 -translate-y-1/2 translate-x-16 rounded-full bg-white shadow-xl p-4 transition-all hover:bg-gray-100 text-gray-900 font-bold"
              aria-label="Next flavor"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/30 shadow-lg">
        <motion.div
          key={currentIndex}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "linear" }}
          className="h-full bg-gradient-to-r from-white via-white/80 to-white/60 shadow-md"
        />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroProducts.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`rounded-full transition-all ${
              index === currentIndex ? "bg-white h-3 w-8 shadow-lg" : "bg-white/50 h-2 w-2 hover:bg-white/75"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Go to flavor ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
