import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const Menu = () => {
  const menuCategories = [
    { id: 1, title: 'New in the Club', image: '/image-7.png', color: 'from-orange-600 to-orange-800' },
    { id: 2, title: 'BURGER', image: '/image-6.png', color: 'from-amber-600 to-amber-800' },
    { id: 3, title: 'SIDES', image: '/image-3.png', color: 'from-yellow-600 to-yellow-800' },
    { id: 4, title: 'FRIES', image: '/image-5.png', color: 'from-orange-700 to-orange-900' },
    { id: 5, title: 'DESSERTS AND BEVERAGES', image: '/image-2.png', color: 'from-amber-700 to-amber-900' },
    { id: 7, title: 'WRAPS', image: '/image-1.png', color: 'from-orange-600 to-red-700' },
    { id: 6, title: 'SIDES', image: '/image-3.png', color: 'from-yellow-600 to-yellow-800' },
    { id: 8, title: 'SALADS', image: '/image-4.png', color: 'from-green-600 to-green-800' },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="menu" className="relative min-h-screen bg-forest-green py-20 px-6 overflow-hidden">
      {/* Background Images with Opacity */}
      <div className="absolute inset-0 z-0">
        {/* Decorative background images - faded */}
        <div className="absolute top-10 left-10 w-64 h-64 opacity-10">
          <img 
            src="/image-6.png" 
            alt=""
            className="w-full h-full object-contain blur-sm"
          />
        </div>
        <div className="absolute top-40 right-20 w-48 h-48 opacity-10">
          <img 
            src="/image-7.png" 
            alt=""
            className="w-full h-full object-contain blur-sm"
          />
        </div>
        <div className="absolute bottom-20 left-1/4 w-56 h-56 opacity-10">
          <img 
            src="/image-3.png" 
            alt=""
            className="w-full h-full object-contain blur-sm"
          />
        </div>
        <div className="absolute bottom-40 right-10 w-52 h-52 opacity-10">
          <img 
            src="/image-4.png" 
            alt=""
            className="w-full h-full object-contain blur-sm"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-white text-5xl font-heading tracking-wider mb-2">MENU</h2>
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {menuCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
              className="relative group cursor-pointer"
            >
              {/* Card - Smaller, cleaner */}
              <div className="relative h-56 rounded-2xl overflow-hidden bg-gray-800/95 shadow-lg border border-gray-700/30">
                
                {/* Food Image - Compact */}
                <div className="absolute inset-0 flex items-center justify-center pt-4 pb-12">
                  <motion.img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-contain drop-shadow-xl px-6"
                    whileHover={{ 
                      scale: 1.08,
                      transition: { duration: 0.2 }
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                
                {/* Subtle shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full"
                  transition={{ duration: 0.5 }}
                />

                {/* Title at Bottom - Compact */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/60 to-transparent">
                  <h3 className="text-white text-[0.6rem] font-medium uppercase tracking-[0.2em] leading-tight text-center font-sans">
                    {category.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Carousel Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-2 mt-12"
        >
          <div className="h-2 w-2 rounded-full bg-gray-500" />
          <div className="h-2 w-8 rounded-full bg-white" />
          <div className="h-2 w-2 rounded-full bg-gray-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
