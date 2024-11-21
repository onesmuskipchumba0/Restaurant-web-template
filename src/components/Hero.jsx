import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="relative h-[90vh] bg-[url('/hero-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Experience Fine Dining at Its Best
            </h1>
            <p className="text-xl mb-8">
              Savor exquisite flavors in an elegant atmosphere. Our master chefs create unforgettable culinary experiences.
            </p>
            <div className="space-x-4">
              <Link 
                to="/menu" 
                className="bg-primary px-8 py-3 rounded-full text-white hover:bg-primary/90 transition"
              >
                View Menu
              </Link>
              <Link 
                to="/reservations" 
                className="bg-white px-8 py-3 rounded-full text-primary hover:bg-gray-100 transition"
              >
                Book a Table
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero; 