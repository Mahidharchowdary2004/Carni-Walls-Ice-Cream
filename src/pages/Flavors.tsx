"use client"

import type React from "react"
import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Heart, Eye } from "lucide-react"

// Food items data
const allFlavors = [
  // Ice Cream
  {
    id: 1,
    name: "Classic Vanilla",
    description: "Creamy vanilla ice cream with a rich, smooth texture that melts perfectly on your tongue.",
    imageUrl: "https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg",
    tags: ["Ice Cream", "Dessert", "Classic"],
    featured: true,
    category: "Ice Cream",
    price: "₹416",
  },
  {
    id: 2,
    name: "Chocolate Delight",
    description: "Rich chocolate ice cream with chocolate chips and a hint of cocoa magic.",
    imageUrl: "https://images.pexels.com/photos/1352288/pexels-photo-1352288.jpeg",
    tags: ["Ice Cream", "Dessert", "Chocolate"],
    featured: false,
    category: "Ice Cream",
    price: "₹457",
  },
  // Burgers
  {
    id: 3,
    name: "Classic Cheeseburger",
    description: "Juicy beef patty with melted cheese and fresh vegetables on a toasted bun.",
    imageUrl: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
    tags: ["Burger", "Fast Food", "Cheese"],
    featured: true,
    category: "Burgers",
    price: "₹749",
  },
  {
    id: 4,
    name: "Double Bacon Burger",
    description: "Double beef patty with crispy bacon and our special house sauce.",
    imageUrl: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg",
    tags: ["Burger", "Fast Food", "Bacon"],
    featured: false,
    category: "Burgers",
    price: "₹1,082",
  },
  // Pizzas
  {
    id: 5,
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, fresh mozzarella, and aromatic basil leaves.",
    imageUrl: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg",
    tags: ["Pizza", "Italian", "Vegetarian"],
    featured: true,
    category: "Pizzas",
    price: "₹1,249",
  },
  {
    id: 6,
    name: "Pepperoni Feast",
    description: "Loaded with premium pepperoni and extra melted cheese on crispy crust.",
    imageUrl: "https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg",
    tags: ["Pizza", "Italian", "Meat"],
    featured: false,
    category: "Pizzas",
    price: "₹1,415",
  },
  // Chicken
  {
    id: 7,
    name: "Crispy Fried Chicken",
    description: "Golden crispy chicken with our secret blend of herbs and spices.",
    imageUrl: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg",
    tags: ["Chicken", "Fast Food", "Crispy"],
    featured: true,
    category: "Chicken",
    price: "₹832",
  },
  {
    id: 8,
    name: "Grilled Chicken Wings",
    description: "Spicy grilled chicken wings glazed with tangy BBQ sauce.",
    imageUrl: "https://images.pexels.com/photos/2338408/pexels-photo-2338408.jpeg",
    tags: ["Chicken", "Fast Food", "Spicy"],
    featured: false,
    category: "Chicken",
    price: "₹999",
  },
  // Milkshakes
  {
    id: 9,
    name: "Chocolate Milkshake",
    description: "Rich and creamy chocolate milkshake topped with whipped cream and cherry.",
    imageUrl: "https://images.pexels.com/photos/1352288/pexels-photo-1352288.jpeg",
    tags: ["Milkshake", "Dessert", "Chocolate"],
    featured: true,
    category: "Milkshakes",
    price: "₹582",
  },
  {
    id: 10,
    name: "Strawberry Milkshake",
    description: "Sweet strawberry milkshake made with fresh berries and vanilla ice cream.",
    imageUrl: "https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg",
    tags: ["Milkshake", "Dessert", "Strawberry"],
    featured: false,
    category: "Milkshakes",
    price: "₹582",
  },
]

// Category color themes
const categoryColors = {
  "Ice Cream": {
    bg: "from-pink-100 to-rose-100",
    border: "border-pink-200",
    text: "text-pink-800",
    accent: "bg-pink-200",
    button: "from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500",
  },
  Burgers: {
    bg: "from-orange-100 to-yellow-100",
    border: "border-orange-200",
    text: "text-orange-800",
    accent: "bg-orange-200",
    button: "from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500",
  },
  Pizzas: {
    bg: "from-red-100 to-pink-100",
    border: "border-red-200",
    text: "text-red-800",
    accent: "bg-red-200",
    button: "from-red-400 to-pink-400 hover:from-red-500 hover:to-pink-500",
  },
  Chicken: {
    bg: "from-amber-100 to-orange-100",
    border: "border-amber-200",
    text: "text-amber-800",
    accent: "bg-amber-200",
    button: "from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500",
  },
  Milkshakes: {
    bg: "from-purple-100 to-pink-100",
    border: "border-purple-200",
    text: "text-purple-800",
    accent: "bg-purple-200",
    button: "from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500",
  },
}

// FlavorCard component
const FlavorCard = ({
  name,
  description,
  imageUrl,
  tags,
  featured,
  category,
  price,
}: {
  name: string
  description: string
  imageUrl: string
  tags: string[]
  featured: boolean
  category: string
  price: string
}) => {
  const colors = categoryColors[category as keyof typeof categoryColors] || categoryColors["Ice Cream"]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className={`relative group overflow-hidden rounded-3xl shadow-xl bg-gradient-to-br ${colors.bg} backdrop-blur-sm border-2 ${colors.border} transition-all duration-300`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {featured && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`absolute top-3 left-3 bg-gradient-to-r ${colors.button} text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1`}
          >
            <Star size={12} className="fill-current" />
            Featured
          </motion.div>
        )}

        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <Heart size={16} className="text-pink-500" />
          </motion.button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className={`text-xl font-bold ${colors.text}`}>{name}</h3>
          <span className={`text-lg font-bold ${colors.text} bg-white/50 px-2 py-1 rounded-lg`}>{price}</span>
        </div>

        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`px-3 py-1 bg-white/70 ${colors.text} rounded-full text-xs font-medium border ${colors.border}`}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full bg-gradient-to-r ${colors.button} text-white font-semibold py-3 px-4 rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
        >
          <Eye size={16} />
          View Details
        </motion.button>
      </div>
    </motion.div>
  )
}

// SectionTitle component
const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) => {
  return (
    <div className="text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 text-lg"
      >
        {subtitle}
      </motion.p>
    </div>
  )
}

const Flavors: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Define specific categories
  const categories = ["All", "Ice Cream", "Pizzas", "Burgers", "Chicken", "Milkshakes"]

  // Filter flavors based on selected category
  const filteredFlavors = useMemo(() => {
    return allFlavors.filter((flavor) => selectedCategory === "All" || flavor.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="pt-20">
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-green-200/20 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-yellow-200/20 rounded-full blur-3xl animate-pulse delay-1500"></div>
        </div>

        <div className="container mx-auto px-4 py-12 relative z-10">
          <SectionTitle
            title="Our Delicious Menu 🍦"
            subtitle="Discover our mouth-watering selection of treats and delights"
          />

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 shadow-lg ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white shadow-xl transform scale-105"
                    : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-xl border-2 border-white/50"
                }`}
              >
                {category}
                {category !== "All" && (
                  <span className="ml-2 text-xs opacity-75">
                    ({allFlavors.filter((f) => f.category === category).length})
                  </span>
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Food Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredFlavors.map((flavor, index) => (
                <motion.div
                  key={flavor.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FlavorCard {...flavor} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredFlavors.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
              <div className="text-6xl mb-4">🍦</div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No items found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </motion.div>
          )}

          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-white/80 via-pink-50/80 to-purple-50/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/50 shadow-xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  {allFlavors.length}
                </div>
                <div className="text-gray-600 font-medium">Menu Items</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  {categories.length - 1}
                </div>
                <div className="text-gray-600 font-medium">Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {allFlavors.filter((f) => f.featured).length}
                </div>
                <div className="text-gray-600 font-medium">Featured Items</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-gray-600 font-medium">Delicious</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Flavors
