import { motion } from 'framer-motion';

function About() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-[url('/about-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-white"
            >
              Our Story
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">A Tradition of Excellence</h2>
            <p className="text-gray-600 mb-4">
              Founded in 1995, Savory has been serving exceptional cuisine to our valued guests for over 25 years. What started as a small family restaurant has grown into one of the city's most beloved dining destinations.
            </p>
            <p className="text-gray-600 mb-4">
              Our commitment to using the finest ingredients, combined with innovative cooking techniques and warm hospitality, creates an unforgettable dining experience for our guests.
            </p>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            src="/chef.jpg"
            alt="Our Chef"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default About; 