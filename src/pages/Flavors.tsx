import type React from "react"
import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Heart, Clock, Award, Sparkles } from "lucide-react"

// Food items data
const allFlavors = [
  // Ice Cream
  {
    id: 1,
    name: "Classic Vanilla",
    description: "A timeless favorite — smooth and creamy vanilla ice cream made with real vanilla beans.",
    imageUrl: "/vennila ice.png",
    tags: ["Ice Cream", "Vanilla", "Classic", "Sweet"],
    featured: true,
    category: "Ice Cream",
    price: "₹200",
    rating: 4.8,
    prepTime: "5 min",
  },
  {
    id: 2,
    name: "Chocolate Delight",
    description: "Decadent chocolate ice cream loaded with rich chocolate chips and a deep cocoa flavor.",
    imageUrl: "/Chacolate Delight.png",
    tags: ["Ice Cream", "Chocolate", "Rich", "Dessert"],
    featured: false,
    category: "Ice Cream",
    price: "₹300",
    rating: 4.9,
    prepTime: "5 min",
  },
  {
    id: 3,
    name: "Pistachio Bliss",
    description: "Nutty and creamy pistachio ice cream with crunchy pistachio bits for extra delight.",
    imageUrl: "/Pista.png",
    tags: ["Ice Cream", "Pistachio", "Nutty", "Premium"],
    featured: true,
    category: "Ice Cream",
    price: "₹200",
    rating: 4.7,
    prepTime: "5 min",
  },
  {
    id: 4,
    name: "Strawberry Swirl",
    description: "Fresh strawberry ice cream swirled with juicy strawberry chunks and a fruity aroma.",
    imageUrl: "/Starayberry.png",
    tags: ["Ice Cream", "Strawberry", "Fruity", "Dessert"],
    featured: true,
    category: "Ice Cream",
    price: "₹200",
    rating: 4.6,
    prepTime: "5 min",
  },
  {
    id: 5,
    name: "Muskmelon Magic",
    description: "Refreshing muskmelon-flavored ice cream that brings a cool tropical twist to your day.",
    imageUrl: "/Muskmelon.png",
    tags: ["Ice Cream", "Melon", "Fruity", "Summer Treat"],
    featured: true,
    category: "Ice Cream",
    price: "₹300",
    rating: 4.5,
    prepTime: "5 min",
  },
  {
    id: 6,
    name: "Butterscotch Crunch",
    description: "Golden butterscotch ice cream with crunchy caramel bits and buttery sweetness.",
    imageUrl: "/butterscotch.png",
    tags: ["Ice Cream", "Butterscotch", "Caramel", "Crunchy"],
    featured: true,
    category: "Ice Cream",
    price: "₹300",
    rating: 4.8,
    prepTime: "5 min",
  },
  {
    id: 7,
    name: "Caramel Craze",
    description: "Luscious caramel ice cream swirled with thick ribbons of golden caramel sauce.",
    imageUrl: "/Caramel.png",
    tags: ["Ice Cream", "Caramel", "Sweet", "Gourmet"],
    featured: true,
    category: "Ice Cream",
    price: "₹350",
    rating: 4.9,
    prepTime: "5 min",
  },
  {
    id: 8,
    name: "Spicy Guava Burst",
    description: "A bold mix of tropical guava flavor with a hint of spice — a unique twist in every scoop.",
    imageUrl: "/Spicy Guva.png",
    tags: ["Ice Cream", "Guava", "Spicy", "Tropical", "Fusion"],
    featured: true,
    category: "Ice Cream",
    price: "₹350",
    rating: 4.7,
    prepTime: "5 min",
  },
  {
    id: 9,
    name: "Revelvet",
    description: "Red velvet ice cream with a creamy swirl and a hint of cocoa, topped with velvet cake crumbs.",
    imageUrl: "/Revelvet.png",
    tags: ["Ice Cream", "Red Velvet", "Cake", "Dessert"],
    featured: true,
    category: "Ice Cream",
    price: "₹350",
    rating: 4.8,
    prepTime: "5 min",
  },
  {
    id: 10,
    name: "Kaju Kishmish",
    description: "Rich ice cream loaded with cashews and raisins for a royal treat.",
    imageUrl: "/kaju kissmis.png",
    tags: ["Ice Cream", "Cashew", "Raisin", "Royal"],
    featured: true,
    category: "Ice Cream",
    price: "₹350",
    rating: 4.6,
    prepTime: "5 min",
  },
  {
    id: 11,
    name: "Chocolate Fudge",
    description: "Intense chocolate fudge ice cream with gooey fudge swirls and chocolate chunks.",
    imageUrl: "/Chacolate fudge.png",
    tags: ["Ice Cream", "Chocolate", "Fudge", "Rich"],
    featured: true,
    category: "Ice Cream",
    price: "₹350",
    rating: 4.9,
    prepTime: "5 min",
  },
  // Burgers
  {
    id: 12,
    name: "Classic Cheeseburger",
    description: "Juicy beef patty with melted cheese and fresh vegetables on a toasted bun.",
    imageUrl: "https://www.certifiedangusbeef.com/_next/image?url=https%3A%2F%2Fappetizing-cactus-7139e93734.media.strapiapp.com%2FThe_Chicago_Burger_41a6888826.jpeg&w=1920&q=75",
    tags: ["Burger", "Fast Food", "Cheese"],
    featured: true,
    category: "Burgers",
    price: "₹249",
    rating: 4.7,
    prepTime: "15 min",
  },
  {
    id: 13,
    name: "chicken Burger",
    description: "Juicy grilled chicken patty layered with fresh lettuce, tomatoes, creamy mayo, and melted cheese in a soft toasted bun.",
    imageUrl: "https://media.istockphoto.com/id/172449461/photo/chicken-burger.jpg?s=612x612&w=0&k=20&c=hxb7Yr7ZtGbfJGeHWMMBFl-VdiDoZdKd7TeZHj3wFEs=",
    tags: ["Burger", "Fast Food", "Bacon"],
    featured: false,
    category: "Burgers",
    price: "₹300",
    rating: 4.9,
    prepTime: "12 min",
  },
  // Pizzas
  {
  id: 14,
    name: "chicken pizza",
    description: "Deliciously baked pizza topped with tender grilled chicken, gooey mozzarella cheese, and a blend of fresh vegetables on a crispy crust.",
    imageUrl: "https://media.istockphoto.com/id/1340589333/photo/homemade-indian-chicken-tikka-masala-pizza.jpg?s=612x612&w=0&k=20&c=QetWD3UJeCFoTq6OYNJehauw7Utc8MxH6B90Cb9zvLw=",
    tags: ["Burger", "Fast Food", "Bacon"],
    featured: false,
    category: "Pizzas",
    price: "₹300",
    rating: 4.9,
    prepTime: "12 min",
  },
  {
    id: 15,
    name: "Veg Pizza",
    description: "Loaded with fresh vegetables, gooey mozzarella cheese, and aromatic herbs on a perfectly crispy crust.",
    imageUrl: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
    tags: ["Pizza", "Italian", "Meat"],
    featured: false,
    category: "Pizzas",
    price: "₹199",
    rating: 4.6,
    prepTime: "12 min",
  },
  {
    id: 16,
    name: "Panner Pizza",
    description: "rispy pizza with soft paneer, fresh veggies, and lots of cheese.",
    imageUrl: "    https://i.pinimg.com/236x/72/b2/14/72b2141e2ca565f2e92a58910fc2afd2.jpg",
    tags: ["Pizza"],
    featured: false,
    category: "Pizzas",
    price: "₹250",
    rating: 4.6,
    prepTime: "12 min",
  },
  // Chicken
  // Milkshakes
{
  id: 18,
  name: "Chocolate Milkshake",
  description: "Rich and creamy chocolate milkshake topped with whipped cream and cherry.",
  imageUrl: "/Chacolate MilkShake.png",
  tags: ["Milkshake", "Dessert", "Chocolate"],
  featured: true,
  category: "Milkshakes",
  price: "₹100",
  rating: 4.6,
  prepTime: "5 min",
},
{
  id: 19,
  name: "Strawberry Milkshake",
  description: "Sweet strawberry milkshake made with fresh berries and vanilla ice cream.",
  imageUrl: "/Strawberry Milkshake.png",
  tags: ["Milkshake", "Dessert", "Strawberry"],
  featured: false,
  category: "Milkshakes",
  price: "₹80",
  rating: 4.5,
  prepTime: "5 min",
},
{
  id: 20,
  name: "Vanilla Milkshake",
  description: "Smooth and creamy vanilla milkshake made with rich ice cream.",
  imageUrl: "/Vanilla Milkshake.png",
  tags: ["Milkshake", "Dessert", "Vanilla"],
  featured: false,
  category: "Milkshakes",
  price: "60",
  rating: 4.4,
  prepTime: "5 min",
},
{
  id: 21,
  name: "Oreo Milkshake",
  description: "Thick and sweet Oreo milkshake topped with crushed cookies.",
  imageUrl: "/Ore MilShake.png",
  tags: ["Milkshake", "Dessert", "Oreo"],
  featured: true,
  category: "Milkshakes",
  price: "80",
  rating: 4.7,
  prepTime: "6 min",
},


]

// Enhanced category color themes
const categoryColors = {
  "Ice Cream": {
    bg: "from-pink-50 via-rose-50 to-pink-100",
    cardBg: "from-pink-50/80 to-rose-100/80",
    border: "border-pink-200/50",
    text: "text-pink-900",
    accent: "bg-gradient-to-r from-pink-400 to-rose-400",
    button: "from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600",
    shadow: "shadow-pink-200/50",
    glow: "shadow-pink-400/20",
  },
  Burgers: {
    bg: "from-orange-50 via-amber-50 to-yellow-50",
    cardBg: "from-orange-50/80 to-yellow-100/80",
    border: "border-orange-200/50",
    text: "text-orange-900",
    accent: "bg-gradient-to-r from-orange-400 to-yellow-400",
    button: "from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600",
    shadow: "shadow-orange-200/50",
    glow: "shadow-orange-400/20",
  },
  Pizzas: {
    bg: "from-red-50 via-rose-50 to-pink-50",
    cardBg: "from-red-50/80 to-pink-100/80",
    border: "border-red-200/50",
    text: "text-red-900",
    accent: "bg-gradient-to-r from-red-400 to-pink-400",
    button: "from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600",
    shadow: "shadow-red-200/50",
    glow: "shadow-red-400/20",
  },
  Chicken: {
    bg: "from-amber-50 via-orange-50 to-yellow-50",
    cardBg: "from-amber-50/80 to-orange-100/80",
    border: "border-amber-200/50",
    text: "text-amber-900",
    accent: "bg-gradient-to-r from-amber-400 to-orange-400",
    button: "from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600",
    shadow: "shadow-amber-200/50",
    glow: "shadow-amber-400/20",
  },
  Milkshakes: {
    bg: "from-purple-50 via-pink-50 to-rose-50",
    cardBg: "from-purple-50/80 to-pink-100/80",
    border: "border-purple-200/50",
    text: "text-purple-900",
    accent: "bg-gradient-to-r from-purple-400 to-pink-400",
    button: "from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
    shadow: "shadow-purple-200/50",
    glow: "shadow-purple-400/20",
  },
}

// Enhanced FlavorCard component
const FlavorCard = ({
  name,
  description,
  imageUrl,
  tags,
  featured,
  category,
  price,
  rating,
  prepTime,
}: {
  name: string
  description: string
  imageUrl: string
  tags: string[]
  featured: boolean
  category: string
  price: string
  rating: number
  prepTime: string
}) => {
  const colors = categoryColors[category as keyof typeof categoryColors] || categoryColors["Ice Cream"]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className={`relative group overflow-hidden rounded-3xl bg-gradient-to-br ${colors.cardBg} backdrop-blur-xl border-2 ${colors.border} transition-all duration-500 ${colors.shadow} hover:${colors.glow} hover:shadow-2xl`}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Image section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={imageUrl}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
        />

        {/* Image overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Featured badge */}
        {featured && (
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            className={`absolute top-4 left-4 ${colors.accent} text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2 backdrop-blur-sm`}
          >
            <Sparkles size={14} className="animate-pulse" />
            Featured
          </motion.div>
        )}

        {/* Rating badge */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1"
        >
          <Star size={12} className="fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-bold text-gray-800">{rating}</span>
        </motion.div>

        {/* Hover actions */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <motion.div initial={{ scale: 0 }} whileHover={{ scale: 1.1 }} className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-xl hover:bg-white transition-colors"
            >
              <Heart size={18} className="text-red-500" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Content section */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className={`text-xl font-bold ${colors.text} mb-1 line-clamp-1`}>{name}</h3>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{prepTime}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className={`text-2xl font-bold ${colors.text} bg-white/70 px-3 py-1 rounded-xl shadow-sm`}>
              {price}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`px-3 py-1.5 bg-white/80 ${colors.text} rounded-full text-xs font-medium border ${colors.border} backdrop-blur-sm shadow-sm`}
            >
              {tag}
            </motion.span>
          ))}
          {tags.length > 3 && (
            <span className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
              +{tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// Enhanced SectionTitle component
const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) => {
  return (
    <div className="text-center mb-16">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative">
        <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-pink-600 via-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
          {title}
        </h1>
        <div className="absolute -top-4 -right-4 text-4xl animate-bounce">✨</div>
        <div className="absolute -top-2 -left-6 text-3xl animate-pulse">🍦</div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed"
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
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Enhanced decorative background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-pink-200/30 to-rose-200/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-full blur-2xl"
          />
          <motion.div
            animate={{
              x: [0, 60, 0],
              y: [0, -80, 0],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute bottom-40 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -40, 0],
              y: [0, 40, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute bottom-20 right-1/3 w-36 h-36 bg-gradient-to-r from-green-200/25 to-emerald-200/25 rounded-full blur-2xl"
          />
          <motion.div
            animate={{
              x: [0, 120, 0],
              y: [0, -100, 0],
              rotate: [0, -180, -360],
            }}
            transition={{ duration: 35, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute top-1/2 left-1/2 w-44 h-44 bg-gradient-to-r from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 py-12 relative z-10">
          <SectionTitle
            title="Our Delicious Menu"
            subtitle="Discover our mouth-watering selection of treats and delights crafted with love and the finest ingredients"
          />

          {/* Enhanced Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category, index) => {
              const isSelected = selectedCategory === category
              const colors = categoryColors[category as keyof typeof categoryColors] || categoryColors["Ice Cream"]

              return (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={`relative px-8 py-4 rounded-2xl text-sm font-bold transition-all duration-300 shadow-lg backdrop-blur-sm border-2 ${
                    isSelected
                      ? `bg-gradient-to-r ${colors.button} text-white shadow-2xl ${colors.glow} transform scale-105 border-white/50`
                      : "bg-white/80 text-gray-700 hover:bg-white hover:shadow-xl border-white/50 hover:border-gray-200"
                  }`}
                >
                  {category}
                  {category !== "All" && (
                    <span className="ml-2 text-xs opacity-75 bg-white/20 px-2 py-0.5 rounded-full">
                      {allFlavors.filter((f) => f.category === category).length}
                    </span>
                  )}
                  {isSelected && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"
                    />
                  )}
                </motion.button>
              )
            })}
          </motion.div>

          {/* Enhanced Food Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredFlavors.map((flavor, index) => (
                <motion.div
                  key={flavor.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FlavorCard {...flavor} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Enhanced empty state */}
          {filteredFlavors.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="text-8xl mb-6 animate-bounce">🍦</div>
              <h3 className="text-3xl font-bold text-gray-600 mb-4">No items found</h3>
              <p className="text-gray-500 text-lg">
                Try selecting a different category to explore more delicious options
              </p>
            </motion.div>
          )}

          {/* Enhanced stats section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-white/90 via-pink-50/90 to-purple-50/90 backdrop-blur-xl rounded-3xl p-10 border-2 border-white/50 shadow-2xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div whileHover={{ scale: 1.05 }} className="space-y-2">
                <div className="text-4xl font-black bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  {allFlavors.length}
                </div>
                <div className="text-gray-600 font-semibold">Menu Items</div>
                <Award className="w-6 h-6 mx-auto text-pink-500" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="space-y-2">
                <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  {categories.length - 1}
                </div>
                <div className="text-gray-600 font-semibold">Categories</div>
                <Star className="w-6 h-6 mx-auto text-purple-500" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="space-y-2">
                <div className="text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {allFlavors.filter((f) => f.featured).length}
                </div>
                <div className="text-gray-600 font-semibold">Featured Items</div>
                <Sparkles className="w-6 h-6 mx-auto text-green-500" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="space-y-2">
                <div className="text-4xl font-black bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-gray-600 font-semibold">Delicious</div>
                <Heart className="w-6 h-6 mx-auto text-orange-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Flavors
