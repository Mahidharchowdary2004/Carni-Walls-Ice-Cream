import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Sparkles, Star, Heart } from "lucide-react"
import { Link } from "react-router-dom"

const heroProducts = [
  {
    name: "STRAWBERRY",
    description: "MADE WITH JUICY STRAWBERRIES AND RICH MILKY CREAM",
    image: "https://t4.ftcdn.net/jpg/07/00/07/01/360_F_700070141_2kndEJKw06LYpcI6Wla0fB9YEOc22g5F.jpg",
    gradient: "from-[#fcb6c6] via-[#f87171] to-[#ef4444]",       // warm, fruity reds
    textGradient: "from-[#b91c1c] to-[#7f1d1d]",                 // desi-style deep strawberry text
    accentColor: "strawberry",
    tagline: "REAL FRESH FLAVOUR",

  },
  {
    name: "BLUEBERRY",
    description: "TANGY, CREAMY, AND FILLED WITH BLUEBERRY GOODNESS",
    image: "https://t3.ftcdn.net/jpg/10/75/24/08/360_F_1075240879_5VkzNNsaTaWOqqsKFts5rAugGQnK7JJM.jpg",
    gradient: "from-[#cdb4db] via-[#a084ca] to-[#5e60ce]",         // soft purple → rich berry violet
    textGradient: "from-[#3c096c] to-[#240046]",                  // bold blueberry skin tones
    accentColor: "blueberry",
    tagline: "WILD BERRY BURST",
  },
  {
    name: "DARK",
    tagline: "CHOCOLATE",
    description: "SINGLE-ORIGIN CACAO BLISS",
    image: "https://laneandgreyfare.com/wp-content/uploads/2022/02/Chocolate-Ice-Cream-1.jpg",
    gradient: "from-[#5d4037] via-[#4e342e] to-[#3e2723]", // rich dark browns
    textGradient: "from-[#3e2723] to-[#1b1b1b]", // darkest shades for text contrast
    accentColor: "dark-chocolate", // label for your theme

  },
  {
    name: "SICILIAN",
    tagline: "PISTACHIO",
    description: "HAND-HARVESTED NUTS",
    image: "https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2022/09/Pistachio-ice-cream-hero-06.jpg",
    gradient: "from-[#d1e7c0] via-[#c7e8b4] to-[#bfe3aa]",
    textGradient: "from-[#7cae70] to-[#6aa55d]",
    accentColor: "pista",

  },
  {
    name: "ALPHONSO",
    tagline: "MANGO",
    description: "TROPICAL FRUIT PERFECTION",
    image: "https://images.pexels.com/photos/1332267/pexels-photo-1332267.jpeg",
    gradient: "from-yellow-200 via-orange-200 to-amber-200",
    textGradient: "from-yellow-700 to-orange-800",
    accentColor: "yellow",
  },
  {
    name: "CHOCOLATE",
    tagline: "FUDGE",
    description: "CREAMY, MELTY, CHOCOLATE PERFECTION",
    image: "https://wholefoodsimply.com/wp-content/uploads/2016/11/choc-fudge-ice-cream-1-of-1.jpg",
    gradient: "from-[#a1887f] via-[#8d6e63] to-[#5d4037]",       // smooth milk-to-dark chocolate
    textGradient: "from-[#4e342e] to-[#3e2723]",                  // rich fudge-like text gradient
    accentColor: "chocolate-fudge",                              // descriptive theme label

  },
  {
    name: "BUTTERSCOTCH",
    description: "A TOASTY BLEND OF SWEET BUTTERSCOTCH AND CRUNCHY NUTS",
    tagline: "BUTTERED NUT BLISS",
    gradient: "from-[#ffe0b2] via-[#fbc88d] to-[#f5b263]",
    textGradient: "from-[#d18f32] to-[#a65a1f]",
    accentColor: "butterscotch",
    image: "https://t4.ftcdn.net/jpg/02/97/90/93/360_F_297909364_Mf6NROOAREMWzyh31f5WmwSAamxJixsu.jpg",

  },
  {
    name: "ROASTED ALMOND",
  tagline: "TOASTED GOLDEN NUTS",
  description: "SMOOTH & NUTTY INDULGENCE WITH A HINT OF CREAMY SWEETNESS",
  image: "https://www.savingdessert.com/wp-content/uploads/2020/06/Salted-Caramel-No-Churn-Ice-Cream-2.jpg",
  gradient: "from-[#f9e0c7] via-[#f6c28b] to-[#e8a87c]", // warm almond & roasted caramel tones
  textGradient: "from-[#a05a2c] to-[#6b3e1d]",           // rich roasted nut tones
  accentColor: "roasted-almond",

  },
  {
    name: "BLACK",
    tagline: "FOREST",
    description: "RICH, CREAMY, CHERRY-CHOCOLATE FOREST DELIGHT",
    image: "https://www.sugarsaltmagic.com/wp-content/uploads/2024/01/Black-Forest-Ice-Cream-12FEAT.jpg",
    gradient: "from-[#8b3a3a] via-[#5a2e2e] to-[#2e1d1d]",        // cherry glaze → fudge core → chocolate base
    textGradient: "from-[#6e1e1e] to-[#1c0e0e]",                // cherry-dark chocolate for text
    accentColor: "black-forest",

  },
  {
    name: "COCONUT",
    description: "TROPICAL PARADISE BLEND",
    image: "https://theflavoursofkitchen.com/wp-content/uploads/2019/06/Coconut-Ice-Cream-4.jpg",
    gradient: "from-[#fefae0] via-[#fdf6e3] to-[#fffdf7]",         // creamy coconut white & warm ivory
    textGradient: "from-[#bfae9e] to-[#6e665b]",                    // soft sandy brown to toasted coconut
    accentColor: "coconut-cream",
    tagline: "ICE CREAM",

  },
  {
    name: "GUAVA",
    tagline: "SPICY",
    description: "SPICY GUAVA PUNCH IN EVERY BITE",
    image:
      "https://img-cdn.thepublive.com/fit-in/1200x675/sanjeev-kapoor/media/post_banners/027d2910566d1ae91976f79e7ed60cc844f8f0caa6d4a7ceef4f01320d18d3f0.jpg",
    gradient: "from-red-200 via-pink-200 to-rose-200",
    textGradient: "from-red-700 to-pink-800",
    accentColor: "red",
  },
  {
    name: "HONEY MELON",
    description: "SMOOTH, CREAMY MELON PERFECTION IN EVERY BITE",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/12/FN/LH/FJ/3180617/melon-ice-cream-flavour.jpg",
    gradient: "from-[#fefcc8] via-[#d8f3b4] to-[#bff5a3]",           // light honeydew yellow to melon green
    textGradient: "from-[#7ba73f] to-[#4b7e2e]",                     // deeper natural green for text
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
    <section className="relative min-h-[80dvh] overflow-hidden">
      {/* Animated Background */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`absolute inset-0 bg-gradient-to-br ${currentProduct.gradient}`}
      />

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
          className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
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
          className="absolute top-40 right-20 w-24 h-24 bg-white/15 rounded-full blur-xl"
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
          className="absolute bottom-40 left-1/4 w-40 h-40 bg-white/8 rounded-full blur-3xl"
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

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 min-h-[80dvh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20 w-full">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left max-w-full"
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
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-4 py-2 text-sm font-medium border border-white/30"
                >
                  <Sparkles size={16} className="text-white" />
                  100% Natural Ingredients
                  <Star size={16} className="text-white fill-current" />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className={`font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-4 break-words hyphens-auto bg-gradient-to-r ${currentProduct.textGradient} bg-clip-text text-transparent drop-shadow-lg`}
                >
                  {currentProduct.name}
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className={`font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 break-words hyphens-auto bg-gradient-to-r ${currentProduct.textGradient} bg-clip-text text-transparent drop-shadow-lg`}
                >
                  {currentProduct.tagline}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl md:text-2xl mb-8 font-serif tracking-wide text-gray-700 drop-shadow-sm"
                >
                  {currentProduct.description}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Link to="/flavors">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex h-14 items-center justify-center rounded-full bg-white/30 backdrop-blur-md px-8 font-semibold shadow-xl hover:bg-white/40 transition-all duration-300 border border-white/50 text-gray-800"
                    >
                      <Sparkles size={18} className="mr-2" />
                      All Flavors
                      <ArrowRight size={18} className="ml-2" />
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Image */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10"
              >
                <motion.div
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 backdrop-blur-sm"
                >
                  <img
                    src={currentProduct.image || "/placeholder.svg"}
                    alt={`${currentProduct.name} ${currentProduct.tagline} natural ice cream`}
                    className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-2 text-sm font-semibold shadow-lg border border-white/50"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Organic • No Additives
                    </div>
                  </motion.div>

                  {/* Floating elements around image */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full shadow-lg flex items-center justify-center"
                  >
                    ⭐
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, 8, 0],
                      rotate: [0, -3, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute -bottom-2 -left-4 w-6 h-6 bg-pink-300 rounded-full shadow-lg flex items-center justify-center"
                  >
                    💖
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <motion.button
              onClick={() => navigate("prev")}
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/30 backdrop-blur-md p-4 transition-all hover:bg-white/50 shadow-xl border border-white/50"
              aria-label="Previous flavor"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </motion.button>

            <motion.button
              onClick={() => navigate("next")}
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/30 backdrop-blur-md p-4 transition-all hover:bg-white/50 shadow-xl border border-white/50"
              aria-label="Next flavor"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </motion.button>

            {/* Decorative Elements */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 -right-8 w-24 h-24 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 blur-xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-1/4 -left-8 w-32 h-32 rounded-full bg-gradient-to-r from-blue-300 to-green-300 blur-xl"
            />
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-wrap justify-center gap-3 max-w-2xl px-4 bg-white/20 backdrop-blur-md rounded-full py-3 border border-white/30">
          {heroProducts.map((product, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 h-4 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 shadow-lg"
                  : "w-4 h-4 bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`View ${product.name} ${product.tagline} ice cream`}
              aria-current={index === currentIndex ? "true" : "false"}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <motion.div
          key={currentIndex}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "linear" }}
          className="h-full bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400"
        />
      </div>
    </section>
  )
}
