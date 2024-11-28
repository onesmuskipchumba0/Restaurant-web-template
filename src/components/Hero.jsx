import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';
import { BiRestaurant } from 'react-icons/bi';
import { MdRestaurantMenu, MdDeliveryDining } from 'react-icons/md';
import { AiFillInstagram, AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai';

function Hero() {
  const [featuredMeals, setFeaturedMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedMeals = async () => {
      try {
        // Fetch 4 random meals for the featured section
        const requests = Array(4).fill().map(() => 
          axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        );
        
        const responses = await Promise.all(requests);
        const meals = responses.map(response => response.data.meals[0]);
        setFeaturedMeals(meals);
      } catch (error) {
        console.error('Error fetching featured meals:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedMeals();
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Experience 
              <span className="text-primary"> Culinary</span> Excellence
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Embark on a gastronomic journey where every dish tells a story and every bite creates a memory.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/menu" 
                className="bg-primary px-8 py-4 rounded-full text-white hover:bg-primary/90 transition transform hover:scale-105 inline-flex items-center group"
              >
                Explore Menu
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2 group-hover:translate-x-1 transition" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link 
                to="/reservations" 
                className="bg-white/10 backdrop-blur-sm border border-white/30 px-8 py-4 rounded-full text-white hover:bg-white/20 transition transform hover:scale-105"
              >
                Book a Table
              </Link>
            </div>
          </motion.div>

          {/* Featured Dishes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="hidden md:grid grid-cols-2 gap-4"
          >
            {loading ? (
              <div className="flex items-center justify-center h-48">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary" />
              </div>
            ) : (
              featuredMeals.map((meal, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg" />
                  <img
                    src={meal.strMealThumb}
                    alt={`Featured Dish ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 p-4">
                    <p className="text-white font-medium">{meal.strMeal}</p>
                    <p className="text-gray-300 text-sm">Chef's Special</p>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center text-white">
          <p className="text-sm mb-2">Scroll to discover</p>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </motion.div>

      {/* Floating Social Links */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
        <div className="flex flex-col gap-6">
          {['facebook', 'instagram', 'twitter'].map((social) => (
            <motion.a
              key={social}
              href={`#${social}`}
              whileHover={{ scale: 1.2, x: -5 }}
              className="text-white hover:text-primary transition"
            >
              <img 
                src={`/${social}-icon.svg`} 
                alt={social} 
                className="w-6 h-6"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero; 