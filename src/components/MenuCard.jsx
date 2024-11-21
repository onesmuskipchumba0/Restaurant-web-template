import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import MealModal from './MealModal';

function MenuCard({ meal }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mealDetails, setMealDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchMealDetails = async () => {
    if (!mealDetails) {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
        );
        setMealDetails(response.data.meals[0]);
      } catch (error) {
        console.error('Error fetching meal details:', error);
      }
      setLoading(false);
    }
  };

  const handleViewDetails = async () => {
    await fetchMealDetails();
    setIsModalOpen(true);
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
      >
        <img 
          src={meal.strMealThumb} 
          alt={meal.strMeal} 
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-dark mb-2">{meal.strMeal}</h3>
          <p className="text-gray-600 text-sm mb-4">
            {meal.strCategory} • {meal.strArea}
          </p>
          <button 
            onClick={handleViewDetails}
            disabled={loading}
            className="bg-primary text-white px-4 py-2 rounded-md w-full hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Loading...' : 'View Details'}
          </button>
        </div>
      </motion.div>

      <MealModal
        meal={mealDetails}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default MenuCard; 