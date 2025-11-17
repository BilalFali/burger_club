import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';

// Generate random values outside component to avoid re-render issues
const generateFloatingSeeds = () => 
  [...Array(6)].map(() => ({
    x: Math.random() * 400 - 200,
    y: Math.random() * 400 - 200,
    duration: 3 + Math.random() * 2,
    delay: Math.random() * 2,
  }));

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const thumbnails = [
    { id: 1, image: '/Frame 5.png', alt: 'Classic Burger' },
    { id: 2, image: '/Frame 6.png', alt: 'Double Burger' },
    { id: 3, image: '/Frame 7.png', alt: 'Veggie Burger' },
    { id: 4, image: '/Frame 8.png', alt: 'Special Burger' },
  ];

  // Generate random values once on mount
  const floatingSeeds = useMemo(() => generateFloatingSeeds(), []);

  return (
    <section id="home" className="relative min-h-screen bg-forest-green overflow-hidden pt-20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-green-900/30 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-green-900/30 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 z-10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-green-300 text-sm tracking-[0.5em] font-semibold uppercase font-sans"
          >
            THE ULTIMATE
          </motion.h2>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white text-7xl md:text-8xl font-heading font-bold leading-tight tracking-tight"
          >
            Burger Club
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-green-200 text-lg tracking-wide font-display font-medium"
          >
            Savor the Flavor, Join the Club!
          </motion.p>

          {/* Thumbnail Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 pt-8"
          >
            {thumbnails.map((thumb, index) => (
              <motion.button
                key={thumb.id}
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                  currentSlide === index 
                    ? 'border-amber-400 shadow-lg shadow-amber-400/50' 
                    : 'border-green-700/50 hover:border-amber-400/50'
                }`}
              >
                <img 
                  src={thumb.image} 
                  alt={thumb.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to emoji if image not found
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="w-full h-full bg-linear-to-br from-amber-900 to-orange-800 flex items-center justify-center">
                        <span class="text-white text-2xl">🍔</span>
                      </div>
                    `;
                  }}
                />
              </motion.button>
            ))}
          </motion.div>

          {/* Carousel Indicators */}
          <div className="flex gap-2 pt-4">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === 0 ? 'w-12 bg-amber-400' : 'w-6 bg-green-700'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Right Content - Burger Image */}
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10"
        >
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 2, 0, -2, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="relative"
          >
            {/* Burger Image Container */}
            <div className="relative w-full aspect-square max-w-2xl mx-auto">
              {/* Glow effect */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 bg-amber-500/30 rounded-full blur-3xl"
              />
              
              {/* Main Burger Image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img 
                  src="/Default_burger_cinematic_and_of_different_types_flying_burger_1-removebg-preview 1.png" 
                  alt="The Ultimate Burger"
                  className="w-full h-full object-contain filter drop-shadow-2xl"
                  onError={(e) => {
                    // Fallback to emoji if image not found
                    e.currentTarget.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'text-[20rem] leading-none filter drop-shadow-2xl';
                    fallback.textContent = '🍔';
                    e.currentTarget.parentElement!.appendChild(fallback);
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Floating Sesame Seeds Animation */}
          {floatingSeeds.map((seed, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: seed.x, 
                y: seed.y,
                opacity: 0 
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: seed.duration,
                repeat: Infinity,
                delay: seed.delay,
              }}
              className="absolute w-2 h-2 bg-amber-200 rounded-full"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
